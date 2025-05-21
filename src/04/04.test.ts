test("should take old men older then 90",()=>{
    const ages = [18,20,22,1,100,90,14];
    const oldAges = ages.filter(ag=> ag > 90)
    
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})                      


test("should take courses chipper",()=>{
    const ages = [18,20,22,1,100,90,14];
    const oldAges = ages.filter(age=> age > 90)
    
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})          

test ("get only completed tasks", ()=>{
    const tasks = [
        {id:1, title: 'Bread', isDone: false},
        {id:2, title: 'Milk', isDone: true},
        {id:3, title: 'Solt', isDone: false},
        {id:4, title: 'Sugar', isDone: true},
    ]

    const completedTasks = tasks.filter(task=> task.isDone)
    const UncompletedTasks = tasks.filter(task=> !task.isDone)

    //в инспект выводится, что ожидается 
    expect(completedTasks.length).toBe(2) // должно быть две задачи
    expect(completedTasks[0].id).toBe(2) // Первая задача - id 2
    expect(completedTasks[1].id).toBe(4) // Вторая задача - id 4

    
    expect(UncompletedTasks.length).toBe(2)
    expect(UncompletedTasks[0].id).toBe(1)
    expect(UncompletedTasks[1].id).toBe(3)
   
})
