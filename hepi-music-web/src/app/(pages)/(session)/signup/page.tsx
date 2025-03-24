import Dashboard from "@/app/components/layout/Dashboard";
import styles from "../../../styles/page.module.css";
import { Box } from "@mui/material";
import SignupForm from "@/app/components/common/forms/Signup";

export default function page() {
  return (
   <Dashboard>
        <Box className={styles.authBox}>
            <SignupForm />
        </Box>
   </Dashboard>
  );
}
