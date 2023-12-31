import { isArray, isBoolean, isObject, isString } from 'lodash';
// https://stackoverflow.com/a/42349521


export const getProp = <T>(fn: () => T, defaultValue: T): T => {
    try {
      const val = fn();
      if (isBoolean(defaultValue) && !isBoolean(val)) {
        return defaultValue;
      }
      if (isString(defaultValue) && !isString(val)) {
        return defaultValue;
      }
      if (isArray(defaultValue) && !isArray(val)) {
        return defaultValue;
      }
      if (isObject(defaultValue) && !isObject(val)) {
        return defaultValue;
      }
      return val || defaultValue;
    } catch (err) {
      return defaultValue;
    }
  };