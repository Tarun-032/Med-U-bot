import React, { useState } from "react";
import { Typography } from "@mui/material";
import "./MyComponent.css";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

export default function ChatHistory() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [predictedClass, setPredictedClass] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setPredictedClass(null); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePredict = async () => {
    try {
      // Create a FormData object to send the image file
      const formData = new FormData();
      formData.append("image", dataURItoBlob(selectedImage));

      
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPredictedClass(response.data.predicted_class);
    } catch (error) {
      console.error('Error predicting:', error);
    }
  };

 
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

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
        Upload Report
      </Typography>
      <hr style={{ border: "1px solid grey", marginTop: "35px" }} />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: "none" }}
        id="image-upload"
      />
      <label htmlFor="image-upload">
        <IconButton
          component="span"
          sx={{
            p: "10px",
            position: "relative",
            top: "150px",
            "& .MuiSvgIcon-root": {
              fontSize: "8rem",
            },
          }}
          aria-label="upload image"
        >
          <AttachEmailOutlinedIcon />
        </IconButton>
      </label>
      {selectedImage && (
        <div>
          <img
            src={selectedImage}
            alt="Uploaded"
            style={{ marginTop: "20px", maxWidth: "100%" }}
          />
          <button onClick={handlePredict}>Predict</button>
          {predictedClass !== null && (
            <p>Predicted Class: {predictedClass}</p>
          )}
        </div>
      )}
    </div>
  );
}
