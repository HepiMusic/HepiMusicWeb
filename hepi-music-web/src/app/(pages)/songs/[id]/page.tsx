"use client";
import { useState } from "react";
import Dashboard from "@/app/components/layout/Dashboard";
import styles from "../../../styles/page.module.css";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import MediaPlayer from "@/app/components/common/MediaPlayer/MediaPlayer";
import Link from "next/link";
import Image from "next/image";
import CustomSearchField from "@/app/components/common/CustomFields/CustomSearchField";
import MusicListItem from "@/app/components/pages/songs/MusicListItem";

const allSongs = [
  { id: "1", title: "Soothing", artist: "Artist One", avatar: "/images/album.jpeg" },
  { id: "2", title: "Chill Vibes", artist: "Artist Two", avatar: "/images/album.jpeg" },
  { id: "3", title: "Upbeat Energy", artist: "Artist Three", avatar: "/images/album.jpeg" },
  { id: "4", title: "Relax & Unwind", artist: "Artist Four", avatar: "/images/album.jpeg" },
  { id: "5", title: "Focus Mode", artist: "Artist Five", avatar: "/images/album.jpeg" },
  { id: "6", title: "Party Night", artist: "Artist Six", avatar: "/images/album.jpeg" },
];



export default function Page() {
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePlayPause = (songId:string) => {
    setCurrentSongId((prevSongId) => (prevSongId === songId ? null : songId));
  };

  const filteredSongs = allSongs.filter((song) =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentSong = allSongs.find((s) => s.id === currentSongId);

  return (
    <Dashboard>
      <Box className={styles.home} sx={{padding:"0px"}}>
        <Grid container spacing={2}>
          {/* Left Section */}
          <Grid item xs={12} md={8}>
            <Card className={styles.songCardLeft}>
              <CardContent className={styles.songCardContent}>
                <Box className={styles.songCardContentHero}>
                  <Typography className={styles.songIntro}>
                    Listening to{" "}
                    <Typography component="span" className={styles.songTitle}>
                      {currentSong ? currentSong.title : "Smooth Song"}
                    </Typography>
                  </Typography>
                </Box>
                <Box className={styles.songCardContentHero}>
                  <Link href={`/artists/${currentSong?.artist || "default"}`} passHref>
                    <Typography className={styles.songIntro}>
                      {currentSong ? currentSong.artist : "Artist Name"}
                    </Typography>
                  </Link>
                </Box>
              </CardContent>
            </Card>

            {/* Search & Suggested Songs */}
            <Box className={styles.gridContainer} sx={{ mt: 3 }}>
              <Box  sx={{ mt: 3 , mb:3}}>
                <Typography color="white" sx={{ mt: 3 , mb:3}}>Suggested Songs</Typography>
                <Box className={styles.layerTopSearch}>
                  <CustomSearchField
                    placeholder="Search a song..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
              </Box>
              </Box>
              <Grid container spacing={3} sx={{ height: "600px", overflowY: "auto", paddingRight: "10px" }}>
                {filteredSongs.length > 0 ? (
                  filteredSongs.map((song) => (
                    <Grid item xs={6} sm={4} md={3} key={song.id}>
                      <Link href={`/songs/${song.id}`} passHref>
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
                          <Typography sx={{ mt: 1, fontWeight: "bold", color: "#fff", textAlign: "center" }}>
                            {song.title}
                          </Typography>
                        </Box>
                      </Link>
                    </Grid>
                  ))
                ) : (
                  <Typography sx={{ color: "white", textAlign: "center", mt: 2 }}>No songs found.</Typography>
                )}
              </Grid>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={4}>
            <Card className={styles.songCardRight}>
              <CardContent className={styles.songCardContentRight}>
                <Box className={styles.songMusicCard}>
                  <Typography className={styles.songMusicBoxTitle}>Music List</Typography>
                  <Link href="/" passHref>
                    <Typography className={styles.songMusicSeeMore}>See All</Typography>
                  </Link>
                </Box>
                <Box className={styles.musicListCard}>
                  {filteredSongs.map((song) => (
                    <MusicListItem
                      key={song.id}
                      id={song.id}
                      song={song}
                      isPlaying={currentSongId === song.id}
                      onPlay={handlePlayPause}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Media Player */}
        <MediaPlayer />
      </Box>
    </Dashboard>
  );
}
