import React from 'react'
import classes from './ReviewList.css';
import Review from "./Review/Review";

const ReviewList = (props) => {
    return (
            <div className={classes.ReviewList}>
                <span>Reviews</span>
                <Review/>
                <Review/>
            </div>
    );
}

export default ReviewList;