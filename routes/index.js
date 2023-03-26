const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
//
// 1

const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
// 2

/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/form-create-account", function (req, res, next) {
  res.render("form-account", {});
});

router.get("/back-home", function (req, res, next) {
  res.redirect("/");
});

router.get("/form-gioi-thieu", function (req, res, next) {
  res.render("form-gioi-thieu", {});
});

router.get("/form-trang-chu", function (req, res, next) {
  res.redirect("/");
});

router.get("/form-san-pham", function (req, res, next) {
  res.render("form-san-pham", {});
});

router.get("/form-tin-tuc", function (req, res, next) {
  res.render("form-tin-tuc", {});
});

router.get("/form-lien-he", function (req, res, next) {
  res.render("form-lien-he", {});
});

router.get("/form-gio-hang", function (req, res, next) {
  res.render("form-gio-hang", {});
});

module.exports = router;
