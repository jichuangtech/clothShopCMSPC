import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, message, DatePicker, Input} from 'antd';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload
                </p>
                <Button type="primary"  onClick={ ()=> {message.info("我被迪纳吉了")}}>我是按钮</Button>
                <DatePicker />
            </div>
        );
    }
}

export default App;
