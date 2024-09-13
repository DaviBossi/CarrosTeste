const CarrosService = require("../services/carrosServices");

class CarrosController {
    static async getAll(req,res) {
        try {
            const carros = await CarrosService.getAll();
            res.status(500).json(carros);
        } catch (error) {
            res.status(500).json({ error : "Erro ao buscar os carros"});
        }
    }
}

module.exports = CarrosController;