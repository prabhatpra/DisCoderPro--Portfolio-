import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1.5" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="3" text="Websites" />
      </div>
      <p className="text-center">
        With 1.5 years of self learning experience building dynamic and user-friendly web
        applications with backend Spring boot.
      </p>
      <ExperienceInfo number="1000" text="not verify" />
    </div>
  );
};

export default ExperienceTopLeft;
