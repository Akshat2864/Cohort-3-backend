import express from "express";
import { upload } from "../config/multer.config.js";
import { createPost, getAllPosts } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", upload.single("image") ,createPost)

router.get("/allPosts", getAllPosts)

export default router;