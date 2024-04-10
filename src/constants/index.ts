import emailjs from "@emailjs/browser"


export const link: string[] = ["menu", "boissons", "specials", "réserve"];

export interface Recipe {
  name: string;
  image_url: string;
  description: string;
  prix: string;
  type?: string;
}

export const foodsHome: (Recipe & { genre: string })[] = [
  {
    name: "Couscous Végétarien",
    image_url: "/recipe/food/couscous.png",
    description: "Couscous délicieux avec des légumes frais.",
    prix: "55 MAD",
    genre: "Special",
    type: ""
  },
  {
    name: "Tagine de Légumes",
    description: "Tagine végétarien avec une variété de légumes frais.",
    image_url: "/recipe/food/tagine.png",
    prix: "55 MAD",
    genre: "Traditionnelle",
    type: "tagine"
  },
  {
    name: "Kebab de moutont",
    description: "Délicieux kebab de moutont mariné et grillé.",
    image_url: "/recipe/food/kebab.png",
    prix: "40 MAD",
    genre: "Classic",
    type: ""
  },
  {
    name: "Harira Traditionnelle",
    image_url: "/recipe/food/hrira.png",
    description: "Soupe chaude traditionnelle aux lentilles et aux épices.",
    prix: "40 MAD",
    genre: "Traditionnelle",
    type: "soupe"
  },
  {
    name: "Cheeseburger",
    description: "Délicieux cheeseburger, grillé à la perfection.",
    image_url: "/recipe/food/burger.png",
    prix: "50 MAD",
    genre: "Modern",
    type: "burger"
  }

]



interface dataEmail { date : string , nombrepersone : string, email: string, phone: string, name: string, lastName: string }
export async function sendEmail({date , nombrepersone , email , name , lastName , phone }: dataEmail) {
  const serviceID = "service_zeukki6";

  const templateID = "template_ecw7hsl";
  const publicKey = "7IFaO1MApKo8bcoX8";
  
  emailjs.init(publicKey);

  try {
    await emailjs.send(serviceID , templateID , {
      from_name : `${name} ${lastName}`,
      phone,
      date,
      nombrepersone,
      email,
  
    })
    return "send success"
  } catch (error) {
    console.error(error);
    
  }
}