import { Router, Request, Response } from "express";
import Login from './controllers/auth';

const router = Router();


router.get('/', (req: Request,res: Response) => {
    // res.send('Docker++play Mongoose com MongoDB e node!!!')
    res.json({message: 'Oi Mongoose Router Aplication++ !!!'})
    });
//cria users
router.post(
    "/users",
     new Login().execute
);
//authentica 
router.post(
    "/authenticate",   
    new Login().auth
);
  

export{router};