import {motion} from 'framer-motion'
import React from 'react'
import {useEffect} from 'react'
function Info(){
    useEffect(() => {
        document.title = "Rzeznia - Informacje";   
    }, [])
    return(
<motion.div class="bg-[#f4f4f4] font-raleway"
initial={{opacity: 0}}
animate={{opacity: 1, transition: {duration: 2}}}
exit={{opacity: 0}}
>
<main className="max-w-7xl mx-auto p-2">
    <section className="mt-40">
       <h1 className="text-5xl md:text-7xl font-bold">
           <span className="text-red-500">Krwawa</span>
           <br/> Praktyka</h1>
        <div className="bg-white rounded-2xl p-5 max-w-2xl mt-10 mb-3">
           <p className="text-4xl font-bold "><span className="text-red-500">Kiedy </span>rznie się zwierzęta?</p>
            <p className="text-xl max-w-xl">
                Rzeźnia działa <span className="font-bold">24/7/666</span>, ale rytualne rozbiory odbywają się tylko:<br/>
                - W piątki 13-tego podczas pełni<br/>
                - W urodziny Anthony'ego Cubetha (data ustalana przez radę Mrocznych Starszych)<br/>
                Śledźcie naszego TikToka @MroczniStarszyznioRzeźnicy!
            </p>
        </div>
        <div className="bg-white rounded-2xl p-5 max-w-2xl mt-10 mb-3">
           <p className="text-4xl font-bold "><span className="text-red-500">Karnet </span>krwawy</p>
            <p className="text-xl max-w-xl">
                Karnet na 6 lub 3 "sztuki bydła" ważny do:<br/>
                - Ostatniego tchnienia klienta<br/>
                - Apokalipsy zombie (która pierwsza)<br/>
                Zakup przez <a href="https://www.facebook.com/profile.php?id=100092718819647" className="text-red-500 underline">Messenger</a> z hasłem "Mięso jest prawdą!"
            </p>
        </div>
        <div className="bg-white rounded-2xl p-5 max-w-2xl mt-10 mb-3">
           <p className="text-4xl font-bold"><span className="text-red-500">Wynajem </span>do celów specjalnych</p>
           <p className="text-xl max-w-xl">
               Na wyłączność możesz wynająć:<br/>
               - Rzeźnię z księdzem Damczykiem (błogosławieństwo mięsa gratis!)<br/>
               - Maszynkę do mielenia "Satan's Kitchen"<br/>
               - Pakiet rytualny (theremin + neonowe świece)<br/>
               Tel. +48 666-M-I-E-S-O
           </p>
        </div>
        <div className="bg-white rounded-2xl p-5 max-w-2xl mt-10 mb-3">
           <p className="text-4xl font-bold"><span className="text-red-500">Przeciwskazania </span> do uczestnictwa</p>
           <p className="text-xl">Nie wchodź jeśli:</p>
                <ul className="list-disc ml-5 text-xl">
                    <li>Posiadasz sumienie</li>
                    <li>Jesteś weganinem (albo masz takiego w rodzinie)</li>
                    <li>Wierzysz w "prawa zwierząt"</li>
                    <li>Twoja dusza jest czystsza niż filet mignon</li>
                    <li>Masz alergię na krew, metal lub śmiech demonów</li>
                    <li>Jesteś w ciąży (chyba że chcesz "specjalny pakiet porodowy")</li>
                    <li>Przeszedłeś detoks od mięsa</li>
                    <li>Zarażenia się człowieczeństwem</li>
                    <li>Posiadasz dokument "Nie dotykać!" od Watykanu</li>
                </ul>
            <p className="mt-3 text-xl">
                P.S. Absolutnie <span className="font-bold">nie</span> przychodź z pełnym żołądkiem - u nas to uznajemy za osobistą obrazę!
            </p>
        </div>
</section>
</main>
        </motion.div>
   )   
}
export default Info