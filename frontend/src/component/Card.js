import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import "./MyComponent.css";
import ChatBox from "./ChatBox";
import Navbar from "./Navbar";
import ChatHistory from "./ChatHistory";
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

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed sx={{ marginLeft: 10, paddingLeft: 0 }}>
        <Box
          sx={{
            paddingTop: "10px",
            // background: "linear-gradient(to top, #0F1E46 97%, #fff 99%)",
            bgcolor: "#0F1E46",
            width: "1300px",
            height: "98vh",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 2)",
            color: "#fff",
            p: 1,
            m: 1,

            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              width: "1270px",
              height: "95vh",
              // padding: "15px",
            }}
          >
            <Item
              sx={{
                bgcolor: "#0F1E46",
                width: "30%",
                color: "white",
                border: "none",
              }}
            >
             <Navbar/>
            </Item>
            <Item sx={{ marginLeft: "10px", width: "30%" }}><ChatHistory/></Item>
            <Item sx={{ marginLeft: "20px", width: "60%" }}><ChatBox/></Item>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
