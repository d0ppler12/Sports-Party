import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import MatchCard from "./MatchCard";
const Cricket = () => {
  const [dataisThere, SetdataisThere] = useState(null);
  const getdetails = async () => {
    const x = await fetch("https://cricket-api-sportsparty.herokuapp.com/");
    const data = await x.json();
    SetdataisThere(data);
  };
  getdetails();
  return (
    <>
      <Row>
        <div className="parallax-cricket">
          <h1 id="section-heading-main">CRICKET</h1>
        </div>
      </Row>
      <br />
      <Row>
        <h4 id="section-heading">Live Matches:</h4>
        <hr className="heading-hr" />
      </Row>
      <Row className="pt-3 justify-content-center">
        <div className="col-11">
          <Row className="gy-4">
            {dataisThere ? <MatchCard data={dataisThere} position={0} /> : ""}
            {dataisThere ? <MatchCard data={dataisThere} position={1} /> : ""}
            {dataisThere ? <MatchCard data={dataisThere} position={2} /> : ""}
            {dataisThere ? <MatchCard data={dataisThere} position={3} /> : ""}
            {dataisThere ? <MatchCard data={dataisThere} position={4} /> : ""}
            {dataisThere ? <MatchCard data={dataisThere} position={5} /> : ""}
            {dataisThere ? <MatchCard data={dataisThere} position={6} /> : ""}
            {dataisThere ? <MatchCard data={dataisThere} position={7} /> : ""}
          </Row>
        </div>
      </Row>
    </>
  );
};

export default Cricket;
