import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { NavigationProps } from "./Navigation.props";

const Navigation: React.FC<NavigationProps> = () => {
  // Logic goes here

  return (
    <>
      <Typography>This is the Navigation page</Typography>
      <Link to="home">
        <Button variant="contained">Go To Homepage</Button>
      </Link>
      <Link to="auth">
        <Button variant="contained">Go To Authorization page</Button>
      </Link>
    </>
  );
};

export { Navigation };
