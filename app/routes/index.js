const router = require("express").Router();
const hotelSearchController = require("../controllers/hotelSearchController");

router.get("/search", hotelSearchController.handleSearchRequest);

module.exports = router;