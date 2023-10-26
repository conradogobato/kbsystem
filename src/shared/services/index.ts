import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient()

class Services{
    async login(req:Request, res:Response){
        try{
            const cpf = req.query.cpf as string
            const func = await prisma.funcionario.findUnique({
                where:{
                    cpf: cpf
                }
            })
            res.status(200).json(func?.idFunc)
        }catch(error){
            res.status(404).json({error:error})
        }    
    }
}

export default Services