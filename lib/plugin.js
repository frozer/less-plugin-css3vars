const replacements = [
  {
    pattern: /(--)/mg,
    replacement: '@'
  },
  {
    pattern: /(\:root \{\n|\:root)/mg,
    replacement: ''
  },
  {
    pattern: /(\}\n|\}|\n)/mg,
    replacement: ''
  },
  {
    pattern: /^(\s+)/g,
    replacement: ''
  },
  {
    pattern: /;(\s+)/g,
    replacement: ';\n'
  }
  // {
  //   pattern: /^(\s+|\s)/g,
  //   replacement: ''
  // },
  // {
  //   pattern: /;/g,
  //   replacement: ';\n',
  // }
];

var css3VariableManager = function() {};

css3VariableManager.prototype = {
  process: function(src, extra) {
    // skip non-CSS file
    if (extra.fileInfo && !/\.css/i.test(extra.fileInfo.filename)) {
      return src;
    }

    // perform replacements
    return [src].concat(replacements).reduce(function(source, item) {
      return source.replace(item.pattern, item.replacement)
    });
  }
}

module.exports = css3VariableManager;
