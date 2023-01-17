import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Router, Request, Response } from "express";


function generateToken(params = {}){
    return jwt.sign( params, process.env.JWT_SECRET,
        {            
            expiresIn: 900, 
        })
}

class Login{

    async execute(req: Request, res: Response){       
        const {email} = req.body;
        try {

            if (await User.findOne({email}))
                return res.status(400).send({error: 'User already exists'});
                
            const user = await User.create(req.body);
            
            user.password = undefined;
            //POST
            res.status(201).send({user, token:generateToken({id:user.id})});
            

        }catch (error){
            return res.status(400).json({
                error: "Registration failed",
                message: error
            })
        }
    }

    async auth(req: Request, res: Response){ 
        const {email, password} = req.body;
        const user = await User.findOne({ email}).select('+password');

        if(!user)
            return res.status(400).send({error: 'User Not found'});
        
        if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({error: 'Invalid password'});

        user.password = undefined;
/*
      const token = jwt.sign(
        {
            id: user.id
        },
        process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: 900, //15 * 60
        })
    */    
        res.status(201).send({user, token:generateToken({id:user.id})});
      
       
    }  

   
}
export default Login;