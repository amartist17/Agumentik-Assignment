const express = require("express");
const viewController = require('../controllers/viewController')
const router = express.Router({ mergeParams: true });


router.get("/", viewController.home);
router.post("/change-title", viewController.changeTitle);
router.post("/change-address", viewController.changeAddress);
router.post("/change-email", viewController.changeEmail);
// router.get("/contact", viewController.contact);
router.get("/login", viewController.login);
router.post("/login", viewController.loginCheck);
router.get("/dashboard", viewController.dashboard);
// router.get("/dashboard/add-user", viewController.addUser);
// router.get("/dashboard", viewController.addFolder);


module.exports = router;
