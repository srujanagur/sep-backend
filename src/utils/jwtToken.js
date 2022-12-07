import jwt from 'jsonwebtoken'
const sendToken = (user, statusCode, res) => {
  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
  }
  res.status(statusCode).json({
    success: true,
    user,
    token: generateToken(user._id),
  })
}
export default sendToken
