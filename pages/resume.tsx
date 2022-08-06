import { Bar } from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
  return (
    <div className="px-6">
      {/* education & exp */}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-sm font-semibold">
              Licence en Mathématiques et Informatique, option gestion
              informatique
            </h5>
            <p className="text-sm font-medium">
              Université de Kinshasa, Kinshasa (2018 - 2021)
            </p>
          </div>
          <br />
          <div>
            <h5 className="my-2 text-sm font-semibold">
              Graduat en Mathématiques et Informatique, Groupe Informatique
            </h5>
            <p className="text-sm font-medium">
              Université de Kinshasa, Kinshasa (2014 - 2017)
            </p>
            <br />
          </div>
          <div>
            <h5 className="my-2 text-sm font-semibold">
            Diplôme d’Etat en Commerciale Informatique
            </h5>
            <p className="text-sm font-medium">
            Institut KIAMVU, Ecole Conventionnée Catholique à Matadi/Kongo Central (2007 – 2014)
            </p>
            <hr />
          </div>
          <h5 className="my-3 text-xl font-bold">Expériences</h5>

          <div>
            <h5 className="my-2 text-sm font-semibold">
              Full stack developer <span className="font-normal">|</span>{" "}
              <span className="text-sm font-semibold">
                {" "}
                Orderbot Software Inc.
              </span>{" "}
              <span className="text-sm font-medium">
                (télé-travail) (Nov. 2021 - jusqu&apos;à présent)
              </span>{" "}
            </h5>
            <p className="my-3 text-sm">
              <span className="text-sm font-semibold">Tâches : </span>{" "}
              Design,development, deployment and maintenance of web applications
              with modern technologies Nextjs, Reactjs, Tailwindcss,JavaScript,
              TypeScript,  Nodejs and ASP.NET Core{" "}
            </p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-xl font-bold">Expériences (Suite)</h5>
          <div>
            <h5 className="my-2 text-sm font-semibold">
              Full stack developer <span className="font-normal">|</span>
              <span className="text-sm font-semibold">
                {" "}
                SPLITTI RDC SARL{" "}
              </span>{" "}
              <span className="text-sm font-medium">
                {" "}
                (Janv. 2021 - jusqu&apos;à présent)
              </span>
            </h5>

            <p className="my-3 text-sm">
              <span className="text-sm font-semibold">Tâches : </span>Design,
              development, deployment and maintenance of web and mobile
              applications with modern technologies Nextjs, Reactjs,
              Tailwindcss, Dart, Flutter,JavaScript and TypeScript. {" "}
            </p>
            <hr />
          </div>
          <div>
            <h5 className="my-2 text-sm font-semibold">
              Full stack developer <span className="font-normal">|</span>
              <span className="text-sm font-semibold">
                {" "}
                EJEUNA SOLUTIONS{" "}
              </span>{" "}
              <span className="text-sm font-medium">
                {" "}
                (Nov. 2018 - Janv. 2021)
              </span>
            </h5>
            <p className="my-3 text-sm">
              <span className="text-sm font-semibold">Tâches : </span>Design,
              development, deployment and maintenance of web and mobile
              applications with modern technologies Nextjs, Reactjs,
              Tailwindcss, Dart, Flutter,JavaScript and TypeScript.{" "}
            </p>
            <hr />
          </div>
          <div>
            <h5 className="my-2 text-sm font-semibold">
              Freelance developer, CEO et Formateur{" "}
              <span className="font-normal">|</span>
              <span className="text-sm font-semibold">
                {" "}
                CYBER CAFE LA NINA{" "}
              </span>{" "}
              <span className="text-sm font-medium">
                {" "}
                (Juillet. 2017 - Nov. 2018)
              </span>
            </h5>

            <p className="my-3 text-sm">
              <span className="text-sm font-semibold">Tâches : </span>
              Gérer les équipements et consommables informatiques, Gérer les
              finances et rédiger les rapports financiers, Former les apprenants
              en bureautique et Concevoir des applications en utilisant les
              technologies ci-apres : C#, Jquery, PHP et Ajax{" "}
            </p>
          </div>
        </div>
      </div>
      {/* education & tools */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
