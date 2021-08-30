import { FC } from "react";

export const About: FC = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div className="w-full flex justify-center items-center md:items-start md:grid md:grid-cols-2 gap-20 justify-items-center">
        <img className="hidden md:block" src="/zebra-blob.jpg" alt="" />
        <div className="inline-flex flex-col ">
          <h1 className="inline-block text-4xl sm:text-5xl font-medium whitespace-nowrap">
            About Us
          </h1>
          <p className="inline-block w-full text-xs sm:text-base lg:w-2/3 mt-5">
            The purpose of the Houston Area NET Support Group is to bring
            together those in the broader Houston area that are living with,
            affected by, and are interested in Neuroendocrine/Carcinoid Cancer.
            We offer both support and education. While the group administrators
            are not experts in NET cancer, we have each been living with this
            cancer for over 15 years. The support group currently meets at
            various locations in the Houston area.
          </p>
        </div>
      </div>
    </div>
  );
};
