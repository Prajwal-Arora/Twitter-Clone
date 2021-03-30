const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../schemas/UserSchema');

router.get("/", async (req, res, next) => {

    var payload = {
        pageTitle: "Inbox",
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user)
    };

    res.status(200).render("inboxPage", payload);
})

router.get("/new", async (req, res, next) => {

    var payload = {
        pageTitle: "New message",
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user)
    };

    res.status(200).render("newMessage", payload);
})

module.exports = router;