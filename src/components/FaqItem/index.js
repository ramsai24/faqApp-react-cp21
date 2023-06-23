// Write your code here.
import {Component} from 'react'
import './index.css'

// const FaqItem = props => {
//   const {faqItem, signClick, status} = props
//   const {id, questionText, answerText} = faqItem

//   const statusUpdate = () => {
//     signClick(id)
//   }

class FaqItem extends Component {
  state = {status: true}

  statusUpdate = () => {
    this.setState(prev => ({status: !prev.status}))
  }

  render() {
    const {status} = this.state
    const {faqItem} = this.props
    const {questionText, answerText} = faqItem

    return (
      <li>
        <h1>{questionText}</h1>

        <button type="button" onClick={this.statusUpdate}>
          {status ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png "
              alt="minus"
            />
          )}
        </button>
        {status ? ' ' : <p>{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
