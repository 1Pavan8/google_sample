// Write your code here
// Write your code her
import {Component} from 'react'
import Suggestionitem from '../SuggestionItem/index'
import './index.css'

class GoogleSuggestions extends Component {
  state = {inp: ''}

  arrow = txt => {
    this.setState(() => ({inp: txt}))
  }

  searchinp = event => {
    this.setState(() => ({inp: event.target.value}))
  }

  render() {
    const {suggestionsList} = this.props
    const {inp} = this.state
    const updatedlist = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(inp.toLowerCase()),
    )

    return (
      <div className="main">
        <div>
          <img
            className="gimg"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="shadowcont">
            <div className="search">
              <img
                className="searchimg"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                className="searchbar"
                type="search"
                placeholder="Search Google"
                onChange={this.searchinp}
                value={inp}
              />
            </div>
            <ul className="searchsug">
              {updatedlist.map(each => (
                <Suggestionitem details={each} arrow={this.arrow} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
