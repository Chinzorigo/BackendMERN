const Login = require("../models/Login");

// login
exports.createLogin = async (req, res, next) => {
  const { username, password } = req.body;
  console.log("data: ", req.body.username);

  try {
    const login = await Login.findOne({username});
    console.log(login);

    if (!login) {
      return res.status(400).json({
        success: false,
        error: req.body.username + " ID-Ñ‚ÑÐ¹ Ñ…ÑÑ€ÑÐ³Ð»ÑÐ³Ñ‡ Ð±Ð°Ð¹Ñ…Ð³Ò¯Ð¹.",
      });
    }

    res.status(200).json({
      success: true,
      data: login,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};


// Login tablees medeelel tatah
exports.getLogins = async (req, res, next) => {
  try {
    const logins = await Login.find();

    res.status(200).json({
      success: true,
      data: logins,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};