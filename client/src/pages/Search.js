import React from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        value: "",
        books: []
    };
    
    componentDidMount() {
        this.searchBook("Harry Potter");
    }


    // https://developers.google.com/books/docs/v1/reference/volumes
    makeBook = bookData => {
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            subtitle: bookData.volumeInfo.subtitle,
            authors: bookData.volumeInfo.authors===undefined ? bookData.volumeInfo.authors : bookData.volumeInfo.authors.join(', '),
            // authors: bookData.volumeInfo.authors.join(', '),
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks===undefined ? bookData.volumeInfo.title : bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink,
            isbn: bookData.volumeInfo.industryIdentifiers[0].identifier,
            published: bookData.volumeInfo.publishedDate,
            categories: bookData.volumeInfo.categories,
            pagecount: bookData.volumeInfo.pageCount
        }
    }

    searchBook = query => {
        API.getBook(query)
            .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
            .catch(err => console.error(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const value = document.getElementById('search').value;
        console.log(value);
        
        this.searchBook(this.state.search);
        // console.log(this.state.books);
        
    };

    render() {
        return (
            <div>
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div className="container">
                    <h2>Results</h2>
                    <Results books={this.state.books} />                    
                </div>
            </div>
        )
    }
}

export default Search;