import PricesTile from './pricesTile'
import {motion} from 'framer-motion'
import {useEffect} from 'react'
function Prices(){
useEffect(() => {
    document.title = "Rzeźnia - Cennik";   
}, []);
    return(
<motion.div class="bg-[#f4f4f4] font-raleway"
initial={{opacity: 0}}
animate={{opacity: 1, transition: {duration: 2}}}
exit={{opacity: 0}}
>
    <main class="max-w-7xl mx-auto p-2 ">
        <section>
            <h2 className="mt-40 mb-5 font-bold text-5xl md:text-7xl"><span class="text-red-500">Towary </span>
             dostępne</h2>
            <div className="flex flex-col md:flex-row gap-3 ">
                <PricesTile
                title='Oferty'
                prices={[
                    {
                        title: "Wołowina elektroakustyczna",
                        price: 45 + "zł/kg"
                    },
                    {
                        title: "Wieprzowina fotonowa",
                        price: 39 + "zł/kg"
                    },
                    {
                        title: "Baranek Cubeth (poświęcony)",
                        price: 999 + "zł/sztuka"
                    }
                ]}/>
                <PricesTile
                title='Specjalne oferty'
                prices={[
                    {
                        title: "Mięso psie (limitowana edycja NFT)",
                        price: "cena uzgadniana z Radą Damczyka"
                    },
                    {
                        title:"Transcendentalny Boczek - Każdy plaster poddany 33-godzinnej medytacji przy dźwiękach śpiewu wielorybów ",
                        price: "69 zł/100g "
                    }
                ]}/>
            </div>
        </section>
        <section>
            <h2 className="mt-20 mb-5 font-bold text-5xl md:text-7xl"><span class="text-red-500">Inne </span>usługi</h2>
            <div className="flex flex-col md:flex-row gap-3">
                <PricesTile
                title='💀 USŁUGI EKSTRA'
                prices={[
                    {
                        title: "Święcenie baranka",
                        price: 399 + "zł"
                    },
                    {
                        title: "Plebania Damczyka",
                        price: 12
                    },
                    {
                        title: "Mięsna Ceremonia Pogrzebowa - Kremacja w wędzarni (prochy w eleganckim słoiku), Ostatnie pożegnanie Twojego ulubionego kawałka mięsa   ",
                        price: "1333 zł"
                    },
                    {
                        title: "Kurs survivalowy - Jak przetrwać apokalipsę żywiąc się tylko klientami konkurencji  ",
                        price: "999 zł za weekend"
                    }
                ]}/>
                </div>
        </section>
        <section>
            <h2 className="mt-20 mb-5 font-bold text-5xl md:text-7xl"><span class="text-red-500">VIP </span></h2>
            <div className="flex flex-col md:flex-row gap-3">
                <PricesTile
                title='🔞 USŁUGI VIP'
                prices={[
                    {
                        title: "Mięsna Adopcja baranka -  Możliwość wychowania świni lub cielaka jako własnego potomka  - Roczne świadectwa szkolne i zdjęcia rodzinne  - Uroczysty rozbiór na 18-te urodziny  ",
                        price: "cena: twoje dziecko"
                    },
                    {
                        title: "Ludzkie BBQ",
                        price: "cena za kg jak za wołowinę wagyu"
                    }
                ]}/>
                </div>
        </section>
    </main>
</motion.div>
    );
}
export default Prices;