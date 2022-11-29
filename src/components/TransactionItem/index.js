// Write your code here
import {Component} from 'react'
import './index.css'

export default class TransactionItem extends Component {
  render() {
    const {eachObject, key, object} = this.props
    const {salary, rupees} = eachObject

    return (
      <li key={key} className="transaction-item">
        <div className="items-container">
          <p className="column1">{salary}</p>
          <p className="column2">{rupees}</p>
          <p className="column3">{object.displayText}</p>
          <button className={`button-style ${'column4'}`} type="button">
            <img
              className="delete-image"
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            />
          </button>
        </div>
      </li>
    )
  }
}
