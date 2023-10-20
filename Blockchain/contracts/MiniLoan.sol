// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract MiniLoan {
    address public admin;
    uint256 totalRepaymentAmount;

    //Enum
    enum LoanStatus {
        PENDING,
        APPROVED,
        PAID
    }

    //Struct
    struct Loan {
        address borrower;
        uint256 amount;
        uint256 startDate;
        uint256 weeklyRepaymentAmount;
        uint256 repaymentDeadline;
        uint256 lastRepaymentDate;
        uint256[] scheduledRepayments;
        LoanStatus status;
    }

    //Struct array object
    Loan[] public loan;

    constructor(address _admin) {
        admin = _admin;
    }

    /**
     * @dev Method to create a loan.
     * @notice This method allows user to create a loan.
     * @param _amount: Amount to create a loan.
     * @param _startDate: Start date to create a loan.
     * @param _weeklyRepaymentAmount: Weekly repay the amount .
     * @param _repaymentDeadline: Deadline of repay the amount.
     */
    function createLoan(
        uint256 _amount,
        uint256 _startDate,
        uint256 _weeklyRepaymentAmount,
        uint256 _repaymentDeadline
    ) external {
        require(
            _weeklyRepaymentAmount > 0,
            "MiniLoan: Weekly Repayment must be greater than zero"
        );

        Loan memory newLoan = Loan({
            borrower: msg.sender,
            amount: _amount,
            startDate: _startDate,
            weeklyRepaymentAmount: _weeklyRepaymentAmount,
            repaymentDeadline: _repaymentDeadline,
            lastRepaymentDate: 0,
            scheduledRepayments: new uint256[](_weeklyRepaymentAmount),
            status: LoanStatus.PENDING
        });

        loan.push(newLoan);
        for (uint256 i = 0; i < _weeklyRepaymentAmount; i++) {
            uint256 repaymentDate = _startDate + i * 1 weeks;
            uint256 repaymentAmount = _amount / _weeklyRepaymentAmount;
            newLoan.scheduledRepayments[i] = repaymentAmount;
        }
    }

    /**
     * @dev Method to approve a loan.
     * @notice This method allows user to approve a loan.
     * @param loanId: The id of the loan to approve.
     */
    function approveLoan(uint256 loanId) external {
        require(
            msg.sender == admin,
            "MiniLoan: Only authorised user can approve the loan"
        );

        Loan storage loanApplication = loan[loanId];

        require(
            loanApplication.status == LoanStatus.PENDING,
            "MiniLoan: Loan application is not pending"
        );

        loanApplication.status = LoanStatus.APPROVED;

        loanApplication.lastRepaymentDate = block.timestamp;
    }

    /**
     * @dev Method to repay a loan.
     * @notice This method allows user to repay a loan.
     * @param loanId: The id of the loan to repay.
     */
    function repay(uint256 loanId) external payable {
        require(loanId <= loan.length - 1, "MiniLoan: Invalid loan number");

        Loan storage loanApplication = loan[loanId];

        require(
            msg.sender == loanApplication.borrower,
            "MiniLoan: Only borrower can repay the loan"
        );

        require(
            msg.value >= loanApplication.weeklyRepaymentAmount,
            "MiniLoan: Invalid repayment amount"
        );

        require(
            block.timestamp <= loanApplication.repaymentDeadline,
            "MiniLoan: Loan has already expired"
        );

        require(
            block.timestamp >= loanApplication.lastRepaymentDate + 1 weeks,
            "MiniLoan: Weekly repayment time has expired"
        );

        loanApplication.lastRepaymentDate = block.timestamp;

        if (address(this).balance == totalRepaymentAmount) {
            payable(admin).transfer(totalRepaymentAmount);
            loanApplication.status = LoanStatus.PAID;
            return;
        }

        if (address(this).balance > totalRepaymentAmount) {
            payable(loanApplication.borrower).transfer(
                address(this).balance - totalRepaymentAmount
            );
        }
    }
}
