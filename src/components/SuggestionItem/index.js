// Write your code here
import './index.css'

const Suggestionitem = props => {
  const {details, arrow} = props
  const {suggestion} = details

  const arrowfn = () => {
    arrow(suggestion)
  }
  return (
    <li className="item">
      <p>{suggestion}</p>
      <img
        onClick={arrowfn}
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default Suggestionitem
