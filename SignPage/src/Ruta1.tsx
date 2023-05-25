import { Route, Routes} from 'react-router-dom'
import SignUp from './SignUp.tsx'
import Calculator from './Calculator.tsx'
import Login from './LoginPage.tsx'

function Ruta1() {
    return (
        <Routes>
            <Route path ='/signup' element={<SignUp />} />
            <Route path = '/calculadora' element={<Calculator />} />
            <Route path = '/login' element={<Login/>} />
        </Routes>
    
    )
}

export default Ruta1;