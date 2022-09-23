import React from "react";
import { Article, CTA, Navbar, Feature, Brand } from "./components";
import { Footer, Header, Possiblity, Blog, WhatGPT3, Features } from "./container";
import './index.css'
import './App.css'
const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possiblity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
