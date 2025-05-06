"use client"
import { useEffect, useState } from "react";
import CustomSearchField from "./components/common/CustomFields/CustomSearchField";
import Dashboard from "./components/layout/Dashboard";
import styles from "./styles/page.module.css";
import { Box, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import MediaPlayer from "./components/common/MediaPlayer/MediaPlayer";
import { Song } from "./types";
import InfoCard from "./components/common/ui/InfoCard";
import Spinner from "./components/common/spinners/loading";

export default function Page() {
  const [allSongs, setAllSongs] = useState<Song[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchSongs() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://music-backend-production-99a.up.railway.app/api/v1/songs?page=0&size=20"
        );
        const data = await res.json();
        setAllSongs(data?.content || []);
      } catch (error) {
        console.error("Failed to fetch songs:", error);
      } finally {
        setLoading(false);
      }
    }
  
    fetchSongs();
  }, []);
  

  const filteredSongs = allSongs.filter((song) =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Dashboard>
      <Box className={styles.home} sx={{padding:"0px"}}>
        {/* Top Section */}
        <Box sx={{display:"flex", flexDirection:"column",gap:"20px"}}>
          <Box className={styles.layer}>
            <Box className={styles.layerTop}>
              <Typography className={styles.layerTopIntroText}>
                What&apos;s your mood!
              </Typography>
              <Typography className={styles.layerTopIntroTextInfo}>
                Our recommendation based on your music taste.
              </Typography>
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
              {!loading && filteredSongs.length === 0 ? (
                <Box className={styles.centerYX}>
                  <InfoCard
                    title="No songs found"
                    description="Try searching with a different keyword or check back later."
                  />
                </Box>
              ) : (
                <Grid container spacing={3}>
                  {filteredSongs.map((song) => (
                    <Grid item xs={6} sm={4} md={2} key={song.songId}>
                      <Link href={`/songs/${song.songId}`}>
                        <Box className={styles.songCard}>
                          <Box sx={{ borderRadius: "8px", overflow: "hidden", height: "auto" }}>
                            <Image
                              src={song.thumbnailPath || "/images/album.jpeg"}
                              alt={song.title}
                              width={200}
                              height={210}
                              layout="responsive"
                              objectFit="cover"
                            />
                          </Box>
                          <Typography
                            sx={{ mt: 1, fontWeight: "bold", color: "#fff", textAlign: "center" }}
                          >
                            {song.title}
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
      {filteredSongs.length > 0 && (
       <MediaPlayer song={filteredSongs[0]} />
      )}
    </Dashboard>
  );
}
