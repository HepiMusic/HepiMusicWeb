import styles from "../../styles/page.module.css";
import { Box, Card, CardContent, Container } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function AdminDashboard({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box className={styles.dashboard}>
      <Navbar />
      <Container maxWidth="xl">
        <Box sx={{ px: 3 }}>
          <Card className="hero">
            <CardContent>
              <Box sx={{ display: "flex", gap: 2 , border:"", width:"100%"}}>
                {/* Sidebar */}
                <Box
                  sx={{
                    width: 270,
                    bgcolor: "transparent",
                    color: "white",
                    borderRadius: 2,
                    minHeight: "100%",
                  }}
                >
                  <Sidebar />
                </Box>

                {/* Main content area */}
                <Box sx={{ flexGrow: 1 }} className="adminColumn">
                  {children}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
     
      <Footer />
    </Box>
  );
}
