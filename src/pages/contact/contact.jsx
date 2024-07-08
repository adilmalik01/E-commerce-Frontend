import Footer from "../../components/footer"

const Contact = () => {
    return (<>

        <div className="min-h-screen w-full flex justify-center items-center flex-col relative">
            <div className="bg-gray-100">
                {/* Hero Section */}
                <div className="bg-cover bg-center h-96" style={{ backgroundImage: "url('https://source.unsplash.com/1200x400/?contact')" }}>
                    <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
                    </div>
                </div>

                <div className="container mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
                    <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
                    <p className="text-gray-700 mb-4 text-center">
                        We're here to help and answer any question you might have. We look forward to hearing from you 🙂
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" rows="4" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    Send Message
                                </button>
                            </div>
                        </form>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold">Email</h3>
                                <p className="text-gray-700">madilsmit6@gmail.com</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Phone</h3>
                                <p className="text-gray-700">+92 3102739843</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Address</h3>
                                <p className="text-gray-700">Gulshan e Malir, Shah Faisal Colony, Karachi, </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Working Hours</h3>
                                <p className="text-gray-700">Mon - Fri: 9 AM - 6 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Location Map */}
                    <div className="mt-12">
                        <h2 className="text-3xl font-bold mb-4 text-center">Our Location</h2>
                        <div className="w-full h-64 bg-gray-200 rounded-md shadow-md overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d362.90097752531216!2d67.18133685616839!3d24.877557690124327!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d24.8775929!2d67.1813382!5e0!3m2!1sen!2s!4v1717192401770!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                allowFullScreen=""
                                loading="lazy"
                                className="border-0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    </>);
}

export default Contact;