import React from "react";
import {
  Card,
  Grid,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import CustomButton from "./CustomButton";

const CustomCard = ({ img, title, sub__title, type, id }) => {
  return (
    <>
      <Grid item xs={12} sm={4} md={4} lg={3} xl={3}>
        <Card className="custom__card">
          <CardMedia image={img} style={{ height: 0, paddingTop: "56.25%" }} />
          <CardContent>
            <Typography variant="h5">
              {title.length > 10
                ? title.replace(title.slice(10), "...")
                : title}
            </Typography>
            <Typography variant="body1">{sub__title}</Typography>
            <Typography variant="caption">{type}</Typography>
          </CardContent>
          <CardContent>
            <CustomButton btn__content="Details" btn__path={`/about/${id}`} />
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default CustomCard;
