// Importa os tipos Request e Response do Express e o modelo Address
import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco'; // Certifique-se de corrigir a importação do modelo

// Função assíncrona para listar todos os endereços
export async function listEndereco(req: Request, res: Response) {
    try {
        // Busca todos os registros de endereços no banco de dados
        const enderecos = await Endereco.find(); 

        // Responde com a lista de endereços encontrados
        res.json(enderecos);
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);

        // Responde com o status 500 (Internal Server Error)
        res.sendStatus(500);
    }
}