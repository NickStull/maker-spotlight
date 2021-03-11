import React, { useEffect, useState } from "react";
import API from "../../utils/API";

const Imgur = () => {
  const [dataState, setDataState] = useState();

  useEffect(() => {
    API.imgur()
      .then((results) => {
        console.log("imgur", results);
        setDataState(results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Test Heading</h1>
      <p>Check terminal console logs for "Backend is Connected!!!"</p>
      {dataState ? <p>{dataState.data[0].firstName}</p> : <p>No data</p>}
    </div>
  );
};

export default Imgur;
