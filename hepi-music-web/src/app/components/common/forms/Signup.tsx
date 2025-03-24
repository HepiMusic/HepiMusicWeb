import Image from "next/image";
import styles from "../../../styles/page.module.css";
import {Box, Card, CardContent } from "@mui/material";
import CustomField from "../CustomFields/CustomField";
import SubmitButton from "../CustomButtons/SubmitButton";

export default function SignupForm() {
  return (
   <Card className={styles.authCard}>
      <CardContent className={styles.authCardContent}>
          <Box className={styles.authCardTopImage}>
            <Image src="/images/hepi_logo.jpg" height={100} width={100} alt="hepi logo"/>
          </Box>
          <Box className={styles.authCardInputBox}>
            <CustomField label="Username" placeholder="johndoe" type="text" />
            <CustomField label="Email" placeholder="johndoe@gmail.com" type="email" />
            <CustomField label="Phone Number" placeholder="Phone(+2547xx xxx xxx)" type="text" />
            <CustomField label="Password" type="password" />
            <CustomField label="Conform Password" type="password" />
            <SubmitButton label="Register" />
          </Box>
      </CardContent>
   </Card>
  );
}
