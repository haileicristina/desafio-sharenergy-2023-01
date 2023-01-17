import mongoose from '../database/mongoConnect';
import { model, Document } from 'mongoose'
import bcrypt from 'bcrypt';


export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    encrypPassword(password: string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
};
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true  
    },
    
    email: {
        type: String,  
        unique: true,         
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
   
    
});

UserSchema.methods.encrypPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

UserSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, password);
};

export default model<IUser>('User', UserSchema);
