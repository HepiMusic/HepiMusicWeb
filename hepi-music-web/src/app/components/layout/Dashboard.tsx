import styles from "../../styles/page.module.css"
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Dashboard({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <Box className={styles.dashboard}>
        <Navbar />
            {children}
        <Footer />
    </Box>
  );
}
