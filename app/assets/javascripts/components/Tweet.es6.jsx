class Tweet extends React.Component {
  render() {
    return <li className="tweet">
        <img className="avatar" src="https://pbs.twimg.com/profile_images/2858734172/db7da718fd369eba6184973631d7d84a_bigger.jpeg" alt="" />
        <div className="tweet-content">
          <p>
            <span className="full-name">{this.props.data.username}</span>
            <span className="username">{this.props.data.handle}</span>
            <span className="timestamp">{this.props.data.handle}</span>
          </p>
          <p>I did something! Number </p>
        </div>
      </li>
  }
}
