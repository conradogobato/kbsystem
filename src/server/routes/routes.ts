import { Request, Response, Router } from "express";
import Sorvete from "../../controllers/sorvetes/";
import  Funcionarios  from "../../controllers/funcionarios/";
import Services from "../../shared/services/"

const router = Router()
const sorvete = new Sorvete()
const funcionario = new Funcionarios()
const services = new Services()

// Rotas para sorvete
router.post('/create-sorvete/', sorvete.createSorvete)
router.delete('/delete-sorvete', sorvete.deleteSorvete)
router.get('/get-sorvete', sorvete.getSorvetes)
router.put('/modify-sorvete', sorvete.updateSorvete)

// Rotas para funcionários
router.post('/create-func', funcionario.createFunc)


// Rotas para services
router.post('/login', services.login)


export{ router }