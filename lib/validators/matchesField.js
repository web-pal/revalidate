'use strict';

exports.__esModule = true;
exports.default = matchesField;

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _createValidator = require('../createValidator');

var _createValidator2 = _interopRequireDefault(_createValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matchesField(otherField, otherFieldLabel) {
  return (0, _createValidator2.default)(function (message) {
    return function (value, allValues) {
      var otherValue = (0, _lodash2.default)(allValues, otherField);

      if (!allValues || value !== otherValue) {
        return message;
      }
    };
  }, function (field) {
    return field + ' must match ' + otherFieldLabel;
  });
}