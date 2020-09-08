# Reader Bar Plugin for Eleventy

This plugin adds a Reader Bar into your template as you scroll the page.

## Installation

Available on [npm](https://www.npmjs.com/package/eleventy-plugin-reader-bar).

`npm install eleventy-plugin-reader-bar`

## Configuration

Open up your Eleventy config file (.eleventy.js) and add the plugin:

```js
const readerBar = require('eleventy-plugin-reader-bar')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(readerBar)
}
```

## Usage

1. In your base template:
  - Create a `div` HTML Element with the class `reader-bar-start`;
  - This div must wrapp all the elements of the page, including the header (and optionally, the footer). If not, the bar will be 100% full before you scroll the entire page;
  - To **not** display the reader bar in your base/index page, add the customized shortcode `{% readerBar "0px" %}`;
2. In your post/content template:
  - Add the shortcode `{% readerBar %}` after the content;
  - Check templates specific shortcodes in [Examples](#examples) section; 

## Customization

You can customize the height and the colors of the bar:
- height: the thickness of the bar. Value in px (default: 4px)
- background color: color of the full width bar. Value can be literal or hexa (default: black)
- fill color: color that fills the bar as you scroll the page. Value can be literal or hexa (default: orange)

### Examples

`{% readerBar %}` displays the default reader bar *(default works in liquid and nunjucks templates)*

`{% readerBar "0px" %}` hides the reader bar *(use in your base template, if necessary)*

`{% readerBar "8px" "red" %}` displays the reader bar with height of 8px and a red background color

`{% readerBar "8px" "#ff0000" "#0000ff" %}` displays the reader bar with height of 8px, red background color and blue fill color

**Obs for nunjucks templates:** the arguments need to be comma separated.
`{% readerBar "8px", "#ff0000", "#0000ff" %}`

**Obs for handlebars templates:** all parameters must be informed.
`{{{ readerBar "8px" "#ff0000" "#0000ff" }}}`

## See a demo

[11ty Plugin Reader Bar Demo](https://thigoap.github.io/11ty-plugin-reader-bar-demo/)

### or Run a sample locally

Clone the repository: `git clone https://www.github.com/thigoap/eleventy-plugin-reader-bar.git`

Run the sample locally: `npm test` 

## License

MIT