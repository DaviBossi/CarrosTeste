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
    static async addCar(req,res) {
        const {nome,marca,ano} = req.body;
        try {
            if(!marca || !nome || !ano){
                return res.status(400).json({error: "Todos os campos sao obrigatorios"})
            }
            const novoCarro = await CarrosService.addCar(nome,marca,ano);
            res.status(201).json(novoCarro);
        }catch(error){
            res.status(500).json({error: "Erro ao adicionar um novo carro"});
        }
    }
}

module.exports = CarrosController;