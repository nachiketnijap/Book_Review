const express = require("express")
const authMiddleware = require("../middleware/auth-middleware")
const { submitReview, updateReview, deleteReview } = require("../controllers/review-controller")
const router =express.Router()
//post- submit review 
router.post('/books/:id/reviews',authMiddleware,submitReview)

//put- update review
router.put('/reviews/:id',authMiddleware,updateReview)

//delete- delete review
router.delete('/reviews/:id',authMiddleware,deleteReview)


module.exports = router;