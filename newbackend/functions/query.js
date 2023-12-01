
const Book = require("../model/book")
const GenreBooks = async ({genre}) => {
  
    const List = await Book.find({
        status: "none",
        genre:genre
    });
  
    return List;
}

const GetAllBooks=async()=>{

    const List = await Book.find();
    return List;
}


const SearchBooks=async({text})=>{
    const searchTerm = new RegExp(`^${text}`, 'i'); // 'i' for case-insensitive

    try {
        const results = await Book.find({
            $or: [
                { title: searchTerm },
                { author: searchTerm },
                { genre: searchTerm }
            ]
        });

        return results;
    } catch (error) {
        // Handle any errors here
        console.error("Error occurred while searching books:", error);
        throw error;
    }
}
const GetRequests = async ({ userId }) => {
    let book = await Book.find({
        status: "pending",
        by: userId
    })
    return book
}
const GetPendingReq = async ({ userId }) => {
    let book = await Book.find({
        status: "pending",
        buyerId: userId
    })
    return book
}
const GetBooksSold = async ({ userId }) => {
    let book = await Book.find({
        status: "close",
        by: userId
    })
    return book
}
const GetBookReceived = async ({ userId }) => {
    let book = await Book.find({
        status: "close",
        buyerId: userId
    })
    return book
}


module.exports={GenreBooks,GetAllBooks,GetBookReceived,GetBooksSold,GetPendingReq,GetRequests,SearchBooks}