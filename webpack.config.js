module.exports = {
	module: {
		loaders: [
			{ test: /\.jsx$/, exclude: /node-modules/, loader: 'babel-loader' }
		]
	}
};