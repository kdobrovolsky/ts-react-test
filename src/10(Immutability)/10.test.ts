import { moveUser, UserWithLaptopType, LaptopType } from './10_1';


 
  
  test("change addres", () => {
    let user: UserWithLaptopType = {
      name: "Daniil",
      hair: 32,
      address: { 
        city: "Minsk" ,
        house: 12

      },
      laptop:{
        title: "ZenBook"
      }
    };
  
    const movedUser = moveUser(user, 'Kiev');
    
  
    expect(movedUser).not.toBe(user);
    expect(movedUser.address).not.toBe(user.address);
    expect(movedUser.address.city).toBe('Kiev'); 
    expect(movedUser.address.house).toBe(12);   
    expect(movedUser.laptop).toEqual(user.laptop);
    
    expect(movedUser.name).toBe('Daniil');
    expect(movedUser.hair).toBe(32);

  });

  