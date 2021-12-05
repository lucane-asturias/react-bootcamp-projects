import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedColors }
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    })
  }
  deletePalette(id) {
    //filter all the palettes that don't match ID
    this.setState( st => ({ palettes: st.palettes.filter(palette => palette.id !== id)}),
      this.syncLocalStorage //update local storage with a new version of palettes
    );
  }
  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }
  syncLocalStorage() {
    //save palettes to local storage
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    )
  }
  render() {
    return (
      <Route 
        //extract location from route props (which route has a key)
        render={({ location }) => (
          <TransitionGroup>
           <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
              <Route 
                  exact 
                  path="/palette/new"
                  render={routeProps => (
                    <div className="page">
                      <NewPaletteForm 
                        savePalette={this.savePalette} 
                        palettes={this.state.palettes}
                        {...routeProps} 
                      />
                    </div>
                  )}
                />
              <Route 
                exact 
                path="/palette/:paletteId/:colorId"
                render={routeProps => (
                  <div className="page">
                    <SingleColorPalette
                      colorId={routeProps.match.params.colorId}
                      palette={generatePalette(
                        this.findPalette(routeProps.match.params.paletteId)
                      )}
                    />
                  </div>
                )}
              />
              <Route 
                exact 
                path="/" 
                render={(routeProps) => (
                  <div className="page"> 
                    <PaletteList 
                      palettes={this.state.palettes}
                      deletePalette={this.deletePalette} 
                      {...routeProps} 
                    />
                  </div>
                )} 
              />
              <Route 
                exact 
                path="/palette/:id" 
                //take id from url, findPalette in seedColors using that id, then generatePalette
                render={routeProps => (
                  <Palette
                    palette={generatePalette(
                      this.findPalette(routeProps.match.params.id)
                    )}
                  />
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>

        )}
      />
    );
  }
}

      // <div className="">
      //   {/*<Palette {...seedColors[4]} /> */}
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>

export default App;
