const CarrosRepository = require("../repositories/carrosRepository");

class CarrosService {
    static async getAll(){
        return await CarrosRepository.getAll();
    }
}

module.exports = CarrosService;