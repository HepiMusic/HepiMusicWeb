import { Button } from "@mui/material";
import styles from "../../../styles/page.module.css";

interface CustomButtonProps {
  label?: string;
}

export default function SubmitButton({ label}: CustomButtonProps) {
  return (
    <Button className={styles.customButton}>
        {label}
    </Button>
  );
}
