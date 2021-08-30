import { upcomingEvents } from "lib/constants";
import { FC } from "react";

export const UpcomingSection: FC = () => {
  return (
    <section className="w-5/6 mx-auto">
      <div className="w-full bg-black" style={{ height: "1px" }}></div>
      {upcomingEvents.length > 0 ? (
        <div className="w-full grid grid-cols-2 gap-20">
          {upcomingEvents
            .slice(0, 2)
            .map(({ date, title, description, address, link }) => (
              <article className="flex flex-col gap-2 p-5" key={date + title}>
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
              </article>
            ))}
        </div>
      ) : (
        <h1 className="mt-5 font-medium text-2xl text-center">
          Upcoming Events to be Announced
        </h1>
      )}
    </section>
  );
};
