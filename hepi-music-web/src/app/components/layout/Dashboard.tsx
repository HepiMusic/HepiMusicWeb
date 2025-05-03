import styles from "../../styles/page.module.css"
import { Box, Card, CardContent, Container } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Dashboard({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <Box className={styles.dashboard}>
        <Navbar />
        <Container maxWidth="xl">
          <Card className="hero">
            <CardContent>
              {children}
            </CardContent>
          </Card>
        </Container>
        <Footer />
    </Box>
  );
}
