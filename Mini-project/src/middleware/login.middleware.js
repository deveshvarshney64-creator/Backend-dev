import Joi from "joi";

function loginMidd(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().trim().email().lowercase().required(),
    password: Joi.string().required(),
  });

  const { error, value } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.render("login", {
      error: error.details[0].message,
    });
  }

  // ✅ Sanitized data
  req.body = value;
  next();
}

export default loginMidd;
