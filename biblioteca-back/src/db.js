import mysql from 'mysql2'

const ConnectDatabase = async () =>  {
    try {
        if (global.connection && global.connection.state !== 'disconnected') {
            return global.connection
        }

        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'Biblioteca'
        });

        console.log('Conectou no MySQL!');

        global.connection = connection;

        return global.connection;
    } catch (e) {
        return false;
    }
}

const executeQuery = (query, params) => {
    return new Promise(async (resolve, reject) => {
        const conn = await ConnectDatabase();
        conn.query(query, params, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

export default {ConnectDatabase, executeQuery}