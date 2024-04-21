const checkEmptyRequestBody = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "Request body cannot be empty" });
  }
  next();
};

export default checkEmptyRequestBody;
