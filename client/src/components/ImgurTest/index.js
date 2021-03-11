import React, { useEffect, useState } from "react";
import API from "../../utils/API";

const Imgur = () => {
  const [dataState, setDataState] = useState();
  // API.imgur()
  //   .then((results) => {
  //     console.log("imgur", results);
  //     // setDataState(results);
  //     // console.log("dataState", dataState);
  //   })
  //   .catch((err) => console.log("error fo sho", err));
  useEffect(() => {
    API.imgur()
      .then((results) => {
        console.log("imgur front end", results);
        setDataState(results.data);
      })
      .catch((err) => console.log("error fo sho", err));
  }, []);
  // {dataState.data.data.link}
  return (
    <div>
      <img src={dataState} alt="photo" />
    </div>
  );
};

export default Imgur;
