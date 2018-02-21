import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Icon from "material-ui/Icon";
import { withRouter } from "react-router-dom";

const Home = ({ history }) => {
  const redirectTo = route => {
    history.push(route);
  };

  return (
    <Grid>
      <Row>
        <Col xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="headline" component="h2">
                Vendas
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="primary" onClick={() => redirectTo("/sales/new")}>
                <Icon>add</Icon> Criar Nova
              </Button>
              <Button color="primary" onClick={() => redirectTo("/sales/all")}>
                <Icon>list</Icon> Listar
              </Button>
            </CardActions>
          </Card>
        </Col>
      </Row>
    </Grid>
  );
};

export default withRouter(Home);
