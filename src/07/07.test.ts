
export type ManType = {
    name: string
    age: number
    lessons: Array<{title:string}>,
    address: {
        street: {
            title: string
        }
}
}

let man:ManType;
beforeEach(()=>{
     man = {
        name: "Kirill",
        age: 32,
        lessons: [{title:"1"},{title:"2"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})

test ("list of streets titles of goverments buildings", ()=>{
    

  

//   const age = man.age

const {title} = man.address.street
const {age}= man

    expect(age).toBe(32);
    expect(title).toBe("Nezavisimosti street");

})


test('', ()=>{
    const l1 = man.lessons[0]
    const l2 = man.lessons[1]

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")
})