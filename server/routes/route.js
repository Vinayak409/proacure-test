import express from 'express'
import { addItem } from '../controller/item-controller.js';

const router = express.Router();

router.post('/newitem', addItem);

export default router;