const CarrosRepository = require("../repositories/carrosRepository");

class CarrosService {
    static async getAll(){
        return await CarrosRepository.getAll();
    }
    static async addCar(nome,marca,ano){
        return await CarrosRepository.addCar(nome,marca,ano);
    }
    static async updateCar(id,nome,marca,ano){
        return await CarrosRepository.updateCar(id,nome,marca,ano);
    }
}

module.exports = CarrosService;