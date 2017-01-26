var popular_hashtag = [
  {
    "id": null,
    "name": "itaque",
    "hashtag_count": 46
  },
  {
    "id": null,
    "name": "beatae",
    "hashtag_count": 45
  },
  {
    "id": null,
    "name": "praesentium",
    "hashtag_count": 45
  },
  {
    "id": null,
    "name": "iure",
    "hashtag_count": 44
  },
  {
    "id": null,
    "name": "molestiae",
    "hashtag_count": 40
  },
  {
    "id": null,
    "name": "repellat",
    "hashtag_count": 40
  },
  {
    "id": null,
    "name": "animi",
    "hashtag_count": 40
  },
  {
    "id": null,
    "name": "ullam",
    "hashtag_count": 39
  },
  {
    "id": null,
    "name": "dolorum",
    "hashtag_count": 38
  },
  {
    "id": null,
    "name": "perferendis",
    "hashtag_count": 38
  }
]

class Filersall extends React.Component {

  constructor() {
    super()
    this.state ={
      hashtag_names: popular_hashtag
    }
  }


  render() {
    return (
      <section id="trends-container">
        <h3>Trends</h3>
        <ul>
          {
            this.state.hashtag_names.map(
              (n) => {
                return( <Filter key={this.state.hashtag_names.indexOf(n)} data={n} /> )
              }
            )
          }
        </ul>
      </section>
    )
  }
}
