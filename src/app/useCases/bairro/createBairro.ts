// Importa os tipos Request e Response do Express e o modelo Neighborhood
import { Request, Response } from 'express';
import { Bairro } from '../../models/Bairro';

// Função assíncrona para criar um novo bairro
export async function createBairro(req: Request, res: Response) {
    try {
        // Extrai informações do corpo da requisição
        const { nome } = req.body;

        // Cria um novo objeto Neighborhood usando o modelo Neighborhood
        const bairro = await Bairro.create({
            nome
        });

        // Responde com o novo bairro criado e o status 201 (Created)
        res.status(201).json(bairro);
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);

        // Responde com o status 500 (Internal Server Error)
        res.sendStatus(500);
    }
}