import express from "express";
const router = express.Router();

router.get("/", (req, res)=>{
  res.send("Auth EndPoint");
})
router.get("/register", (req, res)=>{
  res.send("Auth Register EndPoint");
})

export default router;