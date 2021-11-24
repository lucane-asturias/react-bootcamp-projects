import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    return (
      <div className="">
        {/*<Palette {...seedColors[4]} /> */}
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
