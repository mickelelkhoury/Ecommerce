// Create and send token to save in the cookies
const sendToken = (user, statusCode, res) => {
	// Create JWT token
	const token = user.getJwtToken();

	// Cookie options
	const options = {
		expires: new Date(
			Date.now() + process.env.COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000
		),
		httpOnly: true,
	};

	res.status(statusCode).cookie('token', token, options).json({
		success: true,
		token,
		user,
	});
};
module.exports = sendToken;
