import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import sdk from '@stackblitz/sdk'

import "./style.css";

export default function App() {
  return (
    <Box sx={{ width: '100%', maxWidth: 768 }}>
      <Typography variant="h1" component="div" gutterBottom>
        TD Example Component Library
      </Typography>
      <Typography variant="h2" gutterBottom component="div">
        Accordion
      </Typography>
      <Typography variant="body1" gutterBottom>
        Example accordion with subtitles. Accordions auto close when another is opened.
      </Typography>
      <iframe src="https://stackblitz.com/edit/react-jud6nx?embed=1&file=src/App.js&hideExplorer=1&view=preview" style={{width: `100%`, maxWidth: 768, marginBottom: 48}} />
      <Typography variant="h2" gutterBottom component="div">
        Card
      </Typography>
      <Typography variant="body1" gutterBottom>
        Example card with link.
      </Typography>
      <iframe src="https://stackblitz.com/edit/react-fctxuq?embed=1&file=src/App.js&hideExplorer=1&view=preview" style={{width: `100%`, maxWidth: 768, marginBottom: 48}} />
      <Typography variant="h2" gutterBottom component="div">
        Table
      </Typography>
      <Typography variant="body1" gutterBottom>
        Example table.
      </Typography>
      <iframe src="https://stackblitz.com/edit/react-bl1a7l?embed=1&file=src/App.js&hideExplorer=1&view=preview" style={{width: `100%`, maxWidth: 768, marginBottom: 48}} />
    </Box>
  );
}
