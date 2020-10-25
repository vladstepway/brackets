module.exports = function check(str, bracketsConfig) {
    let previousStr = '';
    while (str) {
      for (let i = 0; i < bracketsConfig.length; i++) {
        str = str.replace(bracketsConfig[i].join(''), '');
      }
      if (str === previousStr) {
        break;
      }
      previousStr = str;
    }
    return str.length === 0;
  }
