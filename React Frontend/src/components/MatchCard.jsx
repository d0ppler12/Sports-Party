import React from "react";
import Card from "react-bootstrap/Card";
import CricketMatchdata from "./CricketMatchdata";
import Button from "react-bootstrap/Button";
const MatchCard = ({ data, position }) => {
  if (data.matches[position])
    return (
      <div class="col-sm-6 col-md-3 justify-content-center" id="section-items">
        <Card
          id="match-card"
          className="text-black"
          style={{ height: "250px" }}
        >
          <Card.Body>
            <Card.Text>
              <CricketMatchdata data={data} position={position} />
            </Card.Text>
            <Button variant="secondary" href="../gg.html">
              JOIN ROOM
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  else return <></>;
};

export default MatchCard;
