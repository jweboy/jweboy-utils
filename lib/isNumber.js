'use strict';

function isObjectLike(value) {
	return value !== null && typeof value === 'object';
}

function getTypeTag(value) {
	const toString = Object.prototype.toString;

	if(value == null) {
		return value === null ? '[object Null]' : '[object Undefined]';
	}

	return toString.call(value);

}

/**
 * 检查 `value` 是否为 `Number` 类型
 *
 * @param {*} value 被检查的值
 * @returns {boolean} 如果是 `number` 类型就返回 `true`, 反之则为 `false`
 */
function isNumber(value) {
	return typeof value === 'number' ||
		(isObjectLike(value) && getTypeTag(value) === '[object Number]');
}

module.exports = isNumber;
