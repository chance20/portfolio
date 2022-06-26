import {RiComputerLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {MdDeveloperMode} from 'react-icons/md'
import {AiOutlineAntDesign, AiOutlineApi} from 'react-icons/ai'
import {BsCircleFill} from 'react-icons/bs'
import {  IService, ISkill, IProject} from './type'


export const services:IService[] = [
    {
         title:"Frontend Development",
         about:"Je peux concevoir une belle application monopage et evolutive (SPA) en utilisant <b> HTML </b>, <b>CSS</b>, <b>React.js</b> et <b>Next.js</b>",
         Icon:RiComputerLine
    },
    {
        title:"Backend Development",
        about:"Je gere les bases de donnees, le serveur d'api en utilisant <b>Express</b> & other popular framework",
        Icon:FaServer
   },
   {
      title:"API Development",
      about:"I can develop robust REST API using <b>ASP.NET Core</b> & <b>django-rest-api</b>",
      Icon:AiOutlineApi
  },
  {
    title:"Competitive Coder",
    about:"a daily problem solver in  <b>HanckerRank</b> and  <b>Leet code</b>",
    Icon:MdDeveloperMode
  },
  {
    title:"UI/UX designer",
    about:"a daily problem solver in  <b>HanckerRank</b> and  <b>Leet code</b>",
    Icon:AiOutlineAntDesign
  },
  {
    title:"Whatever",
    about:"lorem...",
    Icon:RiComputerLine
  },
]

export const languages:ISkill[] = [
    {
        name:'C#',
        level:'80%',
        Icon:BsCircleFill

    },
    {
        name:'Python',
        level:'50%',
        Icon:BsCircleFill

    },
    {
        name:'Dart',
        level:'50%',
        Icon:BsCircleFill

    },
    {
        name:'TypeScript',
        level:'40%',
        Icon:BsCircleFill

    },
    {
        name:'JavaScript',
        level:'50%',
        Icon:BsCircleFill

    },
    {
        name:'ASP.NET Core',
        level:'80%',
        Icon:BsCircleFill

    },
    {
        name:'Flutter',
        level:'50%',
        Icon:BsCircleFill

    },
    {
        name:'Next js',
        level:'60%',
        Icon:BsCircleFill

    },

]

export const tools:ISkill[] = [
    {
        name:'Git',
        level:'65%',
        Icon:BsCircleFill

    },
    {
        name:'Jira',
        level:'50%',
        Icon:BsCircleFill

    },
    {
        name:'Trello',
        level:'50%',
        Icon:BsCircleFill

    },
    {
        name:'Confluence',
        level:'40%',
        Icon:BsCircleFill

    },
    {
        name:'Figma',
        level:'40%',
        Icon:BsCircleFill

    }

]

export const projects: IProject[] = [
    { 
      name: "COVID Tracker",
      description:
        "This app shows a statistical view about corona virus over the world",
      image_path: "/images/covid.jpg",
      deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
      github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
      category: ["react"],
      key_techs: ["React", "Chart.js", "Material UI"],
    },
    {
      name: "Algorithm Visualizer",
      image_path: "/images/algoVisual.png",
      deployed_url: "https://visual-algorithm.web.app/",
      github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
      category: ["react"],
      description:
        "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
      key_techs: ["React", "firebase", "Framer Motion"],
    },
  
    {
      name: "Dev Talks",
      image_path: "/images/dev.jpg",
      deployed_url: "https://dev-talks.herokuapp.com/",
      github_url: "https://github.com/Dey-Sumit/Dev-talks",
      category: ["flutter", "django", "react"],
      description:
        "Social Media app for developers who can share project,create posts,etc...",
      key_techs: [
        "React",
        "Redux",
        "Node",
        "Express",
        "Mongo",
        "REST API",
        "Bootstrap",
      ],
    },
  
    {
      name: "Realtime Chat App",
      image_path: "/images/chatapp.jpg",
      deployed_url: "https://sumit-chat.netlify.app/",
      github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
      category: ["django", "react"],
      description:
        "Basic Realtime Chat App where one can create a room can talk to each other",
      key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
    },
  
    {
      name: "Tweeter Clone",
      image_path: "/images/tweetme.jpg",
      deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
      github_url: "https://github.com/Dey-Sumit/tweetme",
      category: ["django", "react"],
      description:
        "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
      key_techs: ["React", "Django", "Django REST API"],
    },
  
    {
      name: "Color Classification using tf.js",
      image_path: "/images/color.jpg",
      deployed_url: "!#",
      github_url: "https://github.com/Dey-Sumit/color-classification",
      category: ["django"],
      description:
        "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
      key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
    },
    {
      name: "YouTube using YouTube ",
      image_path: "/images/youtubeClone.png",
      deployed_url: "https://not-utube.web.app/",
      github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
      category: ["django"],
      description:
        'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
      key_techs: [
        "React",
        "Redux",
        "Firebase Auth",
        "YouTube API",
        "Sass",
        "Bootstrap",
      ],
    },
    {
      name: "Football App",
      image_path: "/images/football.png",
      deployed_url: "https://o-my-goal.web.app/",
      github_url: "https://github.com/Dey-Sumit/football-app",
      category: ["react"],
      description:
        "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
      key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
    },
  ];