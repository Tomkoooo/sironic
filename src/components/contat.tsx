// ContactComponent.jsx

const ContactComponent = () => {
  return (
    <div id="kapcsolat" className="min-h-screen py-10 flex-col flex items-center justify-center">
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
            <form className="space-y-6">
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
              <button type="submit" className="btn btn-primary">
                Küldés
              </button>
            </form>
          </div>

          {/* Map and Contact Info Section */}
          <div className="w-full lg:w-1/2">
            {/* Map */}
            <div className="mb-6 h-64 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d144.9537353153167!3d-37.81627997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1697048322679!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eiffel Tower Location"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <p className="text-gray-800 font-semibold">
                Eiffel torony
                <br />
                Av. Gustave Eiffel, 75007 Paris, Franciaország
                <br />
                4,7 ★★★★★ 423 vélemény
                <br />
                <a href="#" className="text-primary hover:underline">
                  Nagyobb térkép megtekintése
                </a>
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-primary">📞</span>
                  <a href="tel:+021234567890" className="text-gray-600 hover:text-primary">
                    +02 1234567890
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✉️</span>
                  <a href="mailto:demo@gmail.com" className="text-gray-600 hover:text-primary">
                    demo@gmail.com
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