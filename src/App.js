import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './component/MainView/Header/Header.js';
import RightContents from './component/MainView/RightContents/RightContents.js';
import MainView from './container/MainView.js';

import MyPongdangLive from './component/MainView/RightContents/MyPongdang/Mylivetalk/MyPongdangLive.js';
import Search from "./component/MainView/Header/SearchBar/Search.js";
import LiveTalk from "./component/LiveTalk/LiveTalk.js";


import {Switch, Route } from 'react-router-dom';

const Main =()=>(
    <Switch>
      
      <Route exact path="/" component={MainView}></Route>
      {/*
          "/view/:id"에 url이 이동했을때 ContentView 컴포넌트를 렌더링합니다.
          여기에서 ":id" 이 부분은 url에 변화가 필요할때 사용하는 방식 입니다.
          ":이름"" 이렇게 설정하면 url을 /view/123, /view/555 라고 해도 ContetnView 컴포넌트를 렌더링하게됩니다.
      */}

      <Route path="/search" component={Search}></Route>      
        
      
      <Route path="/livetalk" component={LiveTalk}></Route>
      

    </Switch>

)
class App extends Component {
  render() { 
    return (
      <div className="App">
      
        <Header />
 
        <RightContents />
     
        <MyPongdangLive />
     
        <MainView />

      </div>
    );
  }
}

export default App;