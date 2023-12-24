export const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // generate token
  const token = user.getSignedJwtToken();
  res.status(201).json({ success: true, token });
});
