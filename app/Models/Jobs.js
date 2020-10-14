import { generateId } from "../Utils/GeneratedId.js"
export default class Jobs {
  constructor({ employer, jobTitle, yearsExperience, pay, img, description }) {
    this.employer = employer
    this.jobTitle = jobTitle
    this.yearsExperience = yearsExperience
    this.pay = pay
    this.img = img
    this.description = description || "No description available"
    this.id = generateId()
  }

  get Template() {
    return `<div class="col-4">
    <div class="card text-light">
    <img class="card-img-top img-fluid" src="${this.img}" alt="">
    <div class="card-body bg-dark text-light">
        <h4 class="card-title">Employer: ${this.employer}</h4> 
        <p>Job Title: ${this.jobTitle}</p>
        <p class="card-text"> Pay: ${this.pay}</p>
         <p></p>Description: ${this.description}</p>
        <form onsubmit="app.jobsController.bid('${this.id}')">
        <div class="form-group p-1">
        <input type="number"
        class="form-control" name="bid" id="bid" aria-describedby="helpId" placeholder="Bid">
        </div>
        <button class="btn btn-success btn-block pb-3" type="submit" >Bid</button>
        </form>
        <button class="btn btn-danger" onclick="app.jobsController.delete('${this.id}')">Delete</button>
    </div>
    </div>
</div>`
  }

} 