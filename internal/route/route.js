const express = require('express');
const controller = require("../controller/crud.js")

const router = express.Router()

router.get("/get",controller.GetBlog)
router.post("/create",controller.CreateBlog)
router.patch("/update",controller.UpdateBlog)
router.delete("/delete",controller.DeleteBlog)

module.exports = router