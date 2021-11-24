import React, { Component } from "react";
import ColorBox from './ColorBox';
import "./Palette.css";
import Slider from "rc-slider";
// import "rc-slider/assets/index.css"; not using anymore bc rc-slider now use props to style the slider. 


class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({ level })
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
  	const colorBoxes = colors[level].map(color => ( //n entendi como acessa cores em 100/200 etc
  		<ColorBox background={color.hex} name={color.name} />
  	))
    return (
      <div className="Palette">
        <div className="slider">
           <Slider
              defaultValue={level} 
              min={100} 
              max={900} 
              step={100}
              onAfterChange={this.changeLevel}  
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
        {/*Navbar goes here */}
  	  	<div className="Palette-colors">{colorBoxes}</div>
        {/* footer eventually  */}
	  </div>
    );
  }
}

export default Palette;
