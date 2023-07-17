import React from "react";
import "./Section.css";
import thumbnail from "../../Images/image-product-1-thumbnail.jpg";
// import minus from "../../Images/icon-minus.svg";
// import plus from "../../Images/icon-plus.svg";
import first from "../../Images/image-product-1-thumbnail.jpg";
import second from "../../Images/image-product-2-thumbnail.jpg";
import third from "../../Images/image-product-3-thumbnail.jpg";
import fourth from "../../Images/image-product-4-thumbnail.jpg";
// import previous from "../../Images/icon-previous.svg";
// import next from "../../Images/icon-next.svg";
import { useState } from "react";

function Section() {
  let [num, setNum]=useState(0);
  let incNum=()=>{
     if(num<10){
      setNum(Number(num)+1);
     }
  } ;
  let decNum=()=>{
    if(num>0){
      setNum(num-1);
    }
  } 
  let handleChange=(e)=>{
    setNum(e.target.value);
  }
  return (
    <>
      <div className="section">
        <div className="section--thumbnail">
          <img src={thumbnail}  className="thumbnail"></img>
        
          <div className="sub" >
            <img src={first} className="first"></img>
            <img src={second} className="second"></img>
            <img src={third} className="third"></img>
            <img src={fourth} className="fourth"></img>
          </div>
        </div>

        <div className="section--content">
          <h3 className="section-title">SNEAKER COMPANY</h3>

          <h1 className="section-title1">Fall Limited Edition Sneakers</h1>
          <p className="section-para">
            These low-profile sneakers are your perfect companion wear.<br></br>
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="section--price">
            <div className="section--price1">
              <h1 className="current-price">$125.00</h1>
              <h3 className="discount">50%</h3>
            </div>
            <h3 className="before-price">
              <del>$250.00</del>
            </h3>
          </div>
          <div className="section--footer">
            <h1 className="minus" onClick={decNum}>-</h1>
            <input type="text" className="form-control" value={num} onChange={handleChange}/>
            <h1 className="plus" onClick={incNum}>+</h1>
          </div>

          <div className="footer--button">
            <button type="button" className="button" >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
