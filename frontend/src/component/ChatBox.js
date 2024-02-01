import React from "react";
import { Typography } from "@mui/material";
import "./MyComponent.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
export default function ChatBox() {
  return (
    <div>
      <Typography
        sx={{
          fontFamily: '"Kanit", sans-serif',
          fontWeight: "600",
          fontStyle: "normal",
          textAlign: "left",
          marginTop: "10px",
        }}
      >
        Chat Box
      </Typography>
      <hr style={{ border: "1px solid grey", marginTop: "35px" }} />

      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "585px",
          height:'80px',
          position: "relative",
          top: "510px",
          bottom: "10",
          left: "0",
          borderRadius:'4',
        }}
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <KeyboardVoiceOutlinedIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder=" Ask Me Anything...."
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SendOutlinedIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
    </div>
  );
}
