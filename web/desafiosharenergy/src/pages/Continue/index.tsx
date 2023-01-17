import { useEffect, useState } from "react";
import Users from "../../components/Users";
import Header from "../../components/Header"

//import { Link } from "react-router-dom";



const Continue = () => {
 
  const [totalPage, setTotalPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [isloading, setIsloading]=useState(true);



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
    
      <div className="h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <div>
         <div className="w-6 h-6 
        bg-gradient-to-r from-red-900 to-orange-900 rounded-full">
        
          <strong className="p-2">2</strong>
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
      <div className=" bg-gray-600  justify-center h-screen 
        grid grid-cols-6 gap-6 mt-16 pt-5 px-10">
       
          <Users />
          <Users />
          <Users />
          <Users />
          <Users />
          <Users />               
                 
      </div>
  </div>
 
    </>
  )
}
export default Continue