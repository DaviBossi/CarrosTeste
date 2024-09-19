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

    static async addCar(marca,modelo,ano){
        const client = new Client(config.urlConnection);

        try {
            await client.connect();
            const query = "INSERT INTO CARROS (marca,modelo,ano) VALUES ($1, $2, $3) RETURNING *"
            const values = [marca,modelo,ano];
            const result = await client.query(query,values);
            return result.rows[0];
        } catch (error){
            console.error("Erro ao inserir um novo carro",error);
            throw error;
        } finally {
            client.end();
        }
    }
}

module.exports = CarrosRepository;