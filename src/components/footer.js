import { OpeningTime } from "./contact";

function Footer(){
return (
<footer class="p-2 text-center text-gray-400 flex justify-center bg-[#f4f4f4]">
    <div>
        <div class="flex flex-wrap gap-5 max-w-xl text-left">
            <ul>
                <p class="font-bold text-2xl text-black">Kontakt</p>
                <li>
                    <span className="font-bold">Adres:</span> Polna 175, 60-535 Poznań
                </li>
                <li>
                    <span className="font-bold">Telefon:</span> +48 669 997 112
                </li>
            </ul>
        <ul>

            <OpeningTime pStyle="font-bold text-2xl text-black" />
        </ul>
        </div>
        <div class="mt-5">
            <p class="font-bold">
                Copyright Anthony Cubeth 2021
            </p>
            <p>Design and project by <a href="https://maciejka.netlify.app">Maciejka</a></p>
        </div>
    </div>
</footer>
);
}
export default Footer;