import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Page from "./Page";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

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
        //extract location from route props (each route has a key)
        render={({ location }) => (
          <TransitionGroup>
           <CSSTransition key={location.key} classNames="page" timeout={500}>
            <Switch location={location}>
              <Route 
                  exact 
                  path="/palette/new"
                  render={routeProps => (
                    <Page>
                      <NewPaletteForm 
                        savePalette={this.savePalette} 
                        palettes={this.state.palettes}
                        {...routeProps} 
                      />
                    </Page>
                  )}
                />
              <Route 
                exact 
                path="/palette/:paletteId/:colorId"
                render={routeProps => (
                  <Page>
                    <SingleColorPalette
                      colorId={routeProps.match.params.colorId}
                      palette={generatePalette(
                        this.findPalette(routeProps.match.params.paletteId)
                      )}
                    />
                  </Page>
                )}
              />
              <Route 
                exact 
                path="/" 
                render={(routeProps) => (
                  <Page> 
                    <PaletteList 
                      palettes={this.state.palettes}
                      deletePalette={this.deletePalette} 
                      {...routeProps} 
                    />
                  </Page>
                )} 
              />
              <Route 
                exact 
                path="/palette/:id" 
                //take id from url, findPalette in seedColors using that id, then generatePalette
                render={routeProps => (
                  <Page>
                    <Palette
                      palette={generatePalette(
                        this.findPalette(routeProps.match.params.id)
                      )}
                    />
                  </Page>
                )}
              />
              <Route
                //route acting as an else; no path matching unless the established ones
                render={(routeProps) => (
                  <Page> 
                    <PaletteList 
                      palettes={this.state.palettes}
                      deletePalette={this.deletePalette} 
                      {...routeProps} 
                    />
                  </Page>
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
