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
    static async updateCar(req,res){
        const {id,nome,marca,ano} = req.body;
        try{
            if(!id){
                return res.status(400).json({error: "Usuario nao inseriu o ID"})
            }
            const updatedCar = await CarrosService.updateCar(id,nome,marca,ano);
            res.status(201).json(updatedCar);
        } catch(error){
            res.status(500).json({error: "Erro ao atualizar um carro"});
        }
    }
    static async deleteCar(req,res){
        const id = req.body;

        try{
            if(!id){
                return res.status(400).json({error: "Usuario nao inseriu o ID"})
            }
            const deletedCar = await CarrosService.deleteCar(id);
            res.status(202).json(deletedCar); 
        } catch (error) {
            res.status(500).json({error: "Erro ao deletar um carro"});
        }
    }
}

module.exports = CarrosController;