import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
      id="home"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className=" font-titleFont tracking-wide text-textGreen text-lg"
      >
        Hi, my name is
      </motion.h3>
      <motion.h3
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Nguemechia Parfait.
        <span className="text-textDark mt-2 lgl:mt-4">
          I built things for the web
        </span>
      </motion.h3>
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-[650px] text-textDark font-medium"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto at
        vel tenetur itaque laborum deserunt fugiat. Magnam aspernatur animi,
        corporis tempore, vero nam adipisci ex laudantium enim nobis provident
        voluptatem.
        <a href="#lien de mon portfolio" target="_blank">
          <span className="text-textGreen inline-flex cursor-pointer h-7 overflow-x-hidden group">
            Learn more
          </span>
        </a>
      </motion.p>
      <motion.button
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        Check out my Project!
      </motion.button>
    </section>
  );
};

export default Banner;
