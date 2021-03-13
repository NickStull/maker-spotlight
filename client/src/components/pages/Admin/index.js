import React, { useState, useEffect } from "react";
import "./admin.css";
import Container from "../../../components/Container";
import SearchForm from "../../../components/SearchForm";
import SearchResults from "../../../components/SearchResults";
import Alert from "../../../components/Alert";
import API from "../../../utils/API";

function Search() {
  const [search, setSearch] = useState("Search by Name");
  const [title, setTitle] = useState("Derek Bardini");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [maker, setMaker] = useState(false);
  const [user, setUser] = useState(false);
  const [advertiser, setAdvertiser] = useState(false);
  const [searchGroup, setSearchGroup] = useState({});

  useEffect(() => {
    if (!search) {
      return;
    } else if (maker === true) {
      console.log("searching for makers");
      API.getMakers().then((res) => {
        searchFunc(res);
      });
    } else if (user === true) {
      console.log("searching for users");
      API.getUsers().then((res) => {
        searchFunc(res);
      });
    } else if (advertiser === true) {
      console.log("searching for advertisers");
      API.getAdvertisers().then((res) => {
        searchFunc(res);
      });
    }

    // API.getUsers(search)
    //   .then((res) => {
    //     if (res.data.length === 0) {
    //       throw new Error("No results found.");
    //     }
    //     if (res.data.status === "error") {
    //       throw new Error(res.data.message);
    //     }
    //     setTitle(res.data[1][0]);
    //     setUrl(res.data[3][0]);
    //   })
    //   .catch((err) => setError(err));
  }, [maker, user, advertiser, search]);

  const searchFunc = (results) => {
    setSearchGroup(results);
    let namesArr = [];
    let fullName = "";

    for (let i = 0; i < results.data.length; i++) {
      console.log("first name", searchGroup.data[i].firstName);
      console.log("last name", searchGroup.data[i].lastName);
    }

    // API.getUserByName(searchGroup).then((res) => {
    //   if (res.data === null) {
    //     console.log("no results");
    //   }
    //   console.log(res);
    // });
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleRadioButton = (event) => {
    setMaker(document.getElementById("maker").checked);
    setUser(document.getElementById("user").checked);
    setAdvertiser(document.getElementById("advertiser").checked);
  };

  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search for a User</h1>
        <Alert
          type="danger"
          style={{ opacity: error ? 1 : 0, marginBottom: 10 }}
        >
          {error}
        </Alert>
        <SearchForm
          handleInputChange={handleInputChange}
          results={search}
          handleRadioButton={handleRadioButton}
        />
        <SearchResults title={title} url={url} />
      </Container>
    </div>
  );
}

export default Search;

{
  /* <button>Makers</button>
<button>Advertisers</button>
<button>Users</button> */
}

// import React, { Component } from "react";
// import SearchForm from "./SearchForm";
// import ResultList from "./ResultList";
// import API from "../utils/API";

// class SearchResultContainer extends Component {
//   state = {
//     search: "",
//     results: []
//   };

//   // When this component mounts, search the Giphy API for pictures of kittens
//   componentDidMount() {
//     this.searchGiphy("kittens");
//   }

//   searchGiphy = query => {
//     API.search(query)
//       .then(res => this.setState({ results: res.data.data }))
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({
//       [name]: value
//     });
//   };

//   // When the form is submitted, search the Giphy API for `this.state.search`
//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.searchGiphy(this.state.search);
//   };

//   render() {
//     return (
//       <div>
//         <SearchForm
//           search={this.state.search}
//           handleFormSubmit={this.handleFormSubmit}
//           handleInputChange={this.handleInputChange}
//         />
//         <ResultList results={this.state.results} />
//       </div>
//     );
//   }
// }

// export default SearchResultContainer;

// const Admin = () => {
//   const [maker, setMaker] = useState({
//     search: "",
//     results: [],
//   });
//   const [username, setUsername] = useState();

//   const makerSearch = () => {};
//   return (
//     <>
//       <div className="topnav">
//         <div className="search-container">
//           <form action="/action_page.php">
//             <input
//               onChange={() => {}}
//               type="text"
//               placeholder="Search.."
//               name="search"
//             />
//             <button type="submit">
//               <i className="fa fa-search"></i>
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Admin;
