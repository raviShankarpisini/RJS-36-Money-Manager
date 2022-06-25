// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {Income, Expenses, balance} = moneyDetails
  return (
    <div className="MoneyDetails-Container">
      <div className="card-container card-balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="text-container">
          <p className="heading-style">Your Balance</p>
          <p className="amount-style" testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="card-container card-income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="text-container">
          <p className="heading-style">Your Income</p>
          <p className="amount-style" testid="incomeAmount">
            Rs {Income}
          </p>
        </div>
      </div>
      <div className="card-container card-expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="text-container">
          <p className="heading-style">Your Expenses</p>
          <p className="amount-style" testid="expensesAmount">
            Rs {Expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
