import {Component} from 'react'
import './index.css'

export default class MoneyDetails extends Component {
  render() {
    const {balanceAmount, incomeAmount, expensesAmount} = this.props

    return (
      <ul className="money-details-container">
        <li className={`money-detail-container ${'your-balance'}`}>
          <img
            className="money-image"
            alt="balance"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          />
          <div>
            <p className="text">Your Balance</p>
            <p testid="balanceAmount" className="RPS">
              RS {balanceAmount}
            </p>
          </div>
        </li>
        <li className={`money-detail-container ${'your-income'}`}>
          <img
            className="money-image"
            alt="income"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          />
          <div>
            <p className="text">Your Income</p>
            <p testid="incomeAmount" className="RPS">
              RS {incomeAmount}
            </p>
          </div>
        </li>
        <li className={`money-detail-container ${'your-expenses'}`}>
          <img
            className="money-image"
            alt="expenses"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          />
          <div>
            <p className="text">Your Expenses</p>
            <p testid="expensesAmount" className="RPS">
              RS {expensesAmount}
            </p>
          </div>
        </li>
      </ul>
    )
  }
}
