import { isDate, isPlainObject } from './util'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL(url: string, params?: object): string {
  if (!params) return url
  const parts: string[] = []
  Object.entries(params).forEach(([key, val]) => {
    // 1. 参数键值对的值为 null 或 undefined，则忽略
    if (val == null) return
    let values: string[]
    // 2. 得先判断是不是 Array
    if (Array.isArray(val)) {
      key += '[]'
      values = val
    } else {
      values = [val]
    }
    values.forEach(item => {
      if (isDate(item)) {
        item = item.toISOString()
      } else if (isPlainObject(item)) {
        item = JSON.stringify(item)
      }
      parts.push(`${encode(key)}=${encode(item)}`)
    })
  })
  const serializeParams = parts.join('&')
  if (serializeParams) {
    if (~url.indexOf('#')) {
      url = url.slice(0, url.indexOf('#'))
    }
    url += (~url.indexOf('?') ? '&' : '?') + serializeParams
  }

  return url
}
