const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const PORT = 3001;

// se conectar ao banco de dados MySQL
const sequelize = new Sequelize('biblioteca', 'root', ' ', {
  host: 'localhost',
  dialect: 'mysql',
});

// definir o modelo de dados da tabela
const Livro = sequelize.define('livros', {
  livcodigo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  livano: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  livtitulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  livautor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// sincronizar o modelo com a tabela no banco de dados
sequelize.sync();

// endpoint para obter os dados
app.get('/api/data', async (req, res) => {
  try {
    const livrosCadastrados = await Livro.findAll();
    res.send(livrosCadastrados);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter os dados do banco de dados.');
  }
});

// inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
