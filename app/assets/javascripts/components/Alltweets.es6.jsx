
class Alltweets extends React.Component {

  constructor() {
    super()
    this.state = {
      tweets: []
    }
    this.fetchTweets = this.fetchTweets.bind(this)
  }

  fetchTweets() {
    $.ajax({
      url: '/tweets/recent',
      method: 'GET'
    })
    .done(function(response) {
      this.setState({
      tweets: response
      })

    }.bind(this))
  }

  componentDidMount() {
    this.fetchTweets();
  }

  render (){

    return (
      <section id="tweets-container">
      <h3>Tweets</h3>
      <ul>
        {
          this.state.tweets.map(
            (element) => {return (<Tweet key={element.id} data={element} />)}
          )
        }
      </ul>
      </section>
    )
  }
}
