import { GovernmentBuildingsType, HouseType } from '../02/02/02-02';

export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
]

const dimychTransformator = (man: ManType) => {
return {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}
}

const devs = [
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Andrew",
        lastName: "Ivanov"
    },

    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Alexander",
        lastName: "Petrov"
    },

    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Dmitry",
        lastName: "Sidorov"
    }
]

const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
]

const devs3 = people.map(dimychTransformator)

export const messages = people.map(man=> `Hello ${man.name[0]}. Welcom to IT-Incubator`)

export const createGreeatngMessage = (people: Array<ManType>) => {
   return people.map(man=> `Hello ${man.name.split("")[0]}. Welcom to IT-Incubator`)
}

export const getStreetsTitlesOfGovernmentBuildings = (buildings: GovernmentBuildingsType[]) => {
 return buildings.map(t => t.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses:Array<HouseType>)=>{
    return houses.map(t=> t.address.street.title)
}

export const createMessages = (houses: HouseType[]) => {
    return houses.map(t=> `Hello guys from ${t.address.street.title}`)
}