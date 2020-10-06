import React, {Component} from 'react';

class Books extends Component {
    constructor(){
        super();
        this.state = {
      //initialize state with an array of books that is empty, otherwise we'll get cannot read property of map undefined error. We want to map over all the books in the database,
    //   and if it's not an array when the page loads it will give an error
            books: []
        }
    }
    // Lifecycle method where we do a fetch request 
    componentDidMount(){
        this.getBooks(); 
    }
    // This is an AJAX call so we'll use the async keyword, you'll need to figure out where your rails server is running. You may need to check the puma file in the config folder
    getBooks = async () => {
        const books = await fetch("http://localhost:3001/books");
        const parsedResponse = await books.json()
        console.log(parsedResponse);
        this.setState({
            books: parsedResponse
        })
    }
    render(){
        const books = this.state.books.map((book)=>{
            return <div key={book.id}>
                {/* <h3>This book is for students in Grade {book.grade}, but can also be used for students reading at a {book.reading_level} reading level</h3>
                <p>This book has been curated for the above students whose literacy development falls within a certain range and should be used by the teacher to {book.description}</p>
                <p>Your student's book contains the following: {book.contents}</p> */}
                <p>
                    <h1>{book.grade} Grade, Level {book.reading_level}</h1>
                    <h3>{book.description}</h3>
                    <h4>{book.contents}</h4>
                </p>
            </div>
        })
        return(
            <div>
                <h2>This is the books component</h2>
                {books}
            </div>
        )
    }


}

export default books;