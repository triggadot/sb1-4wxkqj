import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import tripsRouter from './routes/trips.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3001; // Changed to 3001 to avoid conflict with Vite

app.use(cors());
app.use(express.json());

app.use('/api/trips', tripsRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});