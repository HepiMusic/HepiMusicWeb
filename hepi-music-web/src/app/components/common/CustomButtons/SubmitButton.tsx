import { Button, Typography } from "@mui/material";
import styles from "../../../styles/page.module.css";

interface CustomButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean; 

}

export default function SubmitButton({ label, onClick }: CustomButtonProps) {
  return (
    <Button onClick={onClick} className={styles.customButton}>
      <Typography className={`${styles.buttonFont} ${styles.buttonDark}`}>
        {label}
      </Typography>
    </Button>
  );
}
