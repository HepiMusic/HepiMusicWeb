"use client";
import { useState, useEffect } from "react";
import { Box, Typography, IconButton, Slider } from "@mui/material";
import Image from "next/image";
import styles from "../../../styles/page.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ReplayIcon from "@mui/icons-material/Replay";

export default function MediaPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration] = useState(240); // Track duration in seconds (4 min)
  const [volume, setVolume] = useState(50); // Volume level (0-100)
  const [isShuffling, setIsShuffling] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev < duration ? prev + 1 : 0));
      }, 1000);
    }
  
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, duration]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Box className={styles.mediaPlayer}>
      <Box className={styles.mediaPlayerBox}>
        {/* Album Cover & Song Info */}
        <Box className={styles.mediaPlayerAlbum}>
          <Image
            src="/images/album.jpeg"
            alt="Soothing song"
            width={60} 
            height={60} 
            objectFit="cover"
          />
          <Box>
            <Typography className={styles.songTitle}>Soothing Song</Typography>
            <Typography className={styles.artistName}>Artist Name</Typography>
          </Box>
          <IconButton>
            <FavoriteBorderIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>

        {/* Playback Controls */}
        <Box className={styles.mediaPlayerControls}>
          <IconButton>
            <SkipPreviousOutlinedIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton onClick={togglePlayPause}>
            {isPlaying ? (
              <PauseOutlinedIcon sx={{ color: "white" }} />
            ) : (
              <PlayArrowOutlinedIcon sx={{ color: "white" }} />
            )}
          </IconButton>
          <IconButton>
            <SkipNextOutlinedIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>

        {/* Media Progress Bar */}
        <Box className={styles.mediaPlayerProgressBar}>
          <Typography variant="caption">{formatTime(progress)}</Typography>
          <Slider
            value={progress}
            min={0}
            max={duration}
            onChange={(_, value) => setProgress(value as number)}
            sx={{
              width: "60%",
              color: "white",
              '& .MuiSlider-thumb': { color: "white" },
              '& .MuiSlider-track': { color: "white" },
              '& .MuiSlider-rail': { color: "#555" },
            }}
          />
          <Typography variant="caption">{formatTime(duration)}</Typography>
        </Box>

        {/* Volume, Shuffle & Repeat Controls */}
        <Box className={styles.mediaPlayerExtras} display="flex" alignItems="center">
          <IconButton>
            {volume === 0 ? (
              <VolumeOffOutlinedIcon sx={{ color: "white" }} />
            ) : (
              <VolumeUpOutlinedIcon sx={{ color: "white" }} />
            )}
          </IconButton>
          <Slider
            value={volume}
            min={0}
            max={100}
            onChange={(_, value) => setVolume(value as number)}
            sx={{
              width: "100px",
              color: "white",
              '& .MuiSlider-thumb': { color: "white" },
              '& .MuiSlider-track': { color: "white" },
              '& .MuiSlider-rail': { color: "#555" },
            }}
          />
          <IconButton onClick={() => setIsShuffling(!isShuffling)}>
            <ShuffleIcon sx={{ color: isShuffling ? "green" : "white" }} />
          </IconButton>
          <IconButton onClick={() => setIsRepeating(!isRepeating)}>
            <ReplayIcon sx={{ color: isRepeating ? "green" : "white" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

// Helper function to format time (mm:ss)
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
};
