import { Container, Grid, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import { ADDSINGLEDATA } from "../reducers/DataReducer";
import CustomButton from "./CustomButton";

const SpecificComponentInfo = () => {
  const { id } = useParams();
  const [state, dispatch] = useContext(DataContext);

  const { specificdata } = state;

  useEffect(() => {
    dispatch({ type: ADDSINGLEDATA, payload: id });
    console.log("specific data", state.specificdata);
  }, []);

  return (
    <div className="SpecificComponentInfo">
      <Container maxWidth="lg">
        <div style={{ marginTop: "2rem" }}>
          <CustomButton btn__path="/" btn__content="BACK TO HOME" />
        </div>
        <Grid container alignContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img
              src={specificdata[0] && specificdata[0].strDrinkThumb}
              className="single__img"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography variant="h6">
              <span className="content__title">name</span>
              {specificdata[0] && specificdata[0].strDrink}
            </Typography>
            <Typography variant="h6">
              <span className="content__title">category</span>
              {specificdata[0] && specificdata[0].strCategory}
            </Typography>
            <Typography variant="h6">
              <span className="content__title">info</span>
              {specificdata[0] && specificdata[0].strAlcoholic}
            </Typography>
            <Typography variant="h6">
              <span className="content__title">Glass</span>
              {specificdata[0] && specificdata[0].strGlass}
            </Typography>
            <Typography variant="h6">
              <span className="content__title">Instructions</span>:
              {specificdata[0] && specificdata[0].strInstructions}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SpecificComponentInfo;
