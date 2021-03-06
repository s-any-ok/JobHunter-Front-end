import React from "react";
import s from "./Vacancy.module.css";
import vacImg from "../../../assets/img/vacancy.png";
import { NavLink } from "react-router-dom";

const Vacancy = ({ vacancy }) => {
  return (
    <div className={s.container}>
      <div className={s.vacancyInfoContent}>
        <div>
          <NavLink to={"/Vacancy/" + vacancy.VacancyID}>
            <img
              className={s.vacancyImg}
              src={vacImg}
              alt={vacancy.Objective}
            />
          </NavLink>
        </div>
        <div className={s.vacancyFullInfo}>
          <div className={s.objective}>{vacancy.Objective}</div>
          <div className={s.compAdress}>Company · {vacancy.Adress}</div>
          <div className={s.expEmp}>
            {vacancy.Employment}, {vacancy.Experience}
          </div>
          <div className={s.vacancyInfo}>{vacancy.Information}</div>
          <div className={s.salary}>{vacancy.Salary}$</div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
