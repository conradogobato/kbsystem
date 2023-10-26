import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient()

class Funcionarios{
    async createFunc(req: Request, res: Response){
        try{
            const cpf = req.query.cpf as string
            const nome = req.query.nome as string
            const email = req.query.email as string
            const telefone = req.query.telefone as string
            const NewFuncionario = await prisma.funcionario.create({
                data:{
                    cpf: cpf,
                    nome: nome,
                    email: email,
                    telefone:telefone,
                }
            })
            res.status(201).json(NewFuncionario)
        }catch(error){
            res.status(404).json({error: error})
        }
    }
}

export default Funcionarios 