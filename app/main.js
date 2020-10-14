import CarsController from "./Controllers/CarController.js";

class App {
  carsController = new CarsController()
}

window["app"] = new App();
