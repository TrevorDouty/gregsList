import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"

function _draw() {
  let houses = ProxyState.houses
  let template = ""
  houses.forEach(h => template += h.Template)
  document.getElementById("houses").innerHTML = template
}

export default class HousesController {
  constructor() {
    console.log("houses controller")
    console.log(ProxyState.houses)
    _draw()
    ProxyState.on("houses", _draw)
  }

  createHouses() {
    event.preventDefault();
    console.log("house creating")
    let form = event.target
    console.log(form)
    let dataHouses = {
      // @ts-ignore
      make: form.builder.value,
      // @ts-ignore
      model: form.model.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: form.price.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      img: form.imgUrl.value
    }
    console.log(dataHouses)
    housesService.createHouses(dataHouses)
  }

  delete(id) {
    housesService.removeHouses(id)
  }

  bid(id) {
    event.preventDefault();
    let form = event.target
    // @ts-ignore
    console.log(form.bid.value)
    // @ts-ignore
    let bid = form.bid.value
    housesService.bid(id, bid)
  }
} 