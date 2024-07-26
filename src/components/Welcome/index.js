// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  toggleButton = () => {
    const {isSubscribe} = this.state
    console.log(isSubscribe)
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="content">Thank you! Happy Learning</p>

        <button type="button" onClick={this.toggleButton}>
          {isSubscribe ? 'subscribe' : 'subscribed'}
        </button>
      </div>
    )
  }
}

export default Welcome
