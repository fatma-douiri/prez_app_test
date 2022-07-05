import React, { useEffect, useState } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

// import './App.css';
import './styles/style.css'
import './styles/reveal/reset.css';
import './styles/reveal/reveal.css';
import './styles/theme/moon.css';
import MyPrez from './Components/MyPrez';
import Dashboard from './Components/Dashboard';
function App() {
  const [data, setData] = useState()

  useEffect(() => {

    if (data != undefined) {
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [data])
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Redirect to="/Dashboard" />} />
        <Route path="/Dashboard" render={() => <Dashboard data={data} setData={setData} />} />
        <Route path="/MyPrez" render={() => <MyPrez />} />



      </Switch>
    </BrowserRouter>
  );
}

export default App;
