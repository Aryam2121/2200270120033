import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Snackbar,
  Alert
} from '@mui/material';
import axios from 'axios';

const ShortenURL = () => {
  const [url, setUrl] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [validity, setValidity] = useState('');
  const [shortLink, setShortLink] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:3001/shorturls', {
        url,
        shortcode,
        validity: Number(validity)
      });
      setShortLink(res.data.shortLink);
      setError('');
      setOpen(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      setOpen(true);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card sx={{ p: 3, borderRadius: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
             URL Shortener
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'gray' }}>
            Enter a long URL to shorten it with an optional custom code and expiry.
          </Typography>

          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Long URL"
              variant="outlined"
              fullWidth
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <TextField
              label="Custom Shortcode (optional)"
              variant="outlined"
              fullWidth
              value={shortcode}
              onChange={(e) => setShortcode(e.target.value)}
            />
            <TextField
              label="Validity (minutes)"
              type="number"
              variant="outlined"
              fullWidth
              value={validity}
              onChange={(e) => setValidity(e.target.value)}
            />
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={handleSubmit}
              sx={{ mt: 1 }}
            >
              Generate Short Link
            </Button>
          </Box>

          {shortLink && (
            <Typography sx={{ mt: 3 }} color="success.main">
              Shortened Link: <a href={shortLink} target="_blank" rel="noreferrer">{shortLink}</a>
            </Typography>
          )}
        </CardContent>
      </Card>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        {error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <Alert severity="success">Short link created successfully!</Alert>
        )}
      </Snackbar>
    </Container>
  );
};

export default ShortenURL;
