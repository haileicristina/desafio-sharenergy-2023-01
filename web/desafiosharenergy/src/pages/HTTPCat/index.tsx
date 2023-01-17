import { useEffect, useState } from "react";
import { Text } from "../../components/Text"
import Header from "../../components/Header"

//import { Link } from "react-router-dom";



const HTTPCat = () => {  
  const [cats, setCats]= useState([]); 

   

  const getCats = async () => {
    const resp = await fetch('https://http.cat/')
    const miau = await resp.json()
    setCats(miau.results)
    console.log("Miau", miau.results)
   }

  useEffect(() => {           
    getCats()
  },[]);
      

  return(
   <>
    <Header />
    
    <div className="h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <div>
         <div className="w-6 h-6 
        bg-gradient-to-r from-red-900 to-orange-900 rounded-full">
           <div className='flex items-center'key=''> 
             <a href='' className='relative rounded-lg overflow-hidden'>             
              <img className='p-3 bg-gradient-to-r from-red-900
               to-orange-900 rounded-full' src='' alt='' />  
                <Text size='sm'className='text-gray-100 mt-2 pt-20'>            
              <h3>CAT</h3>             
              <strong></strong>                     
              </Text>
            </a>
            </div>
         
        </div>
        </div>
      </div>
 
    </>
    
  )
  
}
export default HTTPCat