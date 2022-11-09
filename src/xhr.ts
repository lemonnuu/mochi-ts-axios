import { AxiosRequestConfig } from './types'

export function xhr(config: AxiosRequestConfig) {
  const { url, method = 'GET', data = null, headers = {} } = config
  const xhr = new XMLHttpRequest()
  xhr.open(method.toUpperCase(), url, true)
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.response)
      }
    }
  }

  Object.keys(headers).forEach(name => {
    if (data == null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      xhr.setRequestHeader(name, headers[name])
    }
  })
  xhr.send(data)
}
