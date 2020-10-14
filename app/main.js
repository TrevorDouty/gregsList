import CarsController from "./Controllers/CarController.js";
import HousesController from "./Controllers/HousesController.js";
import JobsController from "./Controllers/JobsController.js";

class App {
  carsController = new CarsController();

  housesController = new HousesController()

  jobsController = new JobsController()
}

window["app"] = new App();
