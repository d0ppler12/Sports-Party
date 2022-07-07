import React from "react";

const Score = ({ data, position }) => {
  if (data) {
    return (
      <>
        <h3>
          {data.matches[position].TeamA} vs {data.matches[position].TeamB}
        </h3>
        <p>
          {`${data.matches[position].TeamA}: ${data.matches[position].TeamAScore}`}
        </p>
        <p>
          {`${data.matches[position].TeamB}: ${data.matches[position].TeamBScore}`}
        </p>
        <p>{data.matches[position].Status}</p>
      </>
    );
  } else {
    return <></>;
  }
};

export default Score;
