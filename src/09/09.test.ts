type UserType = {
  name: string
  age: number
  address: {title:string}
};

function ucreaseAge(user: UserType) {
  user.age++;
}

test("big test", () => {
  let user = {
    name: "Kirill",
    age: 32,
    address: {
        title: 'Minsk'
    }
  };
  ucreaseAge(user);

  expect(user.age).toBe(33);

  const superman = user;

  superman.age = 1000;

  expect(superman.age).toBe(1000);
});

test("array test", () => {
  let users = [
    { name: "Kirill", age: 23 },
    { name: "Artem", age: 7 },
    { name: "Maksim", age: 32 },
  ];
  let admins = users;


  admins.push({name:'Bandygan', age: 10})

  expect(users[3]).toEqual({name:'Bandygan', age: 10});


});


test("array reference test", () => {

    let user = {
        name: "Kirill",
        age: 32,
        address: {
            title: 'Minsk'
        }
      };

      let addAdr = user.address

      let user2: UserType = {
        name: 'Liza',
        age: 23,
        address: addAdr
      }

      user2.address.title = 'Mogilev'

    expect(user2.address.title).toBe('Mogilev');
  
  
  });

  test("reference type array test", () => {

    let user = 
        {
             name: "Kirill",
            age: 32,
            address: {
          
                title: 'Minsk'
        }}
   

   let  user2 = 
   {
       name: "Kirill",
       age: 32,
       address: {
           title: 'Minsk'
   }
}

    const users = [user,user2,{name: 'Katya', age: 18, address: {title: 'Minsk'}}]

      

     

      

    expect(users[2].name).toBe('Katya');
  
  
  });