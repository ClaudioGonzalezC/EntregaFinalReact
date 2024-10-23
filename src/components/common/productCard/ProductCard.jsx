import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import "./productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ title, divisa, price, imageUrl, description, date, id }) => {
  return (
    <Card sx={{ width: 440, height: 450, borderRadius: 0, boxShadow: "none" }}
    >
      <CardMedia sx={{ height: 280,borderRadius:"18px" }} image={imageUrl} title="Locacion" />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
              {title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ flex: 1, display:"grid", alignContent:"end"  }}>
            <Typography variant="h5" sx={{ color: "text.secondary" }}>
              {description}
            </Typography>
            <Typography variant="h5" sx={{ color: "text.secondary" }}>
              {date}
            </Typography>
          </Box>
          <Box sx={{ flex: 0.5, textAlign: "right", display:"grid", alignContent:"end" }}>
            <Typography variant="h5" sx={{ color: "text.secondary" }}>
              {divisa}
            </Typography>
            <Typography variant="h3" sx={{ color: "text.secondary" }}>
              {price}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Link to={`/productDetail/${id}`}>
          <Button variant="contained" size="large">
            Elegir
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;