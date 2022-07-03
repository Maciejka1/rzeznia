import saunaOutsideGallery from '../img/pic1.webp'
import maciekuser from '../img/user-review-icon.webp'
import maniekuser from '../img/user-icon.webp'
import React from 'react'
import { Link } from 'react-router-dom'
import saunaInside from '../img/sauna-inside-picture-gallery.webp'
import saunaOutside from '../img/sauna-picture-gallery.webp'
import stawOutside from '../img/258606752_610664313689499_8898527723351827870_n.webp'
import jacuzziPic from '../img/jacuzzi-picture-gallery.webp'
import jacuzziOutside from '../img/jacuzzi-gallery.webp'
import jacuzziDziki from '../img/dziki.webp'
import {motion} from 'framer-motion'
import {useEffect} from 'react'
function Main() {
    useEffect(() => {
        document.title = "Dziki staw - Sauna w Olkuszu";   
    }, [])
return (
<motion.div className="App bg-[#f4f4f4] font-raleway"
initial={{opacity: 0}}
animate={{opacity: 1, transition: {duration: 2}}}
exit={{opacity: 0}}
>
  <main className="max-w-7xl mx-auto p-2">
    <section>
        <div className="mt-20 md:mt-48 lg:flex justify-evenly">
            <div className="mb-5">
                <h1 className="text-6xl md:text-8xl font-bold">
                    <span className="text-green-300 ">Najbardziej</span><br/>unikatowe<br/> miejsce w <span className="text-green-300">Olkuszu</span>
                </h1>
                <p className="text-xl md:text-xl my-5 font-light delay">Sauna na zewnątrz<br/> wprowadza niezwykłą atmosferę.</p>
                <a href="/#gallery" className="flex items-center font-semibold text-lg w-60">
                    <p className="z-10">Dowiedz się więcej</p>
                    <div className="w-20 h-20 rounded-full bg-white -ml-5 flex justify-center items-center">
                      <i className="fas fa-arrow-right bounce-animation"></i>
                    </div>
                </a>
            </div>
            <div className="relative max-w-2xl">
                <img src={saunaOutsideGallery} className="w-full rounded" alt="dziki staw outside"/>
            </div>
        </div>
    </section>
    <section className="pt-20 relative" id="gallery">
        <p className="font-bold text-5xl mb-5" >
            <span className="text-green-300" >Opinie </span>klientów
        </p>
        <div className="flex flex-col gap-5 md:flex-row justify-between">
            <div className="max-w-xl bg-white p-5 rounded-xl">
                <div className="flex gap-2 items-center">
                    <img src={maciekuser} className="w-16 h-16" alt="user"/>
                    <h2 className="text-xl">Maciek
                        <p className="text-sm text-gray-600">Lokalny przewodnik · 17 październik 2021</p>
                    </h2>
                </div>
                <span className="text-yellow-300 text-xl">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </span>
                <p>
                    Niesamowite miejsce do spędzenia wieczoru z przyjaciółmi.
                    Jestem saunowiczem od zawsze jednak jeszcze nigdy nie spotkałem się z takim czymś, mianowicie sauna jest na dworze co daje niesamowite orzeźwienie. Zdecydowanie polecam chociaż przyjść raz dla próby.
                </p>
            </div>
            <div className="max-w-xl bg-white p-5 rounded-xl">
                <div className="flex gap-2 items-center">
                    <img src={maniekuser} className="w-16 h-16" alt="user"/>
                    <h2 className="text-xl">Mariusz
                        <p className="text-sm text-gray-600">Lokalny przewodnik · 16 lipca 2021</p>
                    </h2>
                </div>
                <span className="text-yellow-300 text-xl">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </span>
                <p>Wspaniałe miejsce do odpoczynku, takiego totalnego relaksu.
                    Na uboczu Olkusza przy lesie, w saunie zmieści się 10 osób, jest również jacuzzi lub prysznic balia do schładzania.
                    Jest możliwość usmażyć kiełbaskę przy ognisku, las i jeziorko na widoku za płotem.</p>
            </div>
        </div>
        <a href="https://www.google.pl/maps/place/Dziki+Staw+Sauna&Jacuzzi/@50.2909234,19.5373074,17z/data=!4m7!3m6!1s0x4716e346b36125e3:0x12b76741264740a!8m2!3d50.2908115!4d19.5395798!9m1!1b1" target="blank" className="absolute right-0">Zobacz wszystkie opinie <i className="fas fa-arrow-right"></i></a>
    </section>
<p className="font-bold text-5xl mt-20"><span className="text-green-300">
    Zobacz</span> galerię
</p>

<div className="max-w-7xl mx-auto p-2">
    <section className="mt-10">
        <div className="gallery-grid sm:grid">
            <div className="vertical">
                <img src={saunaInside} alt="sauna inside " />
            </div>
            <div className="vertical">
                <img src={saunaOutside} alt="sauna outside" />
            </div>
            <div className="horizontal">
                <img src={stawOutside} alt="dziki staw outside" />
            </div>
        </div>
        <div className="sm:grid">
            <div className="vertical">
                <img src={jacuzziPic} alt="sauna inside " />
            </div>
            <div class="vertical">
                <img src={jacuzziOutside} alt="sauna outside" />
            </div>
            <div class="horizontal">
                <img src={jacuzziDziki} className="md:w-[50%]" alt="dziki staw outside" />
            </div>
        </div>
        <p className="text-2xl mt-10 mb-5 font-bold"><span className="text-green-300">Gotowy</span> na relaks? Zobacz cennik lub skontaktuj się z nami!</p>
        <div className="flex gap-2">
            <Link to="/kontakt">
                <p className="text-center w-40 bg-green-300 text-white text-xl p-2 rounded-full transition-all hover:bg-green-400">
                    Kontakt
                </p>
            </Link>
            <Link to="/cennik">
                <p className="text-center border-2 border-green-300 w-40 text-xl p-2 rounded-full transition-all hover:text-gray-900 hover:border-green-500 text-gray-500 mb-40">
                    Cennik
                </p>
            </Link>
        </div>
    </section>
</div>
</main>
</motion.div>
);
}
export default Main;