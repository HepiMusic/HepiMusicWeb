import styles from "../../../styles/page.module.css";
import { Box, TextField, Typography } from "@mui/material";

interface CustomFieldProps {
  label?: string;
  type: string;
  placeholder?: string;
}

export default function CustomField({ label, type,placeholder}: CustomFieldProps) {
  return (
    <Box className={styles.customFieldBox}>
      <Typography>{label}</Typography>
      <TextField
        placeholder={placeholder}
        type={type}
        className={styles.customTextField}
      />
    </Box>
  );
}
