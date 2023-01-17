import { useEffect, useState } from "react";
import Users from "./components/Users";
import Header from "./components/Header";
import './styles/main.css';
//import HTTPCat from "./pages/HTTPCat";
import SignIn from "./pages/SignIn";
import HTTPCat from "./pages/HTTPCat";
//import { Link } from "react-router-dom";


interface IUser {   
  login:{
    uuid:string,
    username: string
  }
  picture: {
    large:string
  }
  name: {
    title: string,
    first: string,
    last:string,
  },
  email: string;
  userName: string;
  dob:{
    age:number;
  }
}


const App = () => {
  const [random, setRandom] = useState<IUser[]>([]);
  const [totalPage, setTotalPage] = useState(10);
 const [searchTerm, setSearchTerm]= useState('')
 const  [loading] = useState(true)

  const searchUser = async () => {
    const resp = await fetch('https://randomuser.me/api/')
    const users = await resp.json()
   setRandom(users.results)
    console.log(users.results)
   }

  useEffect(() => {           
    searchUser()
  },[]);

const pages = Math.ceil(random.length / totalPage)
  console.log("random", random)
  /*
  const random = useState<FoundUser []>([]);
  
  <div className="grid grid-cols-6 gap-6 mt-16">
  {
  random.map(item => <Users /> )   
  } 

</div>
 */
  return(
    <>
   <Header />
    
    {!!loading ? 
      <div className="h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      
       <div>
            <div className="flex justify-start items-end">
      <input className='rounded bg-gray-500'type='text' placeholder='Search...'
      onChange={e =>{setSearchTerm(e.target.value)}} />
      {random.filter((val) =>{
        if(searchTerm == ''){
          return val
        }else if(val.name.first.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
         val.email.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        val.login.username.toLowerCase()
        .includes(searchTerm.toLowerCase())){
          return val
        }
      }).map((search, key) => {
          const {
            name: {title, first, last},
            email,
            login:{uuid, username},
            dob:{age},
            picture: {large},
          } = search
          return <div key={search.login.uuid}>
            {search.name.first} {search.name.last}
            </div>})}
      </div>
         <div className="w-6 h-6 
        bg-gradient-to-r from-red-900 to-orange-900 rounded-full">
        
          <strong className="p-2">1</strong>
          <strong className="text-lg"> ...</strong>
         
        </div>
        </div>
        <div className=" bg-gray-600  justify-center h-screen 
        grid grid-cols-6 gap-6 mt-16 pt-5 px-10">       
         
           <Users />
          <Users />
          <Users />
          <Users />
          <Users />
          <Users /> 
                 
          
      </div>
      <div className=" bg-red-500  justify-center h-screen 
        grid grid-cols-6 gap-6 mt-16 pt-5 px-10">
       
          <Users />
          <Users />
          <Users />
          <Users />
          <Users />
          <Users />               
                 
      </div>
   
  </div>
    : <HTTPCat />}                   
    </>
  )
}
export default App