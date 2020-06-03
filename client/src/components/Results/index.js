import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {

    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    handleSave = book => {

        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
                .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveBook(book)
                .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
                .catch(err => console.error(err));
        }
    }

    render() {
        return (
            <div>
                {!this.props.books.length ? (
                    <h2 className="text-center">No Results to Display</h2>
                ) : (
                        <div>
                            {this.props.books.map(result => (

                                <div className="card mb-3 p-4" key={result._id}>
                                    <div className="row mb-5">
                                        <div className="col-md-10">
                                            <h4 className="card-title">{result.title}</h4>
                                            <h6 className="text-secondary">{result.subtitle}</h6>
                                            <h6 className="text-secondary">Written by {result.authors}</h6>
                                        </div>
                                        <div className="col-md-2">
                                            <div>
                                                <a href={result.link} className="btn btn-outline-dark" target="_blank" >View</a>
                                                <button onClick={() => this.handleSave(result)} className="btn btn-outline-danger ml-2" >
                                                    {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img alt={result.title} className="img-fluid border border-dark p-1" src={result.image} />
                            <h6 className="text-secondary"><br />Page Count: <span className="text-danger">{result.pagecount}</span></h6>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <h6 className="text-danger">{result.categories}</h6>
                                            <h6 className="text-secondary">{result.isbn} published on {result.published}</h6>
                                                <p className="card-text">{result.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

export default Results;