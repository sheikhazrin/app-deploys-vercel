import React from "react";
import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  BrowserRouter as router,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <router>
      <main></main>
    </router>
  );
}

export default App;
