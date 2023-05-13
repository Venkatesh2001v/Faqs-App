import {Component} from 'react'

import './index.css'

const plusImageUrl =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImageUrl =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    return (
      <div>
        <hr className="line" />
        <p className="ans">{answerText}</p>
      </div>
    )
  }

  onReturnAnswer = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    const {isActive} = this.state
    const imageUrl = isActive ? minusImageUrl : plusImageUrl
    const altText = isActive ? 'minus' : 'plus'

    return (
      <li className="faq-item">
        <div className="item-container">
          <h1 className="question">{questionText}</h1>
          <button
            className="button"
            type="button"
            onClick={this.onReturnAnswer}
          >
            <img src={imageUrl} className="image-icon" alt={altText} />
          </button>
        </div>
        {isActive && this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
