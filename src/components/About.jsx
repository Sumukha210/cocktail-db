import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";

const About = () => {
  return (
    <>
      <Container maxWidth="md">
        <Grid>
          <Typography variant="h3" style={{ margin: "2rem 0" }}>
            About Us
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            repudiandae architecto qui adipisci in officiis, aperiam sequi atque
            perferendis eos, autem maiores nisi saepe quisquam hic odio
            consectetur nobis veritatis quasi explicabo obcaecati doloremque?
            Placeat ratione hic aspernatur error blanditiis?
          </Typography>
        </Grid>
      </Container>
    </>
  );
};

export default About;
