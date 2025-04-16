import Prices from './components/prices'
import Main from './components/main'
import {Contact} from './components/contact'
import Info from './components/info'
import { Route, Routes, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Rytualy from './components/rytualy'

function LoadingAnimation(){
    const location = useLocation()
    return(
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/cennik" element={<Prices />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/informacje" element={<Info />} />
            <Route path="/rytualy" element={<Rytualy/>}/>
        </Routes>
    </AnimatePresence>
    )
}
export default LoadingAnimation