import { Request, Response, Router } from "express";
import Sorvete from "../../controllers/sorvetes/handle-sorvete";

const router = Router()
const sorvete = new Sorvete()

router.post('/create-sorvete/', sorvete.createSorvete)
router.delete('/delete-sorvete', sorvete.deleteSorvete)
router.get('/get-sorvete', sorvete.getSorvetes)
router.put('/modify-sorvete', sorvete.updateSorvete)


export{ router }