import React, { useEffect, useState } from "react";
import API from "../../utils/API";

const Imgur = () => {
  const [dataState, setDataState] = useState();
  API.imgur()
    .then((results) => {
      console.log("imgur", results);
      // setDataState(results);
      // console.log("dataState", dataState);
    })
    .catch((err) => console.log("error fo sho", err));
  // useEffect(() => {
  //   API.imgur()
  //     .then((results) => {
  //       console.log("imgur", results);
  //       // setDataState(results);
  //       // console.log("dataState", dataState);
  //     })
  //     .catch((err) => console.log("error fo sho", err));
  // }, []);

  return (
    <div>
      <h1>Test Heading</h1>
      <p>Check terminal console logs for "Backend is Connected!!!"</p>
      {dataState ? <p>{dataState.data[0].firstName}</p> : <p>No data</p>}
    </div>
  );
};

export default Imgur;




imgur: function () {
    return axios.get("/test/imgur");
  },

  app.get("/test/imgur", function (req, res) {
    axios
      .get("https://api.imgur.com/3/image/W1DJ2DE", {
        headers: {
          Authorization: `Client-ID 667bcb070bc5aa9`,
        },
      })
      .then((results) => {
        console.log("imgur", results);
        res.json(results.data);
        // setDataState(results);
        // console.log("dataState", dataState);
      })
      .catch((err) => console.log("error fo sho", err));
  });
