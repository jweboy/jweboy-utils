import isObjectLike from './isObjectLike';
import getTypeTag from '../internal/getTypeTag';

/**
 * 检查 `value` 是否为 `Number` 类型
 *
 * @param {*} value 被检查的值
 * @returns {boolean} 如果是 `number` 类型就返回 `true`, 反之则为 `false`
 */
function isNumber(value) {
  return typeof value === 'number'
    || (isObjectLike(value) && getTypeTag(value) === '[object Number]');
}

export default isNumber;
