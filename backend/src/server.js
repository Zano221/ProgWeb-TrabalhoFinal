import sequelize from './db/db.js'
import express from 'express';
import cors from 'cors';
import { Funcionario, Vitima } from './db/models.js';
import { Op } from 'sequelize';

const app = express();
const port = 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
sequelize.sync();

//GET
app.get('/funcionario/:email/:password', async (req, res) => {
        
        const email = req.params.email;
        const password = req.params.password;

        let result = null;
        try {
            result = await Funcionario.findOne(
                { where: {
                    [Op.and]: [
                        { EMAIL_FUNC: email},
                        { SENHA_FUNC: password}
                    ]
                } })
        }
        catch(e) {
            result = e
            console.error("\n\nErro ao comunicar com o banco de dados: ", e, "\n\n");
        }

        res.send(result);
})

app.get('/vitimas', async (req, res) => {

        let result = null;
        try {
            result = await Vitima.findAll();
        }
        catch(e) {
            result = e
            console.error("\n\nErro ao comunicar com o banco de dados: ", e, "\n\n");
        }

        res.send(result);
})


//POST
app.post('/funcionario', async(req, res) => {
    const email = req.body.email;
    const nome = req.body.nome;
    const senha = req.body.senha

    console.log("\n\n\n\n\n\n", email, nome, senha, "\n\n\n\n");

    let result = null
    try {
        result = await Funcionario.create({
            NOME_FUNC: nome,
            EMAIL_FUNC: email,
            SENHA_FUNC: senha
        })
    }
    catch(e) {
        result = e
        console.error("\n\nErro ao comunicar com o banco de dados: ", e, "\n\n");
    }
    res.send(result);
})

app.post('/vitima', async (req, res) => {

    const nome = req.body.nome;
    const cidade = req.body.cidade;

    let result = null;
    try {
        result = await Vitima.create({
            NOME_VITI: nome,
            CIDADE_VITI: cidade
        });
    }
    catch(e) {
        result = e
        console.error("\n\nErro ao comunicar com o banco de dados: ", e, "\n\n");
    }

    res.send(result);
})

//PUT

app.put('/funcionario/:email/:senha', async (req, res) => {

    const emailAntigo = req.params.email;
    const senhaAntiga = req.params.senha;
    const func = req.body;

    let result = null;
    try {
        result = await Funcionario.update({
            EMAIL_FUNC: func.email,
            NOME_FUNC: func.nome,
            SENHA_FUNC: func.senha
        } ,{
            where: {
                [Op.and]: [
                    {EMAIL_FUNC: emailAntigo},
                    {SENHA_FUNC: senhaAntiga}
                ]
            }
        })
    }
    catch(e) {
        result = e
        console.error("\n\nErro ao comunicar com o banco de dados: ", e, "\n\n");
    }

    res.send(result);
})

//DELETE

app.delete('/funcionario/:email/:password', async (req, res) => {
    const email = req.params.email;
    const password = req.params.password;
  
    let result = null;
    try {
      await Funcionario.destroy({
        where: {
          [Op.and]: [
            { EMAIL_FUNC: email },
            { SENHA_FUNC: password }
          ]
        }
      });
  
      result = true
    } catch (e) {
      result = e;
      console.error("\n\nErro ao comunicar com o banco de dados: ", e, "\n\n");
    }
  
    res.send(result);
  });

//RUN
app.listen(port, () => "Server running on port 6969")

export default app