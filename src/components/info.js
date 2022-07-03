import {motion} from 'framer-motion'
import React from 'react'
import {useEffect} from 'react'
function Info(){
    useEffect(() => {
        document.title = "Dziki staw - Informacje";   
    }, [])
    return(
<motion.div class="bg-[#f4f4f4] font-raleway"
initial={{opacity: 0}}
animate={{opacity: 1, transition: {duration: 2}}}
exit={{opacity: 0}}
>
    <main class="max-w-7xl mx-auto p-2">
    <section class="mt-40">
       <h1 class="text-5xl md:text-7xl font-bold">
           <span class="text-green-300">Dodatkowe</span>
           <br/> informacje</h1>
        <div class="bg-white rounded-2xl p-5 max-w-2xl mt-10 mb-3">
           <p class="text-4xl font-bold "><span class="text-green-300">Kiedy </span>sauna jest otworzona?</p>
            <p class="text-xl max-w-xl">
                Sauna jest otworzona w okresie od września do maja w poniedziałki i środy od godziny 18:00 do 20:00, w razie zmian opublikujemy post na facebooku. 
            </p>
        </div>
        <div class="bg-white rounded-2xl p-5 max-w-2xl mt-10 mb-3">
           <p class="text-4xl font-bold "><span class="text-green-300">Karnet </span>na wejścia</p>
            <p class="text-xl max-w-xl">
                Karnet sześciu lub trzech wejść jest ważny przez <span class="font-bold">nieograniczony</span> czas. 
                Aby zakupić karnet prosimy napisać na <a href="https://www.facebook.com/Dzikistawolkusz">facebooku</a>.
            </p>
        </div>
        <div class="bg-white rounded-2xl p-5 max-w-2xl mt-10 mb-3">
           <p class="text-4xl font-bold"><span class="text-green-300 ">Wynajem </span>na wyłączność</p>
           <p class="text-xl max-w-xl">
               Na wyłączność można wynająć samą saunę, samo jacuzzi lub saunę i jacuzzi.Zapraszamy do kontaktu na facebooku lub numer telefonu 793 201 154.
           </p>
        </div>
        <div class="bg-white rounded-2xl p-5 max-w-2xl mt-10 mb-3">
           <p class="text-4xl font-bold"><span class="text-green-300">Przeciwskazania </span> korzystania z sauny</p>
           <p class="text-xl">Nie zaleca się korzystania z sauny podczas:</p>
                <ul class="list-disc ml-5 text-xl">
                    <li>Infekcji</li>
                    <li>Ostrych stanów astmy</li>
                    <li>Chorób serca i krążenia</li>
                    <li>Ostrych stanów zapalnych narządów wewnętrznych</li>
                    <li>Zakażenia</li>
                    <li>Nadczynności tarczycy</li>
                    <li>Guzów złośliwych</li>
                    <li>Chorób wenerycznych</li>
                    <li>Ciąży</li>
                    <li>Miesiączki</li>
                    <li>Epilepsji</li>
                    <li>Nie należy korzystać z sauny z pełnym żołądkiem</li>
                    <li>Nie należy korzystać z sauny gdy ma się podwyższoną temperaturą ciała</li>
                </ul>
        </div>
        </section>
</main>
        </motion.div>
   )   
}
export default Info