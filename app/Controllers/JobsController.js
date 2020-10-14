import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"

function _draw() {
  let jobs = ProxyState.jobs
  let template = ""
  jobs.forEach(j => template += j.Template)
  document.getElementById("jobs").innerHTML = template
}

export default class JobsController {
  constructor() {
    console.log("jobs controller")
    console.log(ProxyState.jobs)
    _draw()
    ProxyState.on("jobs", _draw)
  }

  createHouses() {
    event.preventDefault();
    console.log("jobs creating")
    let form = event.target
    console.log(form)
    let dataJobs = {
      // @ts-ignore
      make: form.employer.value,
      // @ts-ignore
      model: form.job - title.value,
      // @ts-ignore
      year: form.years - experience.value,
      // @ts-ignore
      price: form.pay.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      img: form.imgUrl.value
    }
    console.log(dataJobs)
    jobsService.createJobs(dataJobs)
  }

  delete(id) {
    jobsService.removeJobs(id)
  }

  bid(id) {
    event.preventDefault();
    let form = event.target
    // @ts-ignore
    console.log(form.bid.value)
    // @ts-ignore
    let bid = form.bid.value
    jobsService.bid(id, bid)
  }
} 