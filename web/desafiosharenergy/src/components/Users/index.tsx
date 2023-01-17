import { useEffect, useState } from "react";

import { Text } from "../Text";




 interface FoundUser {   
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

 
 
const Users = () => {

    const [users, setUsers]= useState<FoundUser[]>([]); 

   

    const getUser = async () => {
      const resp = await fetch('https://randomuser.me/api/')
      const users = await resp.json()
      setUsers(users.results)
      console.log(users.results)
     }

    useEffect(() => {           
      getUser()
    },[]);
        
  

    return(
      
      <>
         
       <section>
        {users.map((user) => {
          const {
            name: {title, first, last},
            email,
            login:{uuid, username},
            dob:{age},
            picture: {large},
          } = user

          return(
            
            <div className='flex items-center'key={uuid}> 
             <a href='' className='relative rounded-lg overflow-hidden'>             
              <img className='p-3 bg-gradient-to-r from-red-900
               to-orange-900 rounded-full' src={large} alt={first} />  
                <Text size='sm'className='text-gray-100 mt-2 pt-20'>            
              <h3>{title}. <strong>{first} </strong>{last}</h3>             
              <strong>{username}</strong>             
              <p>{age} anos</p>               
              <span>{email}</span>
              </Text>
            </a>
            </div>
           
          )
        })}
       </section>
      </>
    )
}
export default Users