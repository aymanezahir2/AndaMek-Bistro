
import { Form , ActionFunctionArgs } from "react-router-dom";
import { sendEmail } from "../constants";
import { Helmet } from "react-helmet-async";



export async  function action({request} : ActionFunctionArgs) {
    const formData = await request.formData();
    
    const $ = (params : string) => formData.get(params);

    sendEmail({
        date : $("date") + " | "  + $("hours"),
        name : $("firstname") as string,
        lastName : $("lastname") as string,
        email : $("email") as string,
        phone : $("phone") as string,
        nombrepersone : $("nombrepersone") as string,
    })
    return null;
}

export default function Contact() {

    return (
        <div style={{ paddingTop: "147px" }} className="">

            <Helmet>
                <title>AndalMek Bistro - Resérve</title>
            </Helmet>
            {/* overlay */}
            <div className="container">
                <h1 className="text-header-title mt-10">Réserve</h1>
                <Form method="POST" className=" w-max max-md:w-full my-10 rounded-3xl p-4 mx-auto shadow-lg bg-white">
                    <div className="flexBetween flex-row max-md:flexCol  gap-3">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-slate-500">Prenom</span>
                            </div>
                            <input type="text" required name="firstname" placeholder="(ex.) Ayman" className="inputNormal" />

                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-slate-500">Nom</span>
                            </div>
                            <input type="text" required name="lastname" placeholder="(ex.) Ezzahir" className="inputNormal" />

                        </label>
                    </div>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-slate-500">Email</span>
                        </div>
                        <input type="email" required name="email" placeholder="(ex.) aymaneezahir@outlook.fr" className="inputNormal" />

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-slate-500">Phone</span>
                        </div>
                        <input type="tel" required name="phone" placeholder="(ex.) +212772736458" className="inputNormal" />

                    </label>
                    <div className="divider"></div>
                    <div className="flexBetween flex-row max-md:flexCol gap-3">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-slate-500">Nombre des Persones</span>
                            </div>
                            <input type="number" required name="nombrepersone" placeholder="(ex.) 5" className="inputNormal" />

                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-slate-500">Date</span>
                            </div>
                            <input type="date" required name="date" placeholder="(ex.) Ezzahir" className="inputNormal" />

                        </label>
                        <label className="form-control flex-1 w-full">
                            <div className="label">
                                <span className="label-text text-slate-500">Hours</span>
                            </div>
                            <input type="time" required name="hours"  className="inputNormal" />

                        </label>
                    </div>
                    
                    <button className="btn btn-primary hover:bg-orangeone border-none block  mx-auto mt-10">Reserve</button>
                </Form>
            </div>
        </div>
    )
}