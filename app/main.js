import CarsController from "./Controllers/CarController.js";
import HousesController from "./Controllers/HousesController.js";

class App {
  carsController = new CarsController();

  housesController = new HousesController()
}

window["app"] = new App();
