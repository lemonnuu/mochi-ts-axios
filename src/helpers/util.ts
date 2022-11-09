enum paramsType {
  Date = 'date',
  Object = 'object'
}
function judgmentType(target: any): string {
  const type = Object.prototype.toString.call(target)
  const spaceIndex = type.indexOf(' ')
  return type.slice(spaceIndex + 1, -1).toLowerCase()
}

export function isDate(target: any): target is Date {
  return judgmentType(target) === paramsType.Date
}

export function isObject(target: any): target is Object {
  return judgmentType(target) === paramsType.Object
}
