import React from 'react'
import {useEffect} from 'react'
import {motion} from 'framer-motion'
export function OpeningTime(props){
    let daysOfTheWeek = [
        {day: "Poniedziałek: ", isOpened: true},
        {day: "Wtorek: "},
        {day: "Środa: ", isOpened: true},
        {day: "Czwartek: "},
        {day: "Piątek: "},
        {day: "Sobota: "},
        {day: "Niedziela: "}
    ]
    return(
    <ul className={props.ulStyle}>
        <p className={props.pStyle}>Dni otwarcia</p>
        {daysOfTheWeek.map(dayProps => {
            return(
                <li>
                    <span className="font-bold">{dayProps.day}</span>
                    {dayProps.isOpened ? "18:00 - 20:00" : <i class="fas fa-times"></i>}
                </li>
            )
        })}
    </ul>
    )
    
}
export function Contact(){
useEffect(() => {
    document.title = "Dziki staw - Kontakt";   
}, []);
return(
<motion.div className="bg-[#f4f4f4] font-raleway"
initial={{opacity: 0}}
animate={{opacity: 1, transition: {duration: 2}}}
exit={{opacity: 0}}
>

<main className="max-w-7xl mx-auto p-2">
    <h2 className="font-bold text-5xl md:text-7xl mt-40 mb-10"><span class="text-green-300">Skontaktuj</span><br/>się z nami</h2>
    <section className="mb-32">
        <div className="bg-white w-full rounded-2xl flex flex-wrap  justify-between">
            <div>
                <ul className="p-5 text-xl">
                    <p className="font-bold text-3xl text-black">Kontakt</p>
                    <li>
                        <span className="font-bold">Adres:</span> 32-300 Olkusz ul. Pomorska 22
                    </li>
                    <li>
                        <span className="font-bold">Telefon:</span> +48 793 201 154
                    </li>
                    <li>
                        <span className="font-bold">Facebook: </span><a href="https://www.facebook.com/Dzikistawolkusz" target="blank">Dziki Staw Sauna&Jacuzzi</a>
                    </li>
                    <li>
                        <span className="font-bold">Instagram:</span> <a href="https://www.instagram.com/dzikistawolkusz/" target="blank">dzikistawolkusz</a>
                    </li>
                </ul>
                <OpeningTime ulStyle = "leading-8 text-xl p-5" pStyle = "font-bold text-3xl text-black" />
            </div>

            <iframe title="google maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.0538099346973!2d19.53730741595703!3d50.29092340672746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716e346b36125e3%3A0x12b76741264740a!2sDziki%20Staw%20Sauna%26Jacuzzi!5e0!3m2!1spl!2spl!4v1637155202787!5m2!1spl!2spl" allowfullscreen="" loading="lazy" className="rounded-r-2xl w-full h-96 md:w-1/2 md:h-auto"></iframe>
        </div>
    </section>
</main>
</motion.div>
);
}
