
export const User = () => {

    const deleteUser = () => {
        alert('user have been deleted')
    } 

    const saveUser = () => {
        alert('user have been saved')
    }  

    const onNameChangedHandler = () => {
        console.log("name changed");
        
    }

    const onFocusLostHandler = () => {
        console.log("focus lost");
        
    }

    return(
        <div>Kirill 
            <button tabIndex={2} onClick={deleteUser}>delete</button>
            <button tabIndex={1} onClick={saveUser}>save</button>
            <input type="text" onChange={onNameChangedHandler} onBlur={onFocusLostHandler}/>
        </div>
    )
}