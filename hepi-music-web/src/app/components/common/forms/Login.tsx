import Image from "next/image";
import styles from "../../../styles/page.module.css";
import {Box, Card, CardContent } from "@mui/material";
import CustomField from "../CustomFields/CustomField";
import SubmitButton from "../CustomButtons/SubmitButton";

export default function LoginForm() {
  return (
   <Card className={styles.authCard}>
      <CardContent className={styles.authCardContent}>
          <Box className={styles.authCardTopImage}>
            <Image src="/images/hepi_logo.jpg" height={100} width={100} alt="hepi logo"/>
          </Box>
          <Box className={styles.authCardInputBox}>
            <CustomField label="Email" placeholder="johndoe@gmail.com" type="email" />
            <CustomField label="Password" type="password" />
            <SubmitButton label="Login" />
          </Box>
      </CardContent>
   </Card>
  );
}
