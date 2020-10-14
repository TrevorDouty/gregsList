import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"


export default class JobsController {
  constructor() {
    console.log("jobs controller")
    console.log(ProxyState.jobs)
    // _drawJobs()
    ProxyState.on("jobs", this.drawJobs)
  }

  drawJobs() {
    let jobs = ProxyState.jobs
    let template = `        <div class="row bg-dark ">
    <div class="col" id="form">
        <form onsubmit="app.jobsController.createJobs()" class="form-inline">
            <div class="form-group p-1">
                <input type="text" class="form-control" name="employer" id="employer" aria-describedby="helpId"
                    placeholder="employer">
            </div>
            <div class="form-group p-1">
                <input type="text" class="form-control" name="jobTitle" id="jobTitle" aria-describedby="helpId"
                    placeholder="JobTitle">
            </div>
            <div class="form-group p-1">
                <input type="number" class="form-control" name="pay" id="pay" aria-describedby="helpId"
                    placeholder="Pay">
            </div>
            <div class="form-group p-1">
                <input type="number" class="form-control" name="yearsExperience" id="yearsExperience"
                    aria-describedby="helpId" placeholder="YearsExperience">
            </div>
            <div class="form-group p-1">
                <input type="url" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="helpId"
                    placeholder="Img">
            </div>
            <div class="form-group p-1">
                <input type="text" class="form-control" name="description" id="description"
                    aria-describedby="helpId" placeholder="Description">
            </div>
            <button class="btn btn-primary" type="submit">Post</button>
        </form>
    </div>
</div>`
    jobs.forEach(j => template += j.Template)
    document.getElementById("content").innerHTML = template
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