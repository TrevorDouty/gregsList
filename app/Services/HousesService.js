import { ProxyState } from "../AppState.js";
import Houses from "../Models/Houses.js";

class HousesService {
  constructor() {
    console.log("housesService");
  }
  bid(id, bidAmount) {
    let temp = ProxyState.houses
    if (bidAmount > 0) {
      let car = temp.find(c => c.id == id)
      car.price += parseInt(bidAmount)
      ProxyState.houses = temp
    }
  }
  removeHouses(id) {
    let temp = ProxyState.houses
    let housesIndex = temp.findIndex(h => h.id == id)
    temp.splice(housesIndex, 1)
    ProxyState.houses = temp
  }

  createHouses(dataHouses) {
    // let newCar = new Car(rawCar) 
    // console.log(newCar)  
    // let cars = [...ProxyState.cars, newCar ]
    // ProxyState.cars = cars

    // ProxyState.cars = ProxyState.cars.concat(new Car(rawCar))

    let temp = ProxyState.houses
    temp.push(new Houses(dataHouses))
    ProxyState.houses = temp
  }

}
export const housesService = new HousesService() 