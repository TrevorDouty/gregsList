import Car from "./Models/Car.js"
import Houses from "./Models/Houses.js"
import Jobs from "./Models/Jobs.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]}*/
  cars = [new Car({ make: "Honda", model: "Accord", year: 2002, price: 5000, img: "//placehold.it/200x200", description: "This is a red honda." })]

  /** @type {Houses[]} */

  houses = [new Houses({ builder: "Rori Bartooon", model: "two-story", year: 1979, price: 299000, img: "//placehold.it/200x200", description: "This a kinda old house" })]

  /** @type {Jobs[]} */

  jobs = [new Jobs({ employer: "BCW", jobTitle: "grunt", pay: 2, yearsExperience: 0, img: "//placehold.it/200x200", description: "type a lot" })]

}
// new Car("Jeep", "Rango",1990, 10000, "//placehold.it/200x200", "A nice jeep")

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
