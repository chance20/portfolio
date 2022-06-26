import { Bar } from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
  return (
    <div className="px-6 py-2">
      {/* education & exp */}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Mathématiques et Informatique
            </h5>
            <p className="font-semibold">Université de Kinshasa (2015-2020)</p>
            <p className="my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              voluptates maxime reiciendis minima, optio nisi quis architecto
              aspernatur iste laboriosam eaque excepturi, nobis assumenda dolore
              quos natus sequi ea hic?
            </p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Expériences</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Full stack developer </h5>
            <p className="font-semibold">
              {" "}
              Wiikko & Splitti (2020 - jusqu &apos; à présent)
            </p>
            <p className="my-3">Lorem ipsum dolor, sit amet consectetur </p>
          </div>
        </div>
      </div>
      {/* education & tools */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => 
              <Bar data={language} key={language.name} />
            )}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => 
              <Bar data={tool} key={tool.name} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
