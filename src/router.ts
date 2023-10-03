// Importa o Router do Express e as funções relacionadas aos casos de uso de endereços, cidades e bairros.
import { Router } from 'express';

import { listEndereco } from './app/useCases/endereco/listEndereco'; // Importa a função para listar endereços
import { createEndereco} from './app/useCases/endereco/createEndereco'; // Importa a função para criar endereços

import { listCidade} from './app/useCases/cidade/listCidade'; // Importa a função para listar cidades
import { createCidade } from './app/useCases/cidade/createCidade'; // Importa a função para criar cidades

import { listBairro} from './app/useCases/bairro/listBairro'; // Importa a função para listar bairros
import { createBairro} from './app/useCases/bairro/createBairro'; // Importa a função para criar bairros

// Exporta o roteador para que possamos usá-lo em outros lugares do seu aplicativo.
export const router = Router();

// Define várias rotas usando o Router. 
// Cada rota tem um método HTTP associado (GET para listagem e POST para criação) e um manipulador de rota correspondente.

router.get('/enderecos', listEndereco); // Rota para listar endereços
router.post('/endereco', createEndereco); // Rota para criar endereços

router.get('/bairros', listBairro); // Rota para listar bairros
router.post('/bairro', createBairro); // Rota para criar bairros

router.get('/cidades', listCidade); // Rota para listar cidades
router.post('/cidade', createCidade); // Rota para criar cidades