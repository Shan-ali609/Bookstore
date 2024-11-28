//book.route.js
import express from "express";
import { getbook } from "../controler/book.conyroller.js";

const router = express.Router();

router.get('/',getbook);

export default router