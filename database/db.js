import mongoose from 'mongoose';

const Connection=()=>{
    const DB_URI="mongodb://utkarsh:Bhargava2305@ac-oznchwv-shard-00-00.gjsdzfh.mongodb.net:27017,ac-oznchwv-shard-00-01.gjsdzfh.mongodb.net:27017,ac-oznchwv-shard-00-02.gjsdzfh.mongodb.net:27017/?ssl=true&replicaSet=atlas-aterjh-shard-0&authSource=admin&retryWrites=true&w=majority";
    try{
      mongoose.connect(DB_URI,{useNewUrlParser:true});
      mongoose.set('strictQuery', false);
      console.log('Database connected sucessfully')
    } catch(error){
        console.log('Error while connecting to database',error.message)
    }
}
export default Connection;



