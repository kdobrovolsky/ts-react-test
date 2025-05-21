import { CityType, GovernmentBuildingsType } from '../02/02/02-02';


export const demolishHousesOnTheStreet =(city:CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildingsType:Array<GovernmentBuildingsType>, people: number) => {
return buildingsType.filter(t => t.staffCount > people)
}