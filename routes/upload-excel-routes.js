const express = require("express");
const router = express.Router();

const { UPLOAD_EXCEL_PATHS } = require("./route-enums");
const {
  uploadExcelController,
} = require("../controllers/upload-excel-controller");
const { fileUpload } = require("../middlewares/file-upload");

router.post(
  UPLOAD_EXCEL_PATHS.UPLOAD_EXCEL,
  fileUpload.single("file"),
  uploadExcelController
);

module.exports = router;
