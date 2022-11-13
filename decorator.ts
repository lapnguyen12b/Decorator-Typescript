function logger(obj: any, property: string, descriptor: PropertyDescriptor) {
  console.log(obj)
  const method = descriptor.value;
  descriptor.value = (...args: any[]) => {
      console.log(args)
      args[1] = 'TEST';
      return method(...args);
  }
}

class DevoratorController {
  @logger
  hello( firstName: string, name: string) {
      console.log(`Hello ${firstName} ${name}`)
  }
}

const test = new DevoratorController();
test.hello('Tony', 'John')