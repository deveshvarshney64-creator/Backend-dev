import Joi from "joi";

function signupMidd(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().trim().min(3).required(),

    email: Joi.string()
      .trim()
      .email()
      .lowercase()
      .required(),

    password: Joi.string()
      .min(6)
      .max(20)
      .pattern(/[A-Za-z]/) // at least one letter
      .pattern(/[0-9]/)    // at least one number
      .required()
      .messages({
        "string.pattern.base":
          "Password must contain letters and numbers",
      }),
  });

  const { error, value } = schema.validate(req.body, {
    abortEarly: false, // 🔥 show all errors
  });

  if (error) {
    return res.render("signup", {
      error: error.details[0].message,
    });
  }

  // ✅ Clean sanitized data
  req.body = value;

  next();
}

export default signupMidd;