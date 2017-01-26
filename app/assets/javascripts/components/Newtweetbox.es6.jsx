class Newtweetbox extends React.Component {
  constructor() {
    super()
    this.state ={
      newTweet: null
    }
  }
  printKane() {
    console.log('kane');
    
  }

  render(){

    return (
        <section id="tweet-box">
        <p id="tweet-box-title"> this is tweet box </p>
        <form onSubmit={(e) => this.printKane()} id="tweet-form">

          <textarea id="new-tweet" cols="30" rows="5" maxLength="140" name="tweet"></textarea>
          <input type="submit" value="Tweet"/>
        </form>
        </section>
    )

  }
}
