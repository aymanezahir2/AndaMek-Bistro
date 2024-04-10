import { about_us } from "../../assets";
import { CiLocationOn } from "react-icons/ci";

export default function Page(){
    return (
        <div className="lg:flexBetween max-lg:flexCol my-5 py-10 rounded-xl bg-slate-200  max-lg:flex-col-reverse container gap-5"> 
            <img src={about_us} alt="photo" className="lg:w-1/2 rounded-3xl" />
            <div className="lg:w-1/2 text-center">
                <h1 className="font-header text-4xl text-orangeone">à propos</h1>
                <h3 className="font-second text-2xl my-3 text-redone">Meknes cuisine</h3>
            <p className=" font-light text-lg">Bienvenue chez <span className="font-header">AndalMek Bistro</span>, votre destination pour une cuisine andalouse authentique à Meknes. Avec notre passion pour les saveurs méditerranéennes et notre engagement envers des ingrédients frais et locaux, nous vous promettons une expérience culinaire exceptionnelle. Découvrez notre histoire et laissez-vous emporter en Andalousie à chaque repas.</p>
                <a className="btn-regular-orange mt-3 gap-3 capitalize flexBetween w-max mx-auto text-orangeone" href="/"><CiLocationOn size={35} /><p>notre desitination</p></a>
            </div>
        </div>
    )
}