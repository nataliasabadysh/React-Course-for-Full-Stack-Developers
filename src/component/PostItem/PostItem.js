import Paper from "@mui/material/Paper";

export const PostItem = ({ name }) => (
  <Paper style={{ textTransform: "capitalize", padding: 10 }}>{name}</Paper>
);
