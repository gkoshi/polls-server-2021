const MobileUser = require("../models/mobile");
const Agent = require("../models/agents");

const generateToken = require("../utils/generate-token");

const registerUser = async (req, res, next) => {
  const {
    gender,
    country_id,
    city_id,
    settlement_id,
    question_category,
    age_range,
    device_id,
    code,
  } = req.body;

  if (code) {
    let codeIsValid;
    try {
      codeIsValid = await Agent.findOne({ where: { code } });
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Perdoruesi nuk mund te krijohet" });
    }

    if (!codeIsValid) {
      return res.status(400).json({ message: "Kodi nuk eshte valid" });
    }
  }

  let response;
  try {
    response = await MobileUser.create({
      gender,
      country_id,
      city_id,
      settlement_id,
      question_category,
      age_range,
      device_id,
      code,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Perdoruesi nuk mund te krijohet" });
  }

  const createdUser = response.get({ plain: true });

  const token = generateToken({
    id: createdUser.id,
    device_id: createdUser.device_id,
  });

  res.status(200).json({ message: "User registered successfully", token });
};

const selectQuestionCategory = async (req, res, next) => {
  const { category_id } = req.body;
  const { id } = req.data;

  try {
    await MobileUser.update(
      {
        category_id,
      },
      {
        where: { id },
      }
    );
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Kategoria nuk mund te selektohet!" });
  }

  res.status(200).json({ message: "Kategoria u selektua me sukses" });
};

module.exports = {
  registerUser,
  selectQuestionCategory,
};
