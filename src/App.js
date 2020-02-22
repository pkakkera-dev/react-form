import React from "react";
import "./css/style.scss";
import Login from "./components/Login";

function App(props) {
  return (
    <div className="App">
      <div className="header">
        <span>
          <span>
            <strong> ACCOUNT LOGIN </strong>{" "}
          </span>
          {/* <button
            onClick={() => {
              props.loggedIn = false;
            }}
          >
            {" "}
            Logout
          </button> */}
        </span>
      </div>

      <span className="logout-btn"></span>

      <Login loggedIn={props.loggedIn} />
    </div>
  );
}

export default App;
