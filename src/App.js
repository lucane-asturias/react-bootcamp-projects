import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <PaletteList />} />
        <Route exact path="/palette/:id" render={() => <h1>INDIVIDUAL PALETTE</h1>} />
      </Switch>

      // <div className="">
      //   {/*<Palette {...seedColors[4]} /> */}
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
