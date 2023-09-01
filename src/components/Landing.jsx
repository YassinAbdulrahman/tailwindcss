function Landing() {
  return (
    <section className="bg-[#1c2230]">
      <div className="container pt-[200px]">
        <div className="element-center flex-col">
          <div className="w-[750px] max-w-full">
            <img
              className="w-full h-fit"
              src="/src/assets/images/illustration-intro.png"
              alt="illustration-intro"
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
              All your files in one secure location,
              <br />
              accessible anywhere.
            </h1>
            <p className="font-normal text-lg px-[15px] md:w-[600px] max-w-full md:mx-auto mb-[15px]  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
              vero eius. Nihil magni quidem doloremque quo reprehenderit,
              dignissimos omnis rerum perspiciatis. Error magnam nostrum quia,
              natus atque provident sit cum!
            </p>
          </div>
          <a
            href="/"
            className="btn w-[280px] h-[60px] rounded-[30px] text-white element-center font-medium"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="w-full h-[200px]">
        <img
          src="/src/assets/images/bg-curvy-desktop.svg"
          alt="img"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}

export default Landing;
