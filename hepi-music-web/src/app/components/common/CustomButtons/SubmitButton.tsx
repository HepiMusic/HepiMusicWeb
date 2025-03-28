import { Button, Typography } from "@mui/material";
import styles from "../../../styles/page.module.css";

interface CustomButtonProps {
  label?: string;
}

export default function SubmitButton({ label}: CustomButtonProps) {
  return (
    <Button className={styles.customButton}>
        <Typography className={`${styles.buttonFont} ${styles.buttonDark}`}>
          {label}
        </Typography>
    </Button>
  );
}
