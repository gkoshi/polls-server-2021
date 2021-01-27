const XLSX = require("node-xlsx");
const _ = require("lodash");

const Country = require("../models/country");
const City = require("../models/city");
const Settlement = require("../models/settlement");

const uploadExcelController = async (req, res, next) => {
  const filepath = req.file.path;
  const workSheetsFromFile = XLSX.parse(filepath);

  const cities = workSheetsFromFile[0].data
    .filter((el, index) => {
      if (index !== 0 && el[0]) {
        return el;
      }
    })
    .map((el) => {
      return { name: el[0], village: el[1] };
    });

  const KOSOVO_ID = 1;

  for (const item of cities) {
    let cityExists = await City.findOne({
      where: { name: item.name },
      raw: true,
    });
    let cityCreated;
    if (!cityExists) {
      cityCreated = await City.create({
        country_id: KOSOVO_ID,
        name: item.name,
      });
    }
    await Settlement.create({
      country_id: KOSOVO_ID,
      name: item.village,
      city_id: cityExists ? cityExists.id : cityCreated.id,
    });
  }

  res.status(200).json({ message: req.file.filename });
};

module.exports = {
  uploadExcelController,
};
