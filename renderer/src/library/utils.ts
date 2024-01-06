export const isString = (value: any) => typeof value === 'string';
export const isNumber = (value: any) => typeof value === 'number';
export const isFunction = (value: any) => typeof value === 'function';
export const isArray = (value: any) => (
  value && (
    value instanceof Array ||
    Array.isArray(value) ||
    Object.prototype.toString.call(value) === '[object Array]'
  )
);

export const isObject = (value: any) => value !== null && !isArray(value) && typeof value === 'object';

export const isEmpty = (value: any) => (
  value === undefined ||
  value === null ||
  value === '' ||
  (isArray(value) && value.length === 0) ||
  (Object.prototype.toString.call(value) === '[object Object]' && JSON.stringify(value) === '{}')
);

export const isBoolean = (value: any) => typeof value === 'boolean';