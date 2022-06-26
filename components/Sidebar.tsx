import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import {useTheme} from 'next-themes';

const Sidebar = () => {
  const { theme, setTheme } = useTheme()

  const changeTheme = ()=>{
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div>
      <Image
        priority
        className="mx-auto border rounded-full"
        src="/images/photochance.jpg"
        width="144"
        height="144"
        alt="chance"
      />
      <h3 className="my-1 text-3xl font-medium tracking-wider font-Kaushan">
        <span className="text-blue-400 font-Kaushan">Chance </span>
        Muteba
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full">Développeur Web, Mobile & Trader  </p>
      <a
        href="/files/CV.pdf"
        download=""
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full"
      >
        <GiTie className="w-6 h-6" /> Télécharger le résumé
      </a>

      {/* // social icons  */}

      <div className="flex justify-around mx-auto my-3 text-blue md:w-full">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>

        <a  href="https://linkedin.com/in/chancemuteba-aa17021b3" target="_blank" rel="noreferrer" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>

        <a href='https://github.com/chance20' target='_blank' rel='noreferrer'>
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div>
        <div
          className="py-5 mx-4 bg-gray-200 dark:bg-dark-200"
          style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
        >
          <div className="flex items-center justify-center">
            <GoLocation />
            <span>Kinshasa / RDC</span>
          </div>
          <p>itchancemuteba@gmail.com</p>
          <p>243 815 704 718</p>
        </div>

        {/* Email button */}
        <button className="w-8/12 px-5 py-2 my-1 text-white dark:bg-black rounded-full bg-gradient-to-r from-blue to-gray-600 focus:outline-none sm:my-2 md:my-2"
        onClick={()=>window.open('mailto:itchancemuteba@gmail.com')}>
          Ecris moi
        </button>
        <button onClick={changeTheme} className="w-8/12 px-5 py-2 my-1 text-white  dark:bg-black rounded-full bg-gradient-to-r from-blue to-gray-600 sm:my-2 md:my-2">
          Change theme
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
