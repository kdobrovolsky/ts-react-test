

export const userArray = [
    {id: '10', name: 'Cristian'},
    {id: '20', name: 'david'},
    {id: '30', name: 'joe'},
    {id: '40', name: 'tom'},
    {id: '50', name: 'qwe'},
    {id: '60', name: 'op'},
    {id: '70', name: 'name'},
    {id: '80', name: 'guy'},
]

userArray.find (user => user.id === '10')
userArray.filter(user => user.id === '10')