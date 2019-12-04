# d365MultipleLinesHTML
A pcf component that would allow editing and rendering of html in "multiple lines of text" field.

**Note:**
*You need to update the webpackConfig.js in node_modules\pcf-scripts in order to process css files.*
```json
{
	// Tell webpack how to handle JS or JSX files
	test: /\.(js|jsx)$/,
	use: [babelLoader]
},
{
	//css
	test: /\.css$/i,
	use: ["style-loader", "css-loader"]
}
```                
