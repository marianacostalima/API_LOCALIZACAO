// Importa os tipos Request e Response do Express e o modelo City
import { Request, Response } from 'express';
import { Cidade } from '../../models/Cidade';

// Função assíncrona para listar todas as cidades
export async function listCidade(req: Request, res: Response) {
    try {
        // Busca todos os registros de cidades no banco de dados
        const cities = await Cidade.find(); 

        // Responde com a lista de cidades encontradas
        res.json(cities);
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);

        // Responde com o status 500 (Internal Server Error)
        res.sendStatus(500);
    }
}