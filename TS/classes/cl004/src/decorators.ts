function Log() {
  return (target, key, descriptor) => {
    const originalMethod = descriptor.value

    descriptor.value = (...args: any[]) => {
      console.log('----------------------')
      console.log(`Calling the method ${key} with params: ${JSON.stringify(args)}`)
      const result = originalMethod.apply(this, args)
      console.log(`The method ${key} returns the value: ${JSON.stringify(result)}`)
      console.log('----------------------')

      return result
    }

  }
}

class Planet {
  public name: string

  constructor(name: string) {
    this.name = name
  }

  @Log()
  calculate(value: number) {
    return value * 2
  }

  @Log()
  invertName() {
    return this.name.split('').reverse().join('')
  }
}

const planet = new Planet('Oi')
console.log(planet)

const result = planet.calculate(6)

console.log(`Result is ${result}`)

planet.invertName()