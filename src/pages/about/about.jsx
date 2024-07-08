import Footer from "../../components/footer";

const About = () => {
  return (
    <>
      <div className="min-h-screen w-full flex relative justify-center flex-col items-center">
      <div className="bg-gray-100 mt-10">
   
      <div className="bg-cover bg-center h-96" style={{ backgroundSize:"cover", objectFit:"cover", backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661723002171-bf77d2215000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RvcmV8ZW58MHx8MHx8fDA%3D')" }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </div>

      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">UNIQLO</h2>
        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-bold">UNIQLO</span>, your number one source for all things fashion. We're dedicated to providing you the very best of fashion, with an emphasis on quality, customer service, and uniqueness.
        </p>
        <p className="text-gray-700 mb-4">
          Founded in [year] by Muhammad Adil Malik, <span className="font-bold">UNIQLO</span> has come a long way from its beginnings in a small shop. When Muhammad Adil Malik first started out, his passion for eco-friendly fashion drove him to start his own business.
        </p>
        <p className="text-gray-700 mb-4">
          We now serve customers all over the world, and are thrilled that we're able to turn our passion into our own website.
        </p>
        <p className="text-gray-700 mb-4">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p className="text-gray-700 mb-4">
          Sincerely,<br />
          Muhammad Adil Malik, Founder
        </p>

       
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src="https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D" alt="Our Store" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVsZWN0cmljJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D" alt="Our Products" className="w-full h-64 object-cover rounded-lg shadow-md" />
        </div>

       
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/448388600_842442587935000_8079931020895532197_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGjhEZZXqZNPykhLjNvsGwOCM1qIEanKt8IzWogRqcq3_QmUcYIOVyiKh6iakT4n2_tTLj_3VEsJs8l079--p54&_nc_ohc=ZWpWVaFLz7UQ7kNvgGg0Ym5&_nc_ht=scontent.fkhi8-1.fna&oh=00_AYC2TZ3ucMma-VxkRlV1BIuHK_FfPlVg44-zbbrmV8jHSA&oe=66763263" alt="Team Member 3" className="w-32 h-32 object-cover rounded-full mx-auto mb-2 shadow-md"/>
              <h3 className="text-xl font-semibold">Team Member 1</h3>
              <p className="text-gray-600">Position</p>
            </div>
            <div className="text-center">
              <img src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/448388600_842442587935000_8079931020895532197_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGjhEZZXqZNPykhLjNvsGwOCM1qIEanKt8IzWogRqcq3_QmUcYIOVyiKh6iakT4n2_tTLj_3VEsJs8l079--p54&_nc_ohc=ZWpWVaFLz7UQ7kNvgGg0Ym5&_nc_ht=scontent.fkhi8-1.fna&oh=00_AYC2TZ3ucMma-VxkRlV1BIuHK_FfPlVg44-zbbrmV8jHSA&oe=66763263" alt="Team Member 3" className="w-32 h-32 object-cover rounded-full mx-auto mb-2 shadow-md"/>
              <h3 className="text-xl font-semibold">Team Member 2</h3>
              <p className="text-gray-600">Position</p>
            </div>
            <div className="text-center">
              <img src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/448388600_842442587935000_8079931020895532197_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGjhEZZXqZNPykhLjNvsGwOCM1qIEanKt8IzWogRqcq3_QmUcYIOVyiKh6iakT4n2_tTLj_3VEsJs8l079--p54&_nc_ohc=ZWpWVaFLz7UQ7kNvgGg0Ym5&_nc_ht=scontent.fkhi8-1.fna&oh=00_AYC2TZ3ucMma-VxkRlV1BIuHK_FfPlVg44-zbbrmV8jHSA&oe=66763263" alt="Team Member 3" className="w-32 h-32 object-cover rounded-full mx-auto mb-2 shadow-md" />
              <h3 className="text-xl font-semibold">Team Member 3</h3>
              <p className="text-gray-600">Position</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
