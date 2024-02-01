import React from "react";
import "./MyComponent.css";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import logo from "../logo.png"

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        width: "30%",
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function Navbar() {
  return (
    <div>
      <Box>
        <Typography variant="h4" sx={{ fontFamily: '"Kanit", sans-serif',textAlign: "left",fontWeight:"600",fontStyle: 'normal',color: "#fff", marginBottom: "10px" }}>
          <img className="photo" src={logo}  alt="Logo" />
           MEd-U
        </Typography>
        <hr style={{border:'1px solid grey' }} />
        <Item
          className="hover-item"
          sx={{
            marginTop: "20px",
            marginLeft: "0px",
            width: "100%",
            height: "60px",
            fontSize: "1.0rem",
            justifyContent: "flex-start",
            padding: "10px",
            display: "flex",
          }}
        >
          <AutoFixHighOutlinedIcon sx={{ marginRight: "10px" }} />
          Ai Assistance
        </Item>
        
        <Item
          className="hover-item"
          sx={{
            marginTop: "20px",
            marginLeft: "0px",
            width: "100%",
            height: "60px",
            fontSize: "1.0rem",
            justifyContent: "flex-start",
            display: "flex",
          }}
        >
          <LibraryBooksOutlinedIcon sx={{ marginRight: "10px" }} />
          Prompt Library
        </Item>
        <Item
          className="hover-item"
          sx={{
            marginTop: "20px",
            marginLeft: "0px",
            width: "100%",
            height: "60px",
            fontSize: "1.0rem",
            justifyContent: "flex-start",
            display: "flex",
          }}
        >
          <SaveAsOutlinedIcon sx={{ marginRight: "10px" }} />
          My Saves
        </Item>
        <Item
          className="hover-item"
          sx={{
            marginTop: "20px",
            marginLeft: "0px",
            width: "100%",
            height: "60px",
            fontSize: "1.0rem",
            justifyContent: "flex-start",
            display: "flex",
          }}
        >
          <MedicationOutlinedIcon sx={{ marginRight: "10px" }} />
          Our Doctors
        </Item>
        <Item
          className="hover-item"
          sx={{
            marginTop: "20px",
            marginLeft: "0px",
            width: "100%",
            height: "60px",
            fontSize: "1.0rem",
            justifyContent: "flex-start",
            display: "flex",
          }}
        >
          <PermIdentityOutlinedIcon sx={{ marginRight: "10px" }} />
          Patient history
        </Item>
        <Item
          className="hover-item"
          sx={{
            marginTop: "20px",
            marginLeft: "0px",
            width: "100%",
            height: "60px",
            fontSize: "1.0rem",
            justifyContent: "flex-start",
            display: "flex",
          }}
        >
          <FeedbackOutlinedIcon sx={{ marginRight: "10px" }} />
          FeedBack
        </Item>
      </Box>
    </div>
  );
}
