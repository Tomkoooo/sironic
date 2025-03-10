// ContactComponent.jsx

const ContactComponent = () => {

  const notWorking = () => {
    alert("A funkció jelenleg még nem elérhető. Kérjük próbálja meg később vagy hívjon fel minket - írjon nekünk emailt.");
  };

  return (
    <div
      id="kapcsolat"
      className="min-h-screen py-10 flex-col flex items-center justify-center"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 uppercase relative before:content-[''] before:block before:w-16 before:h-1 before:bg-primary before:mx-auto before:mt-2">
          Kapcsolat
        </h2>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <form className="space-y-6" onSubmit={(e)=>{e.preventDefault; notWorking()}}>
              <div>
                <input
                  type="text"
                  placeholder="Név"
                  className="input input-bordered w-full bg-transparent border-gray-300 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full bg-transparent border-gray-300 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Telefonszám"
                  className="input input-bordered w-full bg-transparent border-gray-300 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Üzenet"
                  className="textarea textarea-bordered w-full bg-transparent border-gray-300 focus:border-primary focus:outline-none h-32"
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={()=>(notWorking)}>
                Küldés
              </button>
            </form>
          </div>

          {/* Map and Contact Info Section */}
          <div className="w-full lg:w-1/2">
            {/* Map */}
            <div className="mb-6 h-64 w-full">

              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.458043198327!2d18.421408876042662!3d47.188046671154495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769f7a3018c45e9%3A0xb745b073c25245ca!2zU3rDqWtlc2ZlaMOpcnbDoXIsIEzDtnbDtmxkZSB1LiAyNCwgODAwMA!5e0!3m2!1shu!2shu!4v1741542277096!5m2!1shu!2shu"
                width="600"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cég telephely"
              ></iframe>
             
            </div>

            {/* Contact Info */}
            <div className="space-y-4 bg-base-100">
              <p className="text-gray-800   font-semibold">
                SIRONIC rendszerház
                <br />
               8000 Székesfehérvár, Lövölde utca 24
                <br />
                több mint 100 elégedett ügyfél.
                <br />
                <a href="https://maps.app.goo.gl/S41BHDov1xvFQ1NV7" className="text-primary hover:underline">
                  Nagyobb térkép megtekintése
                </a>
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-primary">📞</span>
                  <a
                    href="tel:+36702735532"
                    className="text-gray-600 hover:text-primary"
                  >
                    +36702735532
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✉️</span>
                  <a
                    href="mailto:hello@sironic.hu"
                    className="text-gray-600 hover:text-primary"
                  >
                    hello@sironic.hu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
