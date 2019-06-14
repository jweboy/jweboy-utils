/*
 * @Author: jianglei
 * @Date: 2019-06-06 16:42:37
 * @LastEditors: jianglei
 * @LastEditTime: 2019-06-14 18:53:56
 */

import dayjs from 'dayjs';
import { isPlainObject } from 'lodash';

// 时间格式化规则
const formatRules = {
  date: 'YYYY-MM-DD',
  time: 'YYYY-MM-DD HH:mm:ss',
  dayjs: 'dayjs',
};

// 时间计算规则
const calculateRules = {
  years: 'years',
  month: 'month',
  days: 'days',
  hours: 'hours',
  minutes: 'minutes',
  seconds: 'seconds',
};

/**
 * 时间格式转换
 *
 * @param {any} value - 原始时间值
 * @param {string} [type='date'] - 需要转换的时间格式
 * @returns {Object} 格式化的时间数据
 * @property {string} time - 原始的时间值
 * @property {string} fmtData - 格式化的时间值
 * @example
 *  import dateTime, { format as formatTime } from '@/utils/date-time'
 */
export const format = (value, type = 'date') => {
  // 空值不做格式化、moment 类型不做格式化
  if (value === '' || value === null || value instanceof dayjs) {
    return { data: value, fmtData: value };
  }

  const isMomentTyped = type === 'dayjs';
  const momentData = dayjs(value);
  const result = momentData.format(formatRules[type]);

  return {
    data: value,
    fmtData: isMomentTyped ? momentData : result,
  };
};

/**
 * 相对时间计算
 *
 * @param {Object} options - 配置对象
 * @param {string} options.method - 计算方法
 * @param {number} [options.num=0] - 间隔数，默认为0
 * @param {string} [options.type=calculateRules.days] - 计算类型，默认计算天数
 * @param {Object} [options.date=moment()] - 开始计算的日期，默认从当天开始计算
 * @returns {Object} - 计算最终得到的 moment 对象
 */
export const calculate = (options) => {
  if (!isPlainObject(options)) {
    console.log('请传入对象类型的配置选项');
    return false;
  }

  const {
    method, num = 0, type = calculateRules.days, date = dayjs(),
  } = options;

  const currentRule = calculateRules[type];

  if (!method) {
    console.log('请传入计算方法');
    return false;
  }

  if (!currentRule) {
    console.log('找不到匹配的计算规则');
    return false;
  }

  return date[method](num, currentRule);
};

export default {
  format,
  calculate,
};
// console.log(format(20))
// console.log(format({}))
// console.log(format([]))
// console.log(format(''))
// console.log(format(null))
// console.log(format(undefined))
// console.log(format('2019-05-25 19:23:47'))
// console.log(format('2019-05-25', 'time'))
// console.log(format('2019-05-25', 'moment'))
// console.log(format(moment('2019-05-25 19:23:47')))

// console.log(calculate());
// console.log(calculate([]));
// console.log(calculate(null));
// console.log(calculate({}));
// console.log(calculate({ method: "add", num: 5 }));
// console.log(calculate({ method: "add", num: null }));
// console.log(calculate({ method: "add", num: "" }));
// console.log(calculate({ method: "add" }));
// console.log(calculate({ method: "add", num: {} }));
// console.log(calculate({ method: "add", num: 2, type: "month" }));
// console.log(calculate({ method: "add", num: 2, type: "hours", date: moment().add(-1, "days") }));
