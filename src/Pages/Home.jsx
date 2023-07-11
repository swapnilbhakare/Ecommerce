import { Fragment } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { BsPlayCircle } from "react-icons/bs";
import stylesheet from "./Home.module.css";
const tourData = [
  {
    id: 1,
    date: "JUL 16",
    location: "DETROIT, MI",
    title: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: 2,
    date: "JUL 19",
    location: "TORONTO, ON    ",
    title: "BUDWEISER STAGE",
  },
  {
    id: 3,
    date: "JUL 22",
    location: "BRISTOW, VA",
    title: "JIGGY LUBE LIVE",
  },
  {
    id: 4,
    date: "JUL 29",
    location: "PHOENIX, AZ",
    title: "AK-CHIN PAVILION",
  },
  {
    id: 5,
    date: "Aug 2",
    location: "LAS VEGAS, NV",
    title: "T-MOBILE ARENA",
  },
];
const tours = tourData.map((tour) => {
  return (
    <ListGroupItem style={{ border: "none" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "start",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100px" }}>{tour.date}</div>
        <div style={{ width: "200px" }}>{tour.location}</div>
        <div style={{ width: "400px" }}>{tour.title}</div>
        <Button
          className={stylesheet["list-group-btn"]}
          style={{
            marginLeft: "50px",
            color: "white",
          }}
        >
          BUY TICKETS
        </Button>
      </div>
      <hr />
    </ListGroupItem>
  );
});
const Home = (props) => {
  return (
    <>
      <div className={stylesheet["home-container"]}>
        The Generics
        <br />
        <BsPlayCircle />
      </div>
      <Container className={stylesheet["list-group"]}>
        <h2 style={{ textAlign: "center" }}>Tours</h2>
        <ListGroup
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          {tours}
        </ListGroup>
      </Container>
    </>
  );
};
export default Home;
