import Dashboard from "@/app/components/layout/Dashboard";
import styles from "../../../styles/page.module.css";
import { Box, Typography } from "@mui/material";
import LoginForm from "@/app/components/common/forms/Login";

export default function page() {
  return (
   <Dashboard>
        <Box className={styles.authBox}>
            <LoginForm />
        </Box>
   </Dashboard>
  );
}
