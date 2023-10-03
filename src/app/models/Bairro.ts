// Importa o modelo e o esquema (Schema) do Mongoose
import { model, Schema } from 'mongoose';

// Define o esquema para o modelo de Bairro
export const Bairro = model('Bairro', new Schema({
    // Define o campo 'name' como uma string, obrigatória (required)
    nome: {
        type: String,      // Tipo do campo: String
        required: true,    // Campo obrigatório (não pode ser vazio)
    }
}));