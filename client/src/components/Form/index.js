import React from "react";


function Form(props){
return (
  <div className="container">
  <form className="mb-5">
    <div className="form-group">
      <label htmlFor="search"><h2>Book Search</h2></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Harry Potter"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5">
        Search
        </button>
    </div>
    <hr className="border border-secondary" />
  </form>
  </div>
);
}

export default Form;