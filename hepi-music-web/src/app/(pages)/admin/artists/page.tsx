"use client"
import { useEffect, useState } from "react";
import styles from "../../../styles/page.module.css";
import { Box, Button, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Artist } from "@/app/types";
import AdminDashboard from "@/app/components/layout/AdminDashboard";
import CustomSearchField from "@/app/components/common/CustomFields/CustomSearchField";
import Spinner from "@/app/components/common/spinners/loading";
import InfoCard from "@/app/components/common/ui/InfoCard";
import { useRouter } from "next/navigation";


export default function Page() {
  const [allArtists, setAllArtists] = useState<Artist[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchSongs() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://music-backend-production-99a.up.railway.app/api/v1/artists?page=0&size=20"
        );
        const data = await res.json();
        setAllArtists(data?.content || []);
      } catch (error) {
        console.error("Failed to fetch songs:", error);
      } finally {
        setLoading(false);
      }
    }
  
    fetchSongs();
  }, []);

  const router = useRouter();
    const handleBackToArtistsClick = () => {
      router.push("/admin/artists/create");
    };
  

  const filteredArtist = allArtists.filter((artists) =>
    artists.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <AdminDashboard>
      <Box className={styles.home} sx={{padding:"0px"}}>
        {/* Top Section */}
        <Box sx={{display:"flex", flexDirection:"column",gap:"20px"}}>
          <Box className={styles.layer}>
            <Box className={styles.layerTop}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography className={styles.layerTopIntroText}>
                  Artists
                </Typography>
                <Button 
                  className="callToActionButton"
                  onClick={handleBackToArtistsClick}
                >
                 Create Artists
                </Button>
              </Box>
             
              
            </Box>
            <Box className={styles.layerTopSearch}>
              <CustomSearchField
                placeholder="Search a song..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Box>
          </Box>

          {/* Songs box */}
          <Box sx={{ height: "600px", overflowY: "auto", paddingRight: "10px" }}>
            {/* Suggested Singers */}
            <Box className={styles.gridContainer} sx={{ mt: 3 }}>
              { loading && (
                <Spinner />
              )}
              {!loading && filteredArtist.length === 0 ? (
                <Box className={styles.centerYX}>
                  <InfoCard
                    title="No artists found"
                    description="Try searching with a different keyword or check back later."
                  />
                </Box>
              ) : (
                <Grid container spacing={3}>
                  {filteredArtist.map((artist) => (
                    <Grid item xs={6} sm={4} md={2} key={artist.artistId} >
                      <Link href={`/admin/artists/${artist.artistId}`} >
                        <Box className={styles.artistCard}>
                          <Box sx={{ borderRadius: "8px", overflow: "hidden", height: "auto" }}>
                            <Image
                              src={"/images/album.jpeg"}
                              alt={artist.name}
                              width={200}
                              height={210}
                              layout="responsive"
                              objectFit="cover"
                            />
                          </Box>
                          <Typography
                            sx={{ mt: 1, fontWeight: "bold", color: "#fff", textAlign: "center" }}
                          >
                            {artist.name}
                          </Typography>
                        </Box>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              )}

             
            </Box>
          </Box>
        </Box>
      </Box>
    </AdminDashboard>
  );
}
