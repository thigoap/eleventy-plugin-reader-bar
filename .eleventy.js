const readerBar = require('./readerBar');
const readerBarNjk = require('./readerBarNjk');

module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode('readerBar', readerBar)
  eleventyConfig.addNunjucksShortcode('readerBar', readerBarNjk)
}