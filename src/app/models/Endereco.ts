// Importa o modelo e o esquema (Schema) do Mongoose
import { model, Schema } from 'mongoose';

// Define o esquema para o modelo de Endereço
export const Endereco = model('Endereco', new Schema({
    // Define o campo 'name' como uma string, obrigatória (required)
    name: {
        type: String,      // Tipo do campo: String
        required: true,    // Campo obrigatório (não pode ser vazio)
    },
    // Define o campo 'number' como uma string, obrigatória (required)
    numero: {
        type: String,      // Tipo do campo: String
        required: true,    // Campo obrigatório (não pode ser vazio)
    },
    // Define o campo 'adicional' como uma string, obrigatória (required)
    complemento: {
        type: String,      // Tipo do campo: String
        required: true,    // Campo obrigatório (não pode ser vazio)
    },
    // Define o campo 'bairro' como uma referência ao objeto Bairro associado ao endereço
    bairro: {
        type: Schema.Types.ObjectId,    // Tipo do campo: ObjectId (referência a outro objeto)
        required: true,                // Campo obrigatório (não pode ser vazio)
        ref: 'Bairro',                 // Referência ao modelo 'Bairro' (verifique se é válido no seu código)
    },
    // Define o campo 'cidade' como uma referência ao objeto Cidade associado ao endereço
    cidade: {
        type: Schema.Types.ObjectId,    // Tipo do campo: ObjectId (referência a outro objeto)
        required: true,                // Campo obrigatório (não pode ser vazio)
        ref: 'Cidade',                 // Referência ao modelo 'Cidade' (verifique se é válido no seu código)
    },
}));