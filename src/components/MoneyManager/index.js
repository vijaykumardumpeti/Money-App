import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
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

const moneyDetailsList = [
  {
    id: 0,
    className: 'your-balance',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    text: 'Your Balance',
    alt: 'balance',
  },
  {
    id: 1,
    className: 'your-income',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    text: 'Your Income',
    alt: 'income',
  },
  {
    id: 2,
    className: 'your-expenses',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    text: 'Your Expenses',
    alt: 'expenses',
  },
]

const listA = [
  {
    id: uuidv4(),
    salary: 'Salary',
    rupees: 'RS 50000',
    type: 'income',
  },
  {
    id: uuidv4(),
    salary: 'Salary',
    rupees: 'RS 50000',
    type: 'income',
  },
]

// Write your code here
export default class MoneyManager extends Component {
  render() {
    return (
      <>
        <div className="bg-container">
          <div className="money-manager-container">
            <div className="name-container">
              <h1>Hi,Richard</h1>
              <p>Welcome back to your</p>
              <p href="jaja">Money Manager</p>
            </div>
            <ul className="money-details-container">
              {moneyDetailsList.map(eachObject => (
                <MoneyDetails eachObject={eachObject} key={eachObject.id} />
              ))}
            </ul>
            <div className="transaction-and-history-container">
              <div className="transaction-container">
                <h1>Add Transaction</h1>
                <form>
                  <div className="input-container">
                    <label className="label" htmlFor="title">
                      TITLE
                    </label>
                    <input
                      className="input-element"
                      id="title"
                      type="text"
                      placeholder="TITLE"
                    />
                  </div>
                  <div className="input-container">
                    <label className="label" htmlFor="amount">
                      AMOUNT
                    </label>
                    <input
                      className="input-element"
                      id="amount"
                      type="text"
                      placeholder="AMOUNT"
                    />
                  </div>
                  <div className="input-container">
                    <label className="label" htmlFor="selector">
                      TYPE
                    </label>
                    <select className="input-element" id="selector">
                      {transactionTypeOptions.map(eachObject => (
                        <option
                          key={eachObject.optionId}
                          className="select-element"
                          value={eachObject.optionId}
                        >
                          {eachObject.displayText}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button className="submit-button" type="submit">
                    Add
                  </button>
                </form>
              </div>
              <div className="history-container">
                <h1>History</h1>
                <div className="table-container">
                  <p className="column">Title</p>
                  <p className="column">Amount</p>
                  <p className="last-column">Type</p>
                </div>
                <ul className="unordered-list-container">
                  {listA.map(eachObject => (
                    <TransactionItem
                      eachObject={eachObject}
                      key={eachObject.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
