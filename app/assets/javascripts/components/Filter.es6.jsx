class Filter extends React.Component {
  render () {
    
    return <li> {this.props.data.name} count:{this.props.data.hashtag_count}
    </li>

  }
}
