const CarrosRepository = require("../repositories/carrosRepository");

class CarrosService {
    static async getAll(){
        return await CarrosRepository.getAll();
    }
    static async addCar(marca,modelo,ano){
        return await CarrosRepository.addCar(marca,modelo,ano);
    }
}

module.exports = CarrosService;