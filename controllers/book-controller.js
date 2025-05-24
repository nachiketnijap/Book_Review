const Book = require("../models/Book");

const Review =require("../models/Review")
// add new book
const addBook = async (req, res) => {
  try {
    const { title, author, genre, description } = req.body;
    const createdBy = req.userInfo.userId; // this will be set by authmiddleware
    const book = new Book({
      title,
      author,
      genre,
      description,
      createdBy,
    });
    const savedBook = await book.save();
    if (savedBook) {
      res.status(201).json({
        success: true,
        message: "Book added successfully!",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Unable to add Book.",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: `Some error occurred!  ${e}`
    });
  }
};

// get all books

const getBooks = async (req, res) => {
  try {
    const { author, genre} = req.query;
    // which page you want to see
    const page = parseInt(req.query.page) || 1;
    // how many document per page
    const limit = parseInt(req.query.limit) || 10;
    let filter = {};
    if (author) filter.author = author;
    if (genre) filter.genre = genre;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const books = await Book.find(filter)
      .skip(skip)
      .limit(parseInt(limit));
    // total books count
    const totalBooks = await Book.countDocuments(filter);

    res.status(200).json({
      success: true,
      message: "Books fetched successfully!",
      page: parseInt(page),
      totalPages: Math.ceil(totalBooks / limit),
      totalBooks,
      data: books
    });

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: `Some error occurred!  ${e}`
    });
  }
};


const getBookDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    // find all ratings
    const allRatings = await Review.find({ book: id }).select("rating");

    // convert into array of ratings
    const ratings = allRatings.map(r => r.rating);

    // add this ratings 
    const sumRatings = ratings.reduce((a, b) => a + b, 0);

    // calculate average
    const averageRating = ratings.length ? sumRatings / ratings.length : 0;

    const allReviews = await Review.find({ book: id })
      .select("comment user rating createdAt")
      .populate("user", "username") //  populate user info
      .skip(skip)
      .limit(limit);

    const totalReviews = await Review.countDocuments({ book: id });

    res.status(200).json({
      success: true,
      message: "Reviews fetched successfully!",
      page: page,
      totalPages: Math.ceil(totalReviews / limit),
      averageRating,
      totalReviews,
      data: allReviews
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: `Some error occurred!  ${e}`
    });
  }
};

const searchBookByTitleOrAuthor =async(req,res)=>{
     try {
    const { author, title} = req.query;

    let filter = {};

     if (author) {
      filter.author = { $regex: author, $options: "i" }; // partial & case-insensitive
    }
    if (title) {
      filter.title = { $regex: title, $options: "i" };
    }
   

    const books = await Book.find(filter)

    res.status(200).json({
      success: true,
      message: "Books fetched successfully!",
      data: books
    });

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: `Some error occurred!  ${e}`
    });
  }
}


module.exports = {addBook,getBooks,getBookDetails,searchBookByTitleOrAuthor};
