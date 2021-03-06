import React from "react";
import Card from "react-bootstrap/Card";
import CricketMatchdata from "./CricketMatchdata";
import Button from "react-bootstrap/Button";
const MatchCard = ({ data, position }) => {
  if (data.matches[position]) {
    let url = new URL("http://localhost:3000/");
    url.searchParams.set(
      "id",
      `${data.matches[position].TeamA} vs ${data.matches[position].TeamB}`
    );
    url.searchParams.set("pos", `${position}`);
    return (
      <div
        className="col-sm-6 col-md-3 justify-content-center"
        id="section-items"
      >
        <Card
          id="match-card"
          className="text-black"
          style={{ height: "250px" }}
        >
          <Card.Body>
            <Card.Text>
              <CricketMatchdata data={data} position={position} />
            </Card.Text>
            <Button variant="secondary" href={url}>
              JOIN ROOM
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  } else return <></>;
};

export default MatchCard;
