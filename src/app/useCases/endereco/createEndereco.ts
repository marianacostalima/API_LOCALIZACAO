// Importa os tipos Request e Response do Express e o modelo Address
import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';

// Função assíncrona para criar um novo endereço
export async function createEndereco(req: Request, res: Response) {
    try {
        // Extrai informações do corpo da requisição
        const { nome, numero, complemento, bairro, cidade } = req.body;

        // Cria um novo objeto Address usando o modelo Address
        const endereco = await Endereco.create({
            nome,
            numero,
            complemento,
            bairro,
            cidade
        });

        // Responde com o novo endereço criado e o status 201 (Created)
        res.status(201).json(endereco);
    } catch (error) {
        // Em caso de erro, loga o erro no console
        console.log(error);

        // Responde com o status 500 (Internal Server Error)
        res.sendStatus(500);
    }
}