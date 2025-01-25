const Section3 = () => {
  return (
    <div className="mb-8 group">
      <div className="relative overflow-hidden">
        <img
          src="/banner/banner4.jpg"
          alt="hero-banner1"
          className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div
          className="absolute hidden text-start sm:block w-1/2 bottom-0 left-0 text-primary px-5 py-8 sm:py-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="font-raleway text-sm sm:text-xl lg:text-3xl font-bold uppercase">
            Exclusive Sale - Up to 50% Off!
          </h1>
          <p className="font-raleway mt-2 text-sm sm:text-base lg:text-lg">
            Don't miss out on our limited-time offer! Shop your favorite styles
            with discounts up to 50%.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
