const asyncHandler = require('express-async-handler')

const Reviews = require('../models/reviewModel')

//@desc GetReviews
//@route GET /api/reviews
//@access Private

const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Reviews.find()
  res.status(200).json(reviews);
});

//@desc SetReviews
//@route POST /api/reviews
//@access Private


const setReviews = asyncHandler(async (req, res)=> {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const reviews = await Reviews.create({
      text: req.body.text
    })
  res.status(200).json(reviews);
});

//@desc UpdateReviews
//@route PUT/api/reviews
//@access Private


const updateReviews =  asyncHandler(async (req, res) => {
  const reviews = await Reviews.findById(req.params.id)
  if(!reviews) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const updatedReviews = await Reviews.findByIdAndUpdate(req.params.id,req.body, {new: true,} )
  res.status(200).json(updatedReviews);
});


//@desc DeleteReviews
//@route DELETE /api/reviews
//@access Private

const deleteReviews =  asyncHandler(async (req, res)=> {
  const reviews= await Reviews.findById(req.params.id);
  if(!reviews) {
    res.status(400) 
    throw new Error('Review not found')
  }
  
await reviews.remove()

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getReviews,
  setReviews,
  updateReviews,
  deleteReviews
};