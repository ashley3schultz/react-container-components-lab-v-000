<<<<<<< HEAD
import React, { Component } from 'react';

const MovieReviews = ({ reviews }) =>
  <div className="review-list">{
    reviews.map(r =>
      <div className="review" key={r.headline}>
      <h1>{r.headline}</h1>
      <h2>{r.byline}</h2>
      <p>{r.summary_short}</p>
      </div>
    )}
    </div>

MovieReviews.defaultProps = {
  reviews: []
};
=======
// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = ({ reviews }) => {
  <div className="review-list">
    reviews.map(review => <div className="review">{review}</div>)
  </div>
}
>>>>>>> 31d4daa88440b0a0d12dd1c72605c62621df60b0

export default MovieReviews
