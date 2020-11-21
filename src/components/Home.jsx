import { Container, Grid, Typography } from "@material-ui/core";
import React, { lazy, Suspense, useContext } from "react";
import { DataContext } from "../Context/DataContext";
// import CustomCard from "./CustomCard";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";

const CustomCard = lazy(() => import("./CustomCard"));

const Home = () => {
  const [state] = useContext(DataContext);

  return (
    <>
      <Container maxWidth="lg" className="homeContainer">
        <div style={{ margin: "3rem 0rem" }}>
          <SearchBar />
        </div>
        <Typography variant="h5" className="heading">
          Cocktails
        </Typography>

        <Suspense fallback={<Spinner />}>
          <Grid container spacing={2}>
            {state.alldata ? (
              state.alldata.map(
                ({
                  idDrink,
                  strDrink,
                  strGlass,
                  strAlcoholic,
                  strDrinkThumb,
                }) => (
                  <CustomCard
                    key={idDrink}
                    title={strDrink}
                    sub__title={strGlass}
                    type={strAlcoholic}
                    img={strDrinkThumb}
                    id={idDrink}
                  />
                )
              )
            ) : (
              <h1>No data to show</h1>
            )}
            {state.error && (
              <h1
                style={{
                  marginTop: "2rem",
                  textAlign: "center",
                  fontWeight: "700",
                }}>
                {state.error}......
              </h1>
            )}

            {state.loading && <Spinner />}
          </Grid>
        </Suspense>
      </Container>
    </>
  );
};

export default Home;
