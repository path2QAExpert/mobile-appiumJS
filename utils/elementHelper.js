const selectors = require('../selectors/selector.json');

function getSelector(key) {
  const platform = driver.capabilities.platformName.toLowerCase();
  if (!selectors[key]) throw new Error(`No selector for key: ${key}`);
  const value = selectors[key][platform];
  if (!value) throw new Error(`No selector for platform: ${platform} in key: ${key}`);
  return value;
}

module.exports = {
  getSelector
};