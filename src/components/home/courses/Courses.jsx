import React from "react";
import c1 from "../../../assets/courses/c1.jpg";
import c2 from "../../../assets/courses/c2.png";
import c3 from "../../../assets/courses/c3.jpg";
import c4 from "../../../assets/courses/c4.jpg";
import c5 from "../../../assets/courses/c5.jpg";
import c6 from "../../../assets/courses/c6.png";
import CoursesCard from "./CoursesCard";

const Courses = () => {
  const courses = [
    {
      name: "Cascading Style Sheet (CSS)",
      image: c1,
      title: "CSS",
    },
    {
      name: "Hyper Text Markup Language (HTML)",
      image: c2,
      title: "HTML",
    },
    {
      name: "Web Development",
      image: c3,
      title: "webDevelopment",
    },
    {
      name: "React JS Development",
      image: c4,
      title: "reactJSDevelopment",
    },
    {
      name: "Basic of Python",
      image: c5,
      title: "basicOfPython",
    },
    {
      name: "Learn App Designing",
      image: c6,
      title: "learnAppDesigning",
    },
  ];
  return (
    <div className="">
      <div className="p-2 md:p-10 bg-gradient-to-r from-slate-300 to-slate-100">
        <div className="text-center">
          <h1 className="font-bold text-3xl uppercase">
            Recommended <span className="text-purple-600">COURSES</span>
          </h1>
          <p className="py-5">
          An online course is a web-based educational program that offers flexibility, accessibility, and affordability for learners to enhance their skills and gain knowledge.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {courses?.map((data, i) => (
            <CoursesCard key={i} data={data}></CoursesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
