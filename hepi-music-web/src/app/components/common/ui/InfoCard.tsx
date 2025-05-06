"use client";
import { Box,  CircularProgress, Typography } from "@mui/material";
import styles from "../../../styles/page.module.css";
import SubmitButton from "../CustomButtons/SubmitButton";

interface InfoCardProps {
  title?: string;
  description?: string;
  button?: string;
  onButtonClick?: () => void;
  loading?: boolean;
}

export default function InfoCard({
  title,
  description,
  button,
  onButtonClick,
  loading = false,
}: InfoCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 2,
        border:"1px solid #2E2E2E",
        borderRadius: "12px",
        width: "100%",
        height: "auto"
      }}
    >
      {loading ? (
        <CircularProgress className="spinner" />
      ) : (
        <>
          {title && (
           <Typography className={styles.layerTopIntroText}>
              {title}
            </Typography>
          )}
          {description && (
            <Typography className={styles.layerTopIntroText}>
              {description}
            </Typography>
          )}
          {button && (
            
           <SubmitButton label= {button} onClick={onButtonClick} />
            
          )}
        </>
      )}
    </Box>
  );
}
