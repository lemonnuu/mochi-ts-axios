export type Methods =
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'delete'
  | 'DELETE'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: Methods
  params?: object
  data?: any
}
