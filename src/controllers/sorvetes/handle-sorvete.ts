import { Prisma, PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient()

interface query{
    lucro: number
    nome: string
    preco: number
}

class Sorvete{
    async createSorvete(req: Request<query>, res: Response) {
        try {
          const lucro = parseFloat(req.query.lucro as string);
          const nome = req.query.nome as string;
          const preco = parseFloat(req.query.preco as string);
      
          const novoSorvete = await prisma.sorvete.create({
            data: {
              lucro: lucro,
              nome: nome,
              preco: preco,
            }
          });
          res.status(201).json(novoSorvete); 
        }catch(error){
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if(error.code == 'P2002'){
                    console.error('Erro do Prisma: Violação de restrição única no campo `nome`');
                    res.status(400).json({ error: 'Já existe um sorvete com o mesmo nome. Escolha um nome diferente.' });
                }
            }
        }
    }

    async deleteSorvete(req: Request, res: Response){
      try {
        const id = parseInt(req.query.id as string)
        const deleteSorvete = await prisma.sorvete.delete({
          where:{
            id: id,
          }
        })
        res.status(201).json(deleteSorvete); 
      }catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          res.json({ error: error.message });
        }
        res.status(400)
      }
    }

    async getSorvetes(req: Request, res:Response){
      try{
        const sorvetes = await prisma.sorvete.findMany()
        res.status(200).json(sorvetes)
      }catch(error){
        res.status(400).json({ error: 'Erro ao encontrar sorvetes no banco de dados' });
      }
      
    }

    async updateSorvete(req: Request, res: Response){
      try{
        const id = parseInt(req.query.id as string)
        const lucro = parseFloat(req.query.lucro as string);
        const nome = req.query.nome as string;
        const preco = parseFloat(req.query.preco as string);
        const updatedSorvete = await prisma.sorvete.update({
          where:{
            id: id
          },
          data:{
            nome:nome,
            lucro:lucro,
            preco:preco,
          }
        })
        res.status(200).json(updatedSorvete)
      }catch(error){
        res.status(400).json({ error: 'Erro ao editar sorvete!' });
      }
    }
}




export default Sorvete