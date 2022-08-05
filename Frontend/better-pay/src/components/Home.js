import React from 'react'
import Header from './Header'
import Footer from './Footer'
import React from "react";
import Header from "./Header";
import HomeTopHalf from "./HomeTopHalf";
import HomeMiddleHalfTop from "./HomeMiddleHalfTop";
import HomeMiddleHalfBottom from "./HomeMiddleHalfBottom";
const Home = () => {
  return (
    <div>
      <Header></Header>
      Home Page 
      <br></br>
      <HomeTopHalf></HomeTopHalf>
      <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
      <HomeMiddleHalfTop></HomeMiddleHalfTop>
      <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
      <HomeMiddleHalfBottom></HomeMiddleHalfBottom>
      <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
