const { Client } = require("pg");
const config = require("../config/config");

class CarrosRepository {
    static async getAll(){
        const client = new Client(config.urlConnection);
        await client.connect();
        const result = await client.query("SELECT * FROM Carros");
        await client.end();
        return result.rows;
    }

    static async addCar(nome,marca,ano){
        const client = new Client(config.urlConnection);

        try {
            await client.connect();
            const query = "INSERT INTO CARROS (nome,marca,ano) VALUES ($1, $2, $3) RETURNING *"
            const values = [nome,marca,ano];
            const result = await client.query(query,values);
            return result.rows[0];
        } catch (error){
            console.error("Erro ao inserir um novo carro",error);
            throw error;
        } finally {
           await client.end();
        }
    }

    static async updateCar(id,nome,marca,ano){
        const client = new Client(config.urlConnection);

        try{
            await client.connect();
            const query = "UPDATE CARROS SET NOME = $2, MARCA = $3, ANO = $4 WHERE ID = $1 RETURNING *"
            const values = [id,nome,marca,ano];
            const result = await client.query(query,values);
            return result.rows[0];
        }catch(error){
            console.error("Erro ao atualizar o carro:",error);
            throw error;
        } finally {
            await client.end();
        }
    }
}

module.exports = CarrosRepository;