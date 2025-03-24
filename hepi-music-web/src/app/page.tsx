import Dashboard from "./components/layout/Dashboard";
import styles from "./styles/page.module.css";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
   <Dashboard>
      <Box className={styles.authBox}> 
        <Typography sx={{color:"#fff"}}>Home</Typography>
      </Box>
   </Dashboard>
  );
}
