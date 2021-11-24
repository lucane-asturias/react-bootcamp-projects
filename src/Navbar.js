import React, { Component } from "react";
import Slider from "rc-slider";
// import "rc-slider/assets/index.css"; not using anymore bc rc-slider now use props to style the slider. 
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const {level, changeLevel} = this.props;
    return (
      <header className="Navbar">
      	<div className="Logo">
          <a href="#">reactcolorpicker</a>
      	</div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
           <Slider
              defaultValue={level} 
              min={100} 
              max={900} 
              step={100}
              onAfterChange={changeLevel}  
              trackStyle={{ backgroundColor: 'transparent' }} 
              handleStyle={{
                borderColor: 'green',
                height: 13,
                width: 13,
                marginLeft: -7,
                marginTop: -3,
                backgroundColor: 'green',
                boxShadow: 'none',
              }} 
              railStyle={{height: 8}}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
