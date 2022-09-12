import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import { Navigation } from "./Navigation";

export function App () {
  return (
  <>
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' component={<Home/>} />
        <Route path='*' component={<FourOhFour />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}