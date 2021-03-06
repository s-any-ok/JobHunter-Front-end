import { vacancyAPI } from "../api/api";
import { profileAPI } from "../api/api";
import { respondAPI } from "../api/api";
import { getDataTime } from "../components/utils/formHelpers";
const SET_VAC_INFO = "vacancyInfo/SET-VAC-INFO";
const SET_CMP_INFO = "vacancyInfo/SET-CMP-INFO";

let initState = {
  vacancy: {
    VacancyID: 1,
    Objective: "Front-end developer (Javascript)",
    Information: "Компания AffReact предлагает вакансию Frontend разработчика в киевском офисе компании.",
    ContactNumber: "+380501753434",
    Employment: "Повна зайнятість.",
    Experience: "Досвід роботи від 2 років.",
    Adress: "Київ, вулиця Басейна, 2.",
    Salary: 500.0,
  },
  company: {
    CompanyID: 1,
    CompName: "React",
  },
};
const vacInfoReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_VAC_INFO:
      return { ...state, vacancy: action.vacancy };
    case SET_CMP_INFO:
      return { ...state, company: action.company };
    default:
      return state;
  }
};

//--------Actions--------//
export const setVacInfo = (vacancy) => ({
  type: SET_VAC_INFO,
  vacancy,
});
export const setCmpInfo = (company) => ({
  type: SET_CMP_INFO,
  company,
});
//--------Thunks--------//
export const getVacInfo = (pid) => async (dispath) => {
  let vacData = await vacancyAPI.vacInfo(pid);
  let compId = vacData[0].CompanyID;
  let cmpData = await profileAPI.cmpProfile(compId);
  dispath(setCmpInfo(...cmpData));
  dispath(setVacInfo(...vacData));
};

export const setRespond = (vId, eId) => async (dispath) => {
  const dateTime = getDataTime();
  let respondData = await respondAPI.setRespond(vId, eId, dateTime);
  alert(respondData);
};

export default vacInfoReducer;
