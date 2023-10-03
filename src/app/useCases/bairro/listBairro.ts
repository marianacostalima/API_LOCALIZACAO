// Importa os tipos Request e Response do Express e o modelo Bairro
import { Request, Response } from 'express';
import { Bairro } from '../../models/Bairro';

// Função assíncrona para listar todos os bairros
export async function listBairro(req: Request, res: Response) {
    try {
        // Busca todos os registros de bairros no banco de dados
        const bairros = await Bairro.find(); 

        // Responde com a lista de bairros encontrados
        res.json(bairros);
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);

        // Responde com o status 500 (Internal Server Error)
        res.sendStatus(500);
    }
}