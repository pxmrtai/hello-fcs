import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Nav,
  Row,
  CardColumns,
  NavItem,
  NavLink,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from "reactstrap";

class MainMenu extends Component {
  render() {
    const Home = () => {
      const Blog1 = () => {
        return <div>this is Blog 1</div>;
      };
      const Blog2 = () => {
        return <div>this is Blog 2</div>;
      };
      const Blog3 = () => {
        return <div>this is Blog 3</div>;
      };
      const Blog4 = () => {
        return <div>this is Blog 4</div>;
      };
      return (
        <Router>
          <Row>
            <Col sm="6">
              <Link to="blog1">
                <Card body>
                  <CardTitle tag="h5">Blog 1</CardTitle>
                  <CardImg
                    width="100%"
                    src="https://picsum.photos/200/300?grayscale"
                    alt="Card image cap"
                  />
                  <CardText>This is Blog 1</CardText>
                  <Button>Check</Button>
                </Card>
              </Link>
            </Col>
            <Col sm="6">
              <Link to="blog2">
                <Card body>
                  <CardTitle tag="h5">This is Blog 2</CardTitle>
                  <CardImg
                    width="100%"
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="Card image cap"
                  />

                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Link>
            </Col>
            <Col sm="6">
              <Link to="blog3">
                <Card body>
                  <CardTitle tag="h5">This is Blog 3</CardTitle>
                  <CardImg
                    width="100%"
                    src="https://picsum.photos/id/23/200/300"
                    alt="Card image cap"
                  />

                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Link>
            </Col>
            <Col sm="6">
              <Link to="blog4">
                <Card body>
                  <CardTitle tag="h5">This is Blog 4</CardTitle>
                  <CardImg
                    width="100%"
                    src="https://picsum.photos/id/235/200/300"
                    alt="Card image cap"
                  />

                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Link>
            </Col>
          </Row>

          <Switch>
            <Route exact path="/blog1">
              <Blog1 />
            </Route>
            <Route exact path="/blog2">
              <Blog2 />
            </Route>
            <Route exact path="/blog3">
              <Blog3 />
            </Route>
            <Route exact path="/blog4">
              <Blog4 />
            </Route>
          </Switch>
        </Router>
      );
    };

    const About = () => {
      return (
        <div>
          <h2>About</h2>
        </div>
      );
    };

    const Dashboard = () => {
      return (
        <div>
          <h2>Dashboard</h2>
        </div>
      );
    };
    return (
      <Router>
        <Nav>
          <NavItem>
            <NavLink>
              <Link to="/">Home</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              {" "}
              <Link to="/about">Blog</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/dashboard">About me</Link>
            </NavLink>
          </NavItem>
        </Nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default MainMenu;
