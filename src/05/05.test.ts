import { createGreeatngMessage, ManType } from "./05_01"

let people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
]

beforeEach(()=>{
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18},]
})

test('Shoult get array of greeting messages', () => {
    const messages = createGreeatngMessage(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello A. Welcom to IT-Incubator')
    expect(messages[1]).toBe('Hello A. Welcom to IT-Incubator')
    expect(messages[2]).toBe('Hello D. Welcom to IT-Incubator')

})