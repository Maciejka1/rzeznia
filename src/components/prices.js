import PricesTile from './pricesTile'
import {motion} from 'framer-motion'
import {useEffect} from 'react'
function Prices(){
useEffect(() => {
    document.title = "Dziki staw - Cennik";   
}, []);
    return(
<motion.div class="bg-[#f4f4f4] font-raleway"
initial={{opacity: 0}}
animate={{opacity: 1, transition: {duration: 2}}}
exit={{opacity: 0}}
>
    <main class="max-w-7xl mx-auto p-2 ">
        <section>
            <h2 className="mt-40 mb-5 font-bold text-5xl md:text-7xl"><span class="text-green-300">Cennik </span>sauny</h2>
            <div className="flex flex-col md:flex-row gap-3 ">
                <PricesTile
                title='Karnet na wejścia'
                prices={[
                    {
                        title: "Wejście pojedyńcze",
                        price: 15 + "zł"
                    },
                    {
                        title: "3 wejścia",
                        price: 45.99 + "zł"
                    },
                    {
                        title: "6 wejść",
                        price: 59.99 + "zł"
                    }
                ]}/>
                <PricesTile
                title='Wynajem na wyłączność'
                prices={[
                    {
                        title: "1 godzina",
                        price: 79.99 + "zł"
                    },
                    {
                        title: "2 godziny",
                        price: 149.99 + "zł"
                    },
                    {
                        title: "Każda kolejna godzina",
                        price: 50 + "zł"
                    }
                ]}/>
            </div>
        </section>
        <section>
            <h2 className="mt-20 mb-5 font-bold text-5xl md:text-7xl"><span class="text-green-300">Inne </span>usługi</h2>
            <div className="flex flex-col md:flex-row gap-3">
                <PricesTile
                title='Dodatkowe usługi'
                prices={[
                    {
                        title: "Olejek zapachowy do sauny",
                        price: 10 + "zł"
                    },
                    {
                        title: "Wynajem ręcznika",
                        price: 10 + "zł"
                    },
                ]}/>
                </div>
        </section>
    </main>
</motion.div>
    );
}
export default Prices;