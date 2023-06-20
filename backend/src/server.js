import sequelize from './db/db.js'
import express from 'express';
import cors from 'cors';
import { Funcionario } from './db/models.js';
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


//POST
app.post('/funcionario', async(req, res) => {
    const email = req.body.data.email;
    const nome = req.body.data.nome;
    const senha = req.body.data.senha

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

//PUT

//DELETE


//RUN
app.listen(port, () => "Server running on port 6969")