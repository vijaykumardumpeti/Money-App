import {Component} from 'react'
import './index.css'

export default class MoneyDetails extends Component {
  render() {
    const {eachObject, key} = this.props
    const {className, imageUrl, text, alt} = eachObject

    return (
      <li key={key} className={`money-detail-container ${className}`}>
        <img className="money-image" alt={alt} src={imageUrl} />
        <div>
          <p className="text">{text}</p>
          <p className="RPS">RS 0</p>
        </div>
      </li>
    )
  }
}
