import React, { useState } from "react";
// biz bu komponentada createContext orqali Contextni hosil qildik

export const DataContext=React.createContext();

export const DataContextProvider=({children}) => {
    const [user,setUser]=useState({
      name:'test'  
    })

    return(
        <DataContext.Provider value={{user,setUser}}>
            {children}
        </DataContext.Provider>
    )
}