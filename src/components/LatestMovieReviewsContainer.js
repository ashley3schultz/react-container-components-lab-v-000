import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor(){
    super()
    this.state = {reviews: []}
  }

  componentDidMount() {
    fetch(URL)
<<<<<<< HEAD
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
=======
      .then(response => response.json())
      .then(reviews => this.setState({ reviews }))
  }

  render() {
    return <div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>
>>>>>>> 31d4daa88440b0a0d12dd1c72605c62621df60b0
  }
}

export default LatestMovieReviewsContainer
