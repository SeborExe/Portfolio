import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";
import { bbg, dreamstorm, OmSphere, UE5Unity } from "../assets";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const experiences = [
    {
      title: t.experience.companies.beardedbrothers.title,
      company_name: t.experience.companies.beardedbrothers.company,
      icon: bbg,
      iconBg: "#383E56",
      date: "June 2023 - July 2025",
      points: t.experience.companies.beardedbrothers.points,
    },
    {
      title: t.experience.companies.dreamstorm.title,
      company_name: t.experience.companies.dreamstorm.company,
      icon: dreamstorm,
      iconBg: "#E6DEDD",
      date: "June 2022 - August 2022",
      points: t.experience.companies.dreamstorm.points,
    },
    {
      title: t.experience.companies.omsphere.title,
      company_name: t.experience.companies.omsphere.company,
      icon: OmSphere,
      iconBg: "#383E56",
      date: "July 2021 - January 2022",
      points: t.experience.companies.omsphere.points,
    },
    {
      title: t.experience.companies.personal.title,
      company_name: t.experience.companies.personal.company,
      icon: UE5Unity,
      iconBg: "#E6DEDD",
      date: "May 2021 - Present",
      points: t.experience.companies.personal.points,
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {t.experience.subtitle}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t.experience.title}
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");