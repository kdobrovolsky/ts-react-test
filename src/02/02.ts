type LocalCityType = {
    title: string
    countryTitle:string
}

type AddressType = {
    streetTitle: string
    city:LocalCityType
}

type TechType = {
    id: number;
    title: string
}

export type StudentType = {
     id: number
     name: string
     age: number
     isActive: boolean
     address:AddressType
     technologies: TechType[]
}
export const student: StudentType = {
    name: "Kirill",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Pochtovaya,37",
        city: {
            title: "Minsk",
            countryTitle: "Belarus",
        },
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },
    ],
    id: 0
};

console.log(student.technologies[2].id);

console.log(student.address.city.title);
