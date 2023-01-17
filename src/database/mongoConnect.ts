import mongoose from 'mongoose';


const {  
    DB_MONGO_DATABASE,   
    DB_MONGO_HOSTNAME,
    DB_MONGO_PORT,
    MONGODB_URI,     
} = process.env;

mongoose.set('strictQuery',false);
mongoose.connect(
    `mongodb://${DB_MONGO_HOSTNAME}:${ DB_MONGO_PORT}/${DB_MONGO_DATABASE}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     
    },
    (err) =>{
      if(err) {
        console.log(err, 'MongoDB Fail!!!');
      }else {
        console.log('MongoDB Connect!!!');
      }
    }

);  
  
mongoose.Promise = global.Promise;
export default mongoose;

/*const mongoURI = process.env.MONGO_URI;

export default function mongoConnect(): void{
    if(mongoURI){
        mongoose.connect(
            mongoURI,
            {
              useNewUrlParser: true,
              useUnifiedTopology: true,
              useFindAndModify: false
            },() => console.log('Connected MongoDB!'))
    } else{
        console.log('Failed connection MongoDB!')
    }
/**/