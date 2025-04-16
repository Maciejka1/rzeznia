import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Rytualy() {
  useEffect(() => {
    document.title = "Rzeznia";
  }, []);

  return (
    <motion.div
      className="bg-[#f4f4f4] font-raleway min-h-screen p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      exit={{ opacity: 0 }}
    >
      <main className="max-w-7xl mx-auto">
        <section className="mt-10">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-8">
            Historia <br />
            Rzeźnika Anthony Cubeth
          </h1>

          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
            <h2 className="text-4xl font-bold text-red-500 mb-4">
              Rozdział I: Zakazana Miłość Między Stołem a Ubojnią
            </h2>
            <p className="text-xl mb-4">
              Juleczka, najsłodsza owieczka w Gospodarstwie Rolnym Elijmy Music, od zawsze wyróżniała się niepokorną duszą. 
              Gdy inne baranki bezmyślnie skubały trawę, ona marzyła o czymś więcej – o wolności, pasji… i mrocznym uścisku rzeźnika.
            </p>
            <p className="text-xl mb-4">
              Anthony Cubeth, właściciel Rzeźni Anthony Cubeth, był człowiekiem twardym jak mielonka w lodówce. Jego dłonie znały wagę mięsa, a serce – tylko zimne kalkulacje. 
              Aż do dnia, gdy ujrzał Juleczkę na targu, patrzącą na niego wilgotnymi oczami, które szeptały: <span className="italic">"Zamień swoją tasak na czułość"</span>.
            </p>
            <p className="text-xl">
              Ich romans rozkwitł w cieniu wędzarni. Spotykali się potajemnie: ona – owijając się w folię spożywczą, on – szepcząc <span className="italic">"będziesz najpiękniejszym gulaszem"</span> z drżeniem w głosie. 
              Niestety, ich miłość miała termin ważności – wyznaczony przez harmonogram produkcji kabanosów.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
            <h2 className="text-4xl font-bold text-red-500 mb-4">
              Rozdział II: Krwawa Kolaboracja
            </h2>
            <p className="text-xl mb-4">
              Gdy wieść o romansie dotarła do Fabryki Kabanosów <span className="font-bold">"Stambrowski"</span>, prezes Julia Stambrowska wpadła na genialny pomysł:
            </p>
            <blockquote className="border-l-4 border-red-500 pl-4 text-xl mb-4">
              "Wykorzystajmy tę miłość! Juleczka stanie się twarzą nowej linii Premium Love Kabanosy – z nutą desperacji i aromatem zakazanego uczucia!"
            </blockquote>
            <p className="text-xl mb-4">
              Do kooperacji dołączyli:
              <br /><span className="font-bold">Gospodarstwo Elijmy Music</span> – dostarczające ekologicznie wychowane owce,
              <br /><span className="font-bold">Restauracja Ha Noi</span> – która w zamian za mięso Juleczki otrzymała partię psów z "nadwyżki" (marketingowo nazwaną <span className="italic">"Azjatyckie Smaki Wolności"</span>),
              <br /><span className="font-bold">Ksiądz Damczyk</span> – który poświęcił cały projekt, szepcząc <span className="italic">"10… 12… 14… amen"</span> nad taśmą produkcyjną.
            </p>
            <div className="bg-gray-100 rounded p-4">
              <h3 className="text-2xl font-bold mb-2">Strona 2: Biznesowe Podteksty</h3>
              <ol className="list-decimal ml-6 text-xl">
                <li className="mb-3">
                  <span className="font-bold text-red-500">"Stambrowski"</span> – Kabanosy z Duszą (i Historią)
                  <p className="ml-4">
                    Nowa seria <span className="italic">"Juleczka’s Love Edition"</span> zawiera:
                    <br />50% więcej łez (solonych według tradycyjnej receptury),
                    <br />Hologram Anthonego – po podgrzaniu widać, jak całuje owczą nóżkę,
                    <br />Certyfikat autentyczności z podpisem Księdza Damczyka.
                  </p>
                </li>
                <li className="mb-3">
                  <span className="font-bold text-red-500">Ha Noi</span> – Smak Wschodu, Zapach Zachodu
                  <p className="ml-4">
                    Restauracja wprowadziła specjalne danie: <span className="italic">"Zupa z Juleczki po wietnamsku"</span> (z dodatkiem psiego mięsa – bo miłość nie zna granic gatunków).
                  </p>
                </li>
                <li>
                  <span className="font-bold text-red-500">Gospodarstwo Elijmy Music</span> – Hodowla z Pasją
                  <p className="ml-4">
                    Oferują teraz <span className="italic">"Weekendy z Owcą"</span> – atrakcja dla klientów VIP, którzy chcą:
                    <br />Pogłaskać przyszły kabanos,
                    <br />Usłyszeć prelekcję Anthonego o miłości i rozbiorze.
                  </p>
                </li>
              </ol>
            </div>
            <p className="text-xl mt-4">
              <span className="font-bold">Zakończenie: Happy End?</span>
              <br />
              Juleczka trafiła na taśmę, Anthony dostał kontrakt w TVN na program <span className="italic">"Prawdziwe Historie Mięsne"</span>, 
              a Ksiądz Damczyk otworzył stowarzyszenie <span className="italic">"Aniołki przy Kotle"</span>.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
            <h2 className="text-4xl font-bold text-red-500 mb-4">Morał</h2>
            <p className="text-xl">
              Miłość jest jak kabanos – bywa pikantna, czasem się łamie, ale zawsze kończy w czyichś ustach.
            </p>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
