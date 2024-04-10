export default function Location() {
    return (
        <section className="container py-16 ">
            <div className="lg:flexBetween ">
                <div className="lg:w-1/2">
                    <h1 className="text-header">Notre Destination</h1>
                    <p className=" text-xl font-light text-center leading-9">
                        Découvrez notre restaurant au cœur de Meknès avec notre carte interactive ci-dessous. Plongez dans les rues animées de la Médina historique et rejoignez-nous pour une expérience culinaire authentique, où le charme andalou rencontre l'hospitalité marocaine. Laissez-vous guider vers une expérience inoubliable.
                    </p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6625.679113151201!2d-5.557074332891957!3d33.868025535766044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sma!4v1712528346208!5m2!1sen!2sma"
                    width={600}
                    height={450}
                    style={{ border: "1px solid #777" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="max-lg:mt-10"
                />

            </div>
        </section>
    )
}