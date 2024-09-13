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
}

module.exports = CarrosRepository;