import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import logoJpg from "./assets/logo.jpg";
import AppRouter from "./routes";
import "./stylesheet.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Grid>
          <Row center="xs">
            <Col xs={12}>
              <img
                src={logoJpg}
                style={{
                  width: "128px ",
                  marginTop: "2em",
                  marginBottom: "2em"
                }}
              />
            </Col>
          </Row>
        </Grid>
        <AppRouter />
      </div>
    );
  }
}

export default App;
