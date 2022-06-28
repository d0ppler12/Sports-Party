import React, { useState, useEffect } from "react";
import CricketMatchdata from "./CricketMatchdata";

const GetMatchDetails = ({ position }) => {
  return (
    <>
      {dataisThere ? (
        <CricketMatchdata data={dataisThere} position={position} />
      ) : (
        ""
      )}
    </>
  );
};

export default GetMatchDetails;
