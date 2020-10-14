import { ProxyState } from "../AppState.js";
import Jobs from "../Models/Jobs.js";

class JobsService {
  constructor() {
    console.log("jobs Service");
  }
  bid(id, bidAmount) {
    let temp = ProxyState.jobs
    if (bidAmount > 0) {
      let jobs = temp.find(j => j.id == id)
      jobs.pay += parseInt(bidAmount)
      ProxyState.jobs = temp
    }
  }
  removeJobs(id) {
    let temp = ProxyState.jobs
    let jobsIndex = temp.findIndex(j => j.id == id)
    temp.splice(jobsIndex, 1)
    ProxyState.jobs = temp
  }

  createJobs(dataJobs) {
    // let newCar = new Car(rawCar) 
    // console.log(newCar)  
    // let cars = [...ProxyState.cars, newCar ]
    // ProxyState.cars = cars

    // ProxyState.cars = ProxyState.cars.concat(new Car(rawCar))

    let temp = ProxyState.jobs
    temp.push(new Jobs(dataJobs))
    ProxyState.jobs = temp
  }

}
export const jobsService = new JobsService() 