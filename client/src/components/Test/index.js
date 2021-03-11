import React, { useEffect, useState } from "react";
import API from "../../utils/API"

const Test = () => {
  const [dataState, setDataState] = useState();

  useEffect(() => {
    API.getUsers()
      .then(
        results => {
          console.log(results);
          setDataState(results);
        }
      )
      .catch(err => console.log(err));
  }, []);

  const styles = {
    heading: {
      backgroundColor: 'red'
    }
  }

  return (
    <div>
      <h1 style={styles.heading}>Test Heading</h1>
      <p>Check terminal console logs for "Backend is Connected!!!"</p>
      {dataState
        ?
          <p>{dataState.data[0].firstName}</p>
        :
          <p>No data</p>
      }
    </div>
  )
}

export default Test;