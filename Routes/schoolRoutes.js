const express = require('express');
const { addSchool, listSchools, deleteSchool } = require('../controllers/schoolController');
const router = express.Router();

router.post("/addSchool", addSchool )
router.get("/listSchools", listSchools )

router.delete("/deleteSchool/:id", deleteSchool )

module.exports = router
