import CarController from "./Controllers/CarController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  carController = new CarController();
  valuesController = new ValuesController();
}

window["app"] = new App();
