// Importa os tipos Request e Response do Express e o modelo City
import { Request, Response } from 'express';
import { Cidade } from '../../models/Cidade';

// Função assíncrona para criar uma nova cidade
export async function createCidade(req: Request, res: Response) {
    try {
        // Extrai informações do corpo da requisição
        const { nome, estado } = req.body;

        // Cria um novo objeto City usando o modelo City
        const cidade = await Cidade.create({
            nome,
            estado
        });

        // Responde com a nova cidade criada e o status 201 (Created)
        res.status(201).json(cidade);
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);

        // Responde com o status 500 (Internal Server Error)
        res.sendStatus(500);
    }
}