import { Route, Routes} from 'react-router-dom'
import SignUp from './SignUp.tsx'
import Calculator from './Calculator.tsx'

function Ruta1() {
    return (
        <Routes>
            <Route path ='/signup' element={<SignUp />} />
            <Route path = '/calculadora' element={<Calculator />} />
        </Routes>
    
    )
}

export default Ruta1;