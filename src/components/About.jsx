const About = () => {
  return (
    <div>
      <hr className="border-t border-gray-400 my-10 w-[90%] mx-auto" />

      <h1 className="text-center text-3xl md:text-5xl mb-5">ABOUT STEVE</h1>

      <p className="text-center text-md md:text-2xl text-gray-500 mx-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, iure pariatur quae magni
        nulla est fugiat qui possimus aliquam mollitia tempore praesentium tempora, consequatur eius
        ea exercitationem nesciunt. Laborum natus tempora sed excepturi veritatis facere, asperiores
        voluptas similique architecto inventore atque modi odio possimus nihil optio ipsam maiores.
        Iusto sint sit perspiciatis inventore facere nam quam dolorum minima consequuntur eum.
      </p>

      <div className="flex items-center">
        <hr className="border-t border-gray-400 my-20 w-[60%] ml-7 md:ml-36" />
        <button className="bg-white border border-black hover:bg-black hover:text-white px-10 duration-300 text-sm md:text-xl mx-10 h-20 items-center ">
          PROJECTS
        </button>
      </div>
    </div>
  );
};

export default About;
