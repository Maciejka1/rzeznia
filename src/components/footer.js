import { OpeningTime } from "./contact";

function Footer(){
return (
<footer class="p-2 text-center text-gray-400 flex justify-center bg-[#f4f4f4]">
    <div>
        <div class="flex flex-wrap gap-5 max-w-xl text-left">
            <ul>
                <p class="font-bold text-2xl text-black">Kontakt</p>
                <li>
                    <span class="font-bold">Adres:</span> 32-300 Olkusz ul. Pomorska 22
                </li>
                <li>
                    <span class="font-bold">Telefon:</span> +48 793 201 154
                </li>
                <li>
                    <span class="font-bold">Facebook: </span><a href="https://www.facebook.com/Dzikistawolkusz" target="blank">Dziki Staw Sauna&Jacuzzi</a>
                </li>
                <li>
                    <span class="font-bold">Instagram:</span> <a href="https://www.instagram.com/dzikistawolkusz/" target="blank">dzikistawolkusz</a>
                </li>
            </ul>
        <ul>

            <OpeningTime pStyle="font-bold text-2xl text-black" />
        </ul>
        </div>
        <div class="mt-5">
            <p class="font-bold">
                Copyright  Paweł Babiuch 2021
            </p>
            <p>Design and project by <a href="https://maciejka.netlify.app">Maciejka</a></p>
        </div>
    </div>
</footer>
);
}
export default Footer;