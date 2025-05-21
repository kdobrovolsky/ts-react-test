import { StudentType } from "../02/02";
import { GovernmentBuildingsType, HouseType } from "../02/02/02-02";

export function addSkill(st: StudentType, skill: string) {
  st.technologies.push({
    id: new Date().getTime(),
    title: skill, // Используем переданный skill (например, "JS")
  });
}

export function makeStudentActive(s: StudentType) {
  s.isActive = true;
}

export function doesStudentLiveIn(s: StudentType, cityName: string) {
  return s.address.city.title === cityName;
}

export const addMoneyToBudget = (
  building: GovernmentBuildingsType,
  budget: number
) => {
  building.budget += budget;
};

export const repairHouse = (houses: HouseType) => {
  houses.repaired = true;
};

export const toFireStaff = (
  building: GovernmentBuildingsType,
  stuffToFire: number
) => {
  building.staffCount -= stuffToFire;
};

export const toHireStaff = (
  building: GovernmentBuildingsType,
  stuffToHire: number
) => {
  building.staffCount += stuffToHire;
};
