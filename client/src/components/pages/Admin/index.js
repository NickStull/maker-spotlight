import React, { useState, useEffect } from "react";
import "./admin.css";
import Container from "../../../components/Container";
import SearchForm from "../../../components/SearchForm";
import SearchResults from "../../../components/SearchResults";
import Alert from "../../../components/Alert";
import API from "../../../utils/API";

function Search() {
  const [search, setSearch] = useState("Search by Name");
  const [title, setTitle] = useState([]);
  const [error, setError] = useState("");
  const [maker, setMaker] = useState(false);
  const [user, setUser] = useState(false);
  const [advertiser, setAdvertiser] = useState(false);
  const [searchGroup, setSearchGroup] = useState([]);
  const [resultsArr, setResultsArr] = useState([]);
  const [userId, setUserId] = useState("");
  const [editToggle, setEditToggle] = useState(true);
  const [menuState, setMenuState] = useState("User Type");

  useEffect(() => {
    if (!search) {
      return;
    } else if (maker === true) {
      console.log("searching for makers");
      API.getMakers().then((res) => {
        setSearchGroup(res);
        setResultsArr(res);
      });
    } else if (user === true) {
      console.log("searching for users");
      API.getUsers().then((res) => {
        setSearchGroup(res);
        setResultsArr(res);
      });
    } else if (advertiser === true) {
      console.log("searching for advertisers");
      API.getAdvertisers().then((res) => {
        setSearchGroup(res);
        setResultsArr(res);
      });
    }
    // console.log("search group: ", searchGroup);
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
  }, [maker, user, advertiser]);

  const searchFunc = (query) => {
    console.log("results Arr:   ", resultsArr);
    if (query === "") {
      let emptyQuery = resultsArr;
      setSearchGroup(emptyQuery);
    } else {
      let tempArray = resultsArr.data.filter((person) => {
        return (
          person.firstName.search(new RegExp(query, "i")) !== -1 ||
          person.lastName.search(new RegExp(query, "i")) !== -1
        );
      });
      console.log("temp ARRRAY: ", tempArray);
      setSearchGroup(tempArray);
    }
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    searchFunc(event.target.value);
  };

  const handleRadioButton = (event) => {
    if (event.target.id === "maker") {
      setMaker(true);
      setUser(false);
      setAdvertiser(false);
      setMenuState("Makers");
    } else if (event.target.id === "advertiser") {
      setMaker(false);
      setUser(false);
      setAdvertiser(true);
      setMenuState("Advertisers");
    } else if (event.target.id === "user") {
      setMaker(false);
      setUser(true);
      setAdvertiser(false);
      setMenuState("Users");
    }
  };

  const userOnClick = (event) => {
    setUserId(event.target.id);
    console.log(editToggle);
    editToggle === true ? setEditToggle(false) : setEditToggle(true);
  };

  return (
    console.log("search group: ", searchGroup),
    console.log("title", title),
    (
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className={editToggle ? "text-center" : "text-center vanish"}>
            Search for a User
          </h1>
          <Alert
            type="danger"
            style={{ opacity: error ? 1 : 0, marginBottom: 10 }}
          >
            {error}
          </Alert>
          <SearchForm
            menuState={menuState}
            editToggle={editToggle}
            handleInputChange={handleInputChange}
            results={search}
            handleRadioButton={handleRadioButton}
          />
          {searchGroup.length > 0 ? (
            searchGroup.map((item) => (
              <SearchResults
                editToggle={editToggle}
                title={
                  item.firstName + " " + item.lastName + " Email: " + item.email
                }
                id={item.userId}
                userOnClick={userOnClick}
              />
            ))
          ) : (
            <SearchResults />
          )}
        </Container>
      </div>
    )
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
