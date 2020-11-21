import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const CustomButton = ({ btn__content, btn__path }) => {
  const history = useHistory();

  const handleBtn = () => history.push(btn__path);

  return (
    <Button
      onClick={handleBtn}
      variant="contained"
      color="primary"
      className="custom__btn">
      {btn__content}
    </Button>
  );
};

export default CustomButton;
