import { Navbar, NavbarPlaceholder } from "@components/shared/Navbar";
import { resources } from "lib/constants";
import { NextPage } from "next";

const ResourcesPage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <NavbarPlaceholder />
      <section
        className="w-5/6 mx-auto flex flex-col items-center gap-10"
        style={{ marginTop: "8vh" }}
      >
        <h1 className="font-medium text-4xl">Resources</h1>
        <ul className="list-none flex flex-col gap-20 xs:gap-6">
          {resources.map(({ link, name }) => (
            <li
              className="flex flex-col xs:grid items-center gap-3"
              style={{ gridTemplateColumns: "4fr 1fr 2fr" }}
              key={name + link}
            >
              <h1 className="text-center xs:text-left">{name}</h1>
              <div className="w-16 bg-black" style={{ height: "1px" }}></div>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                {link.replace("https://", "")}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ResourcesPage;
