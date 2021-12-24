import React, { FunctionComponent, useState } from "react";
import { IProject } from "../type";
import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

export const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  return (
    <div>
      <Image
        priority
        className="cursor-pointer"
        height={140}
        width={250}
        src={image_path}
        alt={name}
        onClick={() => setShowDetail(true)}
      />
      <p className="my-2 text-center">{name}</p>
      {showDetail && (
        <div className="grid grid-cols-2 absolute top-0 left-0 z-10 h-auto md:grid-cols-2 gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100">
          <div>
            <Image src={image_path} alt={name} height={200} width={400} />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject />
                <span>Projets</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap  mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm" key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};
