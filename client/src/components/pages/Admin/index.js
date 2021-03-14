import React, { useState, useEffect } from "react";
import "./admin.css";
import Container from "../../../components/Container";
import SearchForm from "../../../components/SearchForm";
import SearchResults from "../../../components/SearchResults";
import Alert from "../../../components/Alert";
import AdminEdit from "../../../components/AdminEdit";
import API from "../../../utils/API";

function Search() {
  const [search, setSearch] = useState("Search by Name");
  const [title, setTitle] = useState([]);
  const [error, setError] = useState("");
  const [maker, setMaker] = useState(false);
  const [user, setUser] = useState(true);
  const [advertiser, setAdvertiser] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [searchGroup, setSearchGroup] = useState([]);
  const [resultsArr, setResultsArr] = useState([]);
  const [userId, setUserId] = useState("");
  const [editToggle, setEditToggle] = useState(true);
  const [editUser, setEditUser] = useState("");
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
    } else if (admin === true) {
      console.log("searching for admin");
      API.getAdmin().then((res) => {
        setSearchGroup(res);
        setResultsArr(res);
      });
    }
  }, [maker, user, advertiser, admin]);

  useEffect(() => {
    API.getUser(userId).then((res) => {
      console.log("-----------------------Information------------------------");
      console.log(res);
      setEditUser(res);
    });
  }, [userId]);

  const searchFunc = (query) => {
    console.log("results Arr:   ", resultsArr);
    if (query === "") {
      let emptyQuery = resultsArr;
      setSearchGroup(emptyQuery);
    } else {
      let tempArray = resultsArr.data.filter((person) => {
        let fullName = person.firstName + " " + person.lastName;
        return fullName.search(new RegExp(query, "i")) !== -1;
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
      setAdmin(false);
      setMenuState("Makers");
    } else if (event.target.id === "advertiser") {
      setMaker(false);
      setUser(false);
      setAdvertiser(true);
      setAdmin(false);
      setMenuState("Advertisers");
    } else if (event.target.id === "user") {
      setMaker(false);
      setUser(true);
      setAdvertiser(false);
      setAdmin(false);
      setMenuState("Users");
    } else if (event.target.id === "admin") {
      setMaker(false);
      setUser(false);
      setAdvertiser(false);
      setAdmin(true);
      setMenuState("Admin");
    }
  };

  const userOnClick = (event) => {
    setUserId(event.target.id);
    setEditToggle(false);
    setSearch("");
    console.log("search: ", search);
    API.getUser(userId).then((res) => {
      setEditUser(res);
    });
  };

  return (
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
        {!editToggle && editUser ? (
          <AdminEdit user={editUser} setEditToggle={setEditToggle} />
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
}

export default Search;
