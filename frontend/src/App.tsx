import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import './App.css';

function App() {
  const [domain, setDomain] = useState<string>("");
  const [data, setData] = useState<any>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDomain(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain }),
      });
      const data = await res.json();
      setData(JSON.stringify(data));
    } catch (error) {
      console.error("Error encountered while fetching who is data:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        className="App"
        display="flex"
        flexDirection="column"
        alignItems="center"
        py={4}
      >
        <Typography variant="h4" gutterBottom>
          WhoIs Data
        </Typography>
        <TextField
          onChange={handleInput}
          variant="outlined"
          value={domain}
          placeholder="Please enter IP address or domain name"
          fullWidth
          margin="normal"
        />
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Click
        </Button>
        <br />
        {data && <pre className="data-output">{JSON.stringify(data, null, 2)}</pre>}
      </Box>
    </Container>
  );
}

export default App;
