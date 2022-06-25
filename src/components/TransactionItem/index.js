// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachItem, deleteHistoryItem} = props
  const {id, type, amount, title} = eachItem
  const onClickDelete = () => {
    deleteHistoryItem(id)
  }
  return (
    <li className="list-item">
      <p className="para">{title}</p>
      <p className="para">Rs {amount}</p>
      <p className="para">{type}</p>
      <button type="button" onClick={onClickDelete} testid="delete">
        <img
          className="delete-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
