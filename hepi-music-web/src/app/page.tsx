"use client"
import { useState } from "react";
import CustomSearchField from "./components/common/CustomFields/CustomSearchField";
import Dashboard from "./components/layout/Dashboard";
import styles from "./styles/page.module.css";
import { Box, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import MediaPlayer from "./components/common/MediaPlayer/MediaPlayer";

export default function Page() {
  const allSongs = [
    { id: "1", title: "Soothing", avatar: "/images/album.jpeg" },
    { id: "2", title: "Chill Vibes", avatar: "/images/album.jpeg" },
    { id: "3", title: "Upbeat Energy", avatar: "/images/album.jpeg" },
    { id: "4", title: "Relax & Unwind", avatar: "/images/album.jpeg" },
    { id: "5", title: "Focus Mode", avatar: "/images/album.jpeg" },
    { id: "6", title: "Party Night", avatar: "/images/album.jpeg" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter songs based on search input
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
            {/* Songs Grid */}
            <Box className={styles.gridContainer} sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                {filteredSongs.map((song) => (
                  <Grid item xs={6} sm={4} md={2} key={song.id}>
                    <Link key={song.id} href={`/songs/${song.id}`}>
                      <Box className={styles.songCard}>
                        <Box sx={{ borderRadius: "8px", overflow: "hidden", height: "auto" }}>
                          <Image
                            src={song.avatar}
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
              {filteredSongs.length === 0 && (
                <Typography sx={{ color: "white", textAlign: "center", mt: 2 }}>
                  No songs found.
                </Typography>
              )}
            </Box>

            {/* Suggested Singers */}
            <Box className={styles.gridContainer} sx={{ mt: 3 }}>
              <Typography color="white">Suggested Singers</Typography>
              <Grid container spacing={3}>
                {filteredSongs.map((song) => (
                  <Grid item xs={6} sm={4} md={2} key={song.id}>
                    <Link key={song.id} href={`/songs/${song.id}`}>
                      <Box className={styles.songCard}>
                        <Box sx={{ borderRadius: "8px", overflow: "hidden", height: "auto" }}>
                          <Image
                            src={song.avatar}
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
            </Box>
            {/* Suggested Singers */}
            <Box className={styles.gridContainer} sx={{ mt: 3 }}>
              <Typography color="white">Suggested Singers</Typography>
              <Grid container spacing={3}>
                {filteredSongs.map((song) => (
                  <Grid item xs={6} sm={4} md={2} key={song.id}>
                    <Link key={song.id} href={`/songs/${song.id}`}>
                      <Box className={styles.songCard}>
                        <Box sx={{ borderRadius: "8px", overflow: "hidden", height: "auto" }}>
                          <Image
                            src={song.avatar}
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
            </Box>
          </Box>
        </Box>
      </Box>
      <MediaPlayer />
    </Dashboard>
  );
}
