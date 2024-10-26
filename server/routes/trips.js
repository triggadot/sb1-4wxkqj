import express from 'express';
import { segments } from '../config/db.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(segments);
});

router.get('/:segmentId', (req, res) => {
  const segment = segments[req.params.segmentId];
  if (!segment) {
    return res.status(404).json({ error: 'Segment not found' });
  }
  res.json(segment);
});

export default router;