function convertToInteger (args: string | string[]): any {
  return Array.isArray(args) ? args.map(arg => parseInt(arg)) : parseInt(args)
}

export default convertToInteger
