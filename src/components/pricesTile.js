import {Link} from 'react-router-dom'
export default function PricesTile(props){
    let splitTitle = props.title.split(" ")
    return(
    <div className="md:w-1/3 max-w-sm bg-white p-4 rounded-2xl">
        <h2 className="mb-5 font-bold text-4xl md:text-5xl">
            <span className="text-red-500">{`${splitTitle[0]} `}</span>
            {splitTitle.slice(1).join(" ")}
        </h2>
            <ul class="text-2xl">
                {props.prices.map(prop => {
                    return(
                        <li class='pb-5'>
                            {prop.title} - <span className="font-semibold">{prop.price}</span>
                        </li>
                    )
                })}
            </ul>
        <Link to="/kontakt">
            <p className="mt-20 bg-red-500 text-white text-xl p-2 rounded-full w-full transition-all hover:bg-red-600 no-underline text-center">
                Kontakt
            </p>
        </Link>
        <Link to="/informacje">
            <p className="text-gray-500">
                Dowiedz się więcej
            </p>
        </Link>
    </div>
    )
}