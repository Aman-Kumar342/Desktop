const express = require("express");
const router = express.Router();

const{getContacts,
    createContacts,
getContact,
updateContacts,
deleteContacts
}=require("../controllers/contactController");


router.route("/").get(getContacts);

router.route("/").post(createContacts);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContacts);

router.route("/:id").delete(deleteContacts);

module.exports = router;
