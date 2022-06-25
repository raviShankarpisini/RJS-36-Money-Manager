import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    historyItemsList: [],
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
    Income: 0,
    Expenses: 0,
  }

  addingTransaction = event => {
    event.preventDefault()
    const {title, amount, optionId, historyItemsList} = this.state
    const newTransaction = {
      id: uuid(),
      title,
      amount,
      optionId,
    }

    this.setState({
      historyItemsList: [...historyItemsList, newTransaction],
      title: '',
      amount: '',
    })

    if (optionId === 'INCOME') {
      this.setState(prevState => ({
        Income: parseInt(prevState.Income) + parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        Expenses: parseInt(prevState.Expenses) + parseInt(amount),
      }))
    }
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeType = event => {
    this.setState({optionId: event.target.value})
  }

  deleteHistoryItem = id => {
    const {historyItemsList} = this.state
    const listAfterDelete = historyItemsList.filter(
      eachItem => eachItem.id !== id,
    )
    const selectingDeletingItem = historyItemsList.find(
      eachItem => eachItem.id === id,
    )
    const {optionId, amount} = selectingDeletingItem

    if (optionId === 'Income') {
      this.setState(prevState => ({
        Income: parseInt(prevState.Income) - parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        Expenses: parseInt(prevState.Expenses) - parseInt(amount),
      }))
    }

    this.setState({historyItemsList: listAfterDelete})
  }

  render() {
    const {
      historyItemsList,
      Income,
      Expenses,
      amount,
      title,
      optionId,
    } = this.state
    const balance = parseInt(Income) - parseInt(Expenses)

    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="user-container">
            <h1 className="user-name">Hi,Richard</h1>
            <p className="user-description">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <MoneyDetails moneyDetails={{Income, balance, Expenses}} />
          {/* if the above above if we give as list or tuple as it does not taking as argument
          we have to give in dictionary,thats why we are giving items in {} */}
          <div className="bottom-container">
            <form
              className="transaction-container"
              onSubmit={this.addingTransaction}
            >
              <h1 className="transaction-heading">Add Transaction</h1>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                onChange={this.onChangeTitle}
                value={title}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <label htmlFor="select">TYPE</label>
              <select id="select" onChange={this.onChangeType} value={optionId}>
                {transactionTypeOptions.map(eachOption => (
                  <option value={eachOption.optionId} key={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
                {/* <option value="Income" id="INCOME" selected>
                  Income
                </option>
                <option value="Expenses" id="EXPENSES">
                  Expenses
                </option> */}
              </select>
              <button className="submit-button" type="submit">
                Add
              </button>
            </form>
            <div className="history-container">
              <div className="sub-container">
                <h1 className="history-heading">History</h1>
                <div className="history-top">
                  <p className="table-heading">Title</p>
                  <p className="table-heading">Amount</p>
                  <p className="table-heading">Type</p>
                  <></>
                </div>
                <ul className="history-list-container">
                  {historyItemsList.map(eachItem => (
                    <TransactionItem
                      eachItem={eachItem}
                      key={eachItem.id}
                      deleteHistoryItem={this.deleteHistoryItem}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
