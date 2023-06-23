// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  // state = {status: true}

  //   signClick = id => {
  //     console.log(id)
  //     this.setState(prev => ({status: !prev.status}))
  //   }

  render() {
    // const {status} = this.state
    const {faqsList} = this.props

    return (
      <div>
        <div>
          <h1>FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem
                faqItem={each}
                key={each.id}
                // status={status}
                signClick={this.signClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
