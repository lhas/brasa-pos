import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import logoJpg from "../assets/logo.jpg";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Icon from "material-ui/Icon";

const Home = () => (
  <Grid>
    <Row center="xs">
      <Col xs={12}>
        <img
          src={logoJpg}
          style={{ width: "128px ", marginTop: "2em", marginBottom: "2em" }}
        />
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={3}>
        <Card>
          <CardContent>
            <Typography variant="headline" component="h2">
              Vendas
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="primary">
              <Icon>add</Icon> Criar Nova
            </Button>
            <Button color="primary">
              <Icon>list</Icon> Listar
            </Button>
          </CardActions>
        </Card>
      </Col>
    </Row>
  </Grid>
);

export default Home;
