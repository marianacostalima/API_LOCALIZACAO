// Importa o modelo e o esquema (Schema) do Mongoose
import { model, Schema } from 'mongoose';

// Define o esquema para o modelo de Cidade
export const Cidade = model('Cidade', new Schema({
    // Define o campo 'name' como uma string, obrigatória (required)
    nome: {
        type: String,      // Tipo do campo: String
        required: true,    // Campo obrigatório (não pode ser vazio)
    },
    // Define o campo 'state' como uma string, obrigatória (required)
    estado: {
        type: String,      // Tipo do campo: String
        required: true,    // Campo obrigatório (não pode ser vazio)
    }
}));