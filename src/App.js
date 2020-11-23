import React from "react";
import { useEffect, useState } from "react";
import { Router } from "react-router-dom";

import history from "./services/History";
import Routes from "./routes";

import { useAuth0 } from "@auth0/auth0-react";

import Loading from "./components/Loading";


// import "./App.css";
// import GlobalStyles from "./styles/";

function App() {
  const [setDate] = useState(null);
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <Router history={history}>
      <Routes />
      {/* <GlobalStyles /> */}
      {/* <main></main> */}
    </Router>
  );
}

export default App;
