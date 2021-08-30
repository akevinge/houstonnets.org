import { Navbar, NavbarPlaceholder } from "@components/shared/Navbar";
import { upcomingEvents } from "lib/constants";
import { NextPage } from "next";

const UpcomingEventsPage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <NavbarPlaceholder />
      <section className="w-5/6 mx-auto">
        {upcomingEvents.length > 0 ? (
          <>
            <h1 className="text-4xl font-medium px-5">Upcoming Events</h1>
            <div className="w-full hidden xs:grid grid-cols-2 gap-20 p-5">
              <div
                className="w-5/6 bg-black mt-7"
                style={{ height: "1px" }}
              ></div>
              <div
                className="w-5/6 bg-black mt-7"
                style={{ height: "1px" }}
              ></div>
            </div>
            <article className="w-full flex flex-col items-center xs:grid xs:grid-cols-2 xs:grid-rows-2 gap-20 mt-8 xs:mt-0">
              {upcomingEvents.map(
                ({ date, title, description, link, address }) => (
                  <article
                    className="flex flex-col gap-2 p-5"
                    key={date + title + description}
                  >
                    <h3>{date}</h3>
                    <h1 className="font-medium text-xl sm:text-2xl">{title}</h1>
                    <p className="text-gray-500 hidden xs:block text-xs sm:text-base">
                      {description}
                    </p>
                    {address && (
                      <h2 className="mt-2 text-sm sm:text-base">{address}</h2>
                    )}
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 text-blue-600 text-sm sm:text-base"
                      >
                        {link}
                      </a>
                    )}
                    <div
                      className="w-5/6 bg-black mt-7"
                      style={{ height: "1px" }}
                    ></div>
                  </article>
                )
              )}
            </article>
          </>
        ) : (
          <h1
            className="mt-5 font-medium text-2xl text-center"
            style={{ marginTop: "20vh" }}
          >
            Upcoming Events to be Announced
          </h1>
        )}
      </section>
    </div>
  );
};

export default UpcomingEventsPage;
