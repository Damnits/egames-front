
//CA 1.1 Cadastro deve ter os campos nome de usuário (obrigatório), CPF(obrigatório, não permitir cadastros iguais), email(obrigatório,  não permitir iguais), senha(obrigatório, com min de 8 caracteres) e além dos botões para cadastrar.
export class Usuario{
  id?: number;
  nome?: string;
  cpf?: string;
  email?: string;
  senha?: string;
}
