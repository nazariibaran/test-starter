import { Button, Typography } from "@mui/material";
import { fetchUsers } from "@api";

import { HomeProps } from "./Home.props";

const Home: React.FC<HomeProps> = () => {
  const getUsers = async () => {
    const users = await fetchUsers();

    console.log(users);
  };

  return (
    <>
      <Typography>This is the home page</Typography>
      <Button onClick={getUsers}>Send request</Button>
    </>
  );
};

export { Home };
