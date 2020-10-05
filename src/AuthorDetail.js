import React from "react";

const AuthorDetail = props => {  
  const author = props.author;
  const books = []
  author.books.forEach((book, index) => {
      books.push(<tr key={index}><td>{book.title}</td><td>I SHOULD BE A STRING OF THIS BOOK'S AUTHORS</td><td><button className="btn" style={{backgroundColor: book.color}}/></td></tr>)
  });
  return (
    <div className="author col-xs-10">
        <div>
            <h3>{author.first_name} {author.last_name}</h3>
            <img src={author.imageUrl} alt={author.first_name} className="img-thumbnail" />
        </div>
        <table className='mt-3 table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Authors</th>
                    <th>Color</th>
                </tr>
            </thead>
            <tbody>
                {books}
            </tbody>
        </table>
    </div>
  );
};

export default AuthorDetail;
