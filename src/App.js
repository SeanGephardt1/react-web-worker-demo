import React, { Component } from "react";
import Home from "./home.js";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component 
{
    render()
    {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <div className="App-title">React WebWorker Demo</div>
                </header>
                <section className="App-intro">
                    <Home />
                </section>
            </div>
        );
    }
};