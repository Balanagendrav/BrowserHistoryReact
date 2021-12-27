import './index.css'

const BrowserTodo = props => {
  const {destinationDetails, deleteTransaction} = props
  const {logoUrl, domainUrl, timeAccessed, title, id} = destinationDetails
  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="destination-item">
      <div className="browser-start">
        <p className="browser-time">{timeAccessed}</p>
        <div className="history-content">
          <img src={logoUrl} alt="domain logo" className="destination-image" />
          <div className="browser-middle">
            <p className="browser-title">{title}</p>
            <p className="name">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div className="browser-end">
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteTransaction}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="browser-delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserTodo
