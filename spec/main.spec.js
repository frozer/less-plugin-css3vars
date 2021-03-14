var fs = require('fs');
var path = require('path');
const { fail } = require('assert');
var Converter = require(path.resolve(__dirname, '../lib/plugin'));
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

jasmine.getEnv().clearReporters(); 
jasmine.getEnv().addReporter(new SpecReporter({
  spec: {
    displayStacktrace: 'none',
    displaySuccessful: true,
    displayFailed: true
  },
  summary: {
    displaySuccessful: true,
    displayFailed: false,
  }
}));

function readFile(fileName) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path.resolve(__dirname, fileName), 'utf-8', function(err, data) {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

describe('CSS3 variable to LESS converter', function() {
  let converter = new Converter;  

  it('should convert CSS to LESS', function(done) {
    fixtureFile = './fixture.css';
    expectedFile = './expected.less';

    const convert = readFile(fixtureFile).then(function(data) {
      return converter.process(data, { fileInfo: { filename: fixtureFile } });
    });
  
    // const convert = Promise.resolve();
    const expected = readFile(expectedFile);

    const test = function(values) {
      expect(values[0]).toEqual(values[1]);
      done();
    }

    const error = function(err) {
      fail(err);
    }

    Promise.all([convert, expected]).then(test).catch
  });
});