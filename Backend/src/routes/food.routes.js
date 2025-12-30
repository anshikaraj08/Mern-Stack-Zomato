import express from 'express';
const router=express.Router();
// post /api/food/ [protected]=>normal user cannot add food item only food-partner can 

router.post("/")

export default router;