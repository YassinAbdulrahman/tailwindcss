function Stayproductive() {
  return (
    <section className="pb-[150px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div>
          <img
            src="/src/assets/images/illustration-stay-productive.png"
            alt="stay-productive"
          />
        </div>
        <div className="text-white">
          <h3 className="font-medium text-[35px] leading-[50px]">
            Stay productive,
            <br />
            wherever you are
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p className="mb-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              delectus eveniet quos commodi aliquid nemo eum praesentium, libero
              Distinctio perspiciatis consequatur qui?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ut at nobis eaque blanditiis aspernatur similique, iste aliquam
              unde tenetur, hic in facilis dolorem illum id placeat
            </p>
          </div>
          <a
            href="/"
            className="text-primary hover:text-[#42b0d1] transition-colors duration-200 border-b-2 border-primary border-solid pb-[5px] flex items-start gap-[15px] w-fit"
          >
            See how Fylo works
            <img
              src="/src/assets/images/icon-arrow.svg"
              alt="arrow"
              className="w-[20px] h-[20px] object-contain animate-moveRight"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Stayproductive;
