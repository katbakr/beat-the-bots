//UserContext.js will let logged in users see what they are allowed to see, app-wide.
import (createContext) from "react";

//creating context
export const UserContext = createContext({loggedIn: false});

//create a component 
//here the context component receives the props which has the "children" property which causes any child of the component to be included in "children" property
const Context = ({children}) => {

    //the state has a default value of an object with loggedIn property set to false 
    const [user,setUser] = useState(()=> ({loggedIn: false,}));

    //returning a provider which we keep in the above state
    //{children} makes the value of {user} available to any child of this component
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
export default Context;