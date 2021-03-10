import React, { useEffect } from "react";
import API from "../../utils/API"

const Test = () => {

    useEffect( () => {
        API.getUsers()
            .then(
                results => {
                    console.log(results);
                }
            )
            .catch( err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Test Heading</h1>
            <p>Check terminal console logs for "Backend is Connected!!!"</p>
        </div>
    )
}

export default Test;