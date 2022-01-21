import { Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RawJson = () => {
  const loaclState = useLocation().state;
  const navigate = useNavigate();
  const handleOnBackButton = () => {
    navigate("/");
  };

  if (!loaclState) {
    return (
      <>
        <div>No Data Found</div>
        <Button onClick={handleOnBackButton}>Back</Button>
      </>
    );
  }

  return (
    <div>
      <h1>Selected Raw Json</h1>
      <>{loaclState}</>
      <br></br>
      <br></br>
      <Button variant="contained" onClick={handleOnBackButton}>
        Back
      </Button>
    </div>
  );
};

export default RawJson;
