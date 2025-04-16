import React from 'react'
import {useEffect} from 'react'
import {motion} from 'framer-motion'
export function OpeningTime(props){
    let daysOfTheWeek = [
        {day: "Poniedziałek: ", isOpened: true},
        {day: "Wtorek: ", isOpened: true},
        {day: "Środa: ", isOpened: true},
        {day: "Czwartek: ", isOpened: true},
        {day: "Piątek: ", isOpened: true},
        {day: "Sobota: ", isOpened: true},
        {day: "Niedziela: ", isOpened: true}
    ]
    return(
    <ul className={props.ulStyle}>
        <p className={props.pStyle}>Dni otwarcia</p>
        {daysOfTheWeek.map(dayProps => {
            return(
                <li>
                    <span className="font-bold">{dayProps.day}</span>
                    {dayProps.isOpened ? "12:00 - 20:00" : <i class="fas fa-times"></i>}
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
    <h2 className="font-bold text-5xl md:text-7xl mt-40 mb-10"><span class="text-red-500">Skontaktuj</span><br/>się z nami</h2>
    <section className="mb-32">
        <div className="bg-white w-full rounded-2xl flex flex-wrap  justify-between">
            <div>
                <ul className="p-5 text-xl">
                    <p className="font-bold text-3xl text-black">Kontakt</p>
                    <li>
                        <span className="font-bold">Adres:</span> Polna 175, 60-535 Poznań
                    </li>
                    <li>
                        <span className="font-bold">Telefon:</span> +48 669 997 112
                    </li>
                </ul>
                <OpeningTime ulStyle = "leading-8 text-xl p-5" pStyle = "font-bold text-3xl text-black" />
            </div>
            <div className="relative w-4/6  pb-[66.66%]">
      <iframe
        title="Google Map"
        src="https://maps.google.com/maps?width=600&height=400&hl=en&q=anthony%20cubet%20poznan&t=&z=17&ie=UTF8&iwloc=B&output=embed"
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        allowFullScreen
      ></iframe>

      <a
        href="https://map-embed.org"
        className="text-[2px] text-gray-500 absolute bottom-0 left-0 z-10 max-h-[10px] overflow-hidden"
      >
        map generator
      </a>
      <a
        href="https://sprunkly.org"
        className="text-[2px] text-gray-500 absolute bottom-0 left-0 z-10 max-h-[10px] overflow-hidden"
      >
        map generator
      </a>
    </div>
        </div>    
    </section>
</main>
</motion.div>
);
}
