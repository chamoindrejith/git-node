const express = require("express"); // Import express
const authRoutes = require("./auth.route"); // Import
const router = express.Router(); // Create a router

router.get("/", (req, res) => {
    res.json({ 
        message: "Hello World!" 
    });
});
router.use("/auth", authRoutes); // Use authRoutes if the path is /auth

module.exports = router; // Export the router