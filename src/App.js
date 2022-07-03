import './App.css';
import Nav from './components/nav'
import Footer from './components/footer'
import {BrowserRouter as Router} from 'react-router-dom'
import LoadingAnimation from './loadingAnimation';
function App() {
return (
    <Router>
        <Nav />
            <LoadingAnimation />
        <Footer />
    </Router>
);
}

export default App;
