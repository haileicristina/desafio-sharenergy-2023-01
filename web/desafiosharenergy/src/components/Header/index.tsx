import { Heading } from "../Heading";
import { Text } from "../Text";


const Header = () => {
    return(
        <>
        <header className='flex items-center justify-around  bg-gray-600 pb-4'>
     
        <Heading size='md' className='mt-4'>
          Desafio Sharenergy
        </Heading>
        <Text size='md'className='text-gray-100 mt-1'>
         Random User Generator
        </Text>
        <Text size='md'className='text-gray-100 mt-1'>
        Random Dog
        </Text>
        <Text size='md'className='text-gray-100 mt-1'>
         HTTP Cat
        </Text>
        <Text size='md'className='text-gray-100 mt-1'>
        Lista de Clientes
        </Text>
     </header>
        </>
    )
}
export default  Header