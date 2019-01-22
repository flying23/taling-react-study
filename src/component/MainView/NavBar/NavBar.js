import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

//상단 메뉴를 가지고 있는 컴포넌트
class Navbar extends Component {
  render() {
    return (
      <div className="NavBar">
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark-trans ">
		  <a className="navbar-brand logo" href="#">DuckTalk</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item active">
		        {/* 
					Link 컴포넌트를 이용해 url을 "/"로 변경하고 홈 화면을 렌더링
		        */}
		        <Link className="nav-link" to="/">Home</Link>
						
		      </li>
					<li className="nav-item active">
		        {/* 
					Link 컴포넌트를 이용해 url을 "/"로 변경하고 홈 화면을 렌더링
		        */}
		        <Link className="nav-link" to="/search">Search</Link>

		        <Link className="nav-link" to="/livetalk">LiveTalk</Link>
		        <Link className="nav-link" to="/pongdang">PongDang</Link>
		        <Link className="nav-link" to="/goodsmall">GoodsMall</Link>

						
		      </li>
		    </ul>
		  </div>
		</nav>
      </div>
    );
  }
}

export default Navbar;
