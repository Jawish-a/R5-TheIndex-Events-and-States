import React, {useState} from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";

function App() {
  const [author, setAuthor] = useState(null);
  const [allAuthors, setAllAuthors] = useState(authors);

  const selectAuthor = (author) => { 
    // const currentAuthor = author;
    setAuthor(author);
    console.log(author)
  };
  // const authorsNames = [];
  //   authors.forEach(author => {
  //     authorsNames.push(`${author.first_name} ${author.last_name}`)
  //   });
  const filterAuthors = query => { 
    const x = authors.filter(author => `${author.first_name} ${author.last_name}`.includes(query))
    setAllAuthors(x)
   } 


  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar selectAuthor={selectAuthor}/>
        </div>
        <div className="content col-10">
          <AuthorList authors={allAuthors} selectAuthor={selectAuthor} filterAuthors={filterAuthors} />
          { author ? <AuthorDetail author={author} /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
