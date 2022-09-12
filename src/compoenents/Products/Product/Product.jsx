import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  IconButton,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();
  const title = product.product_title?.substring(0, 12);
  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product?.product_main_image_url}
          title={title}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography
              variant="h5"
              gutterBottom
              className={classes.cardContentTitle}
            >
              {title}...
            </Typography>
            {/* <div > {product.product_title}...</div> */}
            <Typography variant="h5" className={classes.cardContent}>
              {(product.sale_price * 10).toFixed(2)} DH
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
