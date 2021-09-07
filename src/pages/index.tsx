import { About } from "@components/home/About";
import { UpcomingSection } from "@components/home/UpcomingSection";
import { Navbar, NavbarPlaceholder } from "../components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <NavbarPlaceholder />
      <section>
        <div
          className="w-5/6 mx-auto overflow-hidden relative"
          style={{ maxHeight: "55vh" }}
        >
          <div className="absolute top-3 2xs:top-5 md:top-16 lg:top-28 left-5 xs:left-10 text-primary text-xl 2xs:text-2xl sm:text-4xl md:text-6xl">
            <h1 className="font-medium whitespace-nowrap">Houston Area</h1>
            <h1 className="mt-1 sm:mt-5 font-medium whitespace-nowrap">
              Support NET Group
            </h1>
          </div>
          <img
            className="w-full"
            src="/zebra-hero.png"
            alt=""
            style={{ minHeight: "100px" }}
          />
        </div>
      </section>
      <section className="w-screen" style={{ marginTop: "5vh" }}>
        <UpcomingSection />
      </section>

      <section className="mb-32" style={{ marginTop: "30vh" }}>
        <About />
      </section>
    </div>
  );
}
