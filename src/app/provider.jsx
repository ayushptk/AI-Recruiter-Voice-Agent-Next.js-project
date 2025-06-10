import React ,{useContext, useState} from "react";
import { supabase } from "../../services/supabaseClient";

function Provider({children}) {

const [user, setUser] = useState();
    useEffect(() => {
        CreateNewUser()
    } ,[])
const CreateNewUser = async () => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
        let { data: Users, error } = await supabase
  .from('Users')
  .select("*")
  .eq('email', user?.email)
  console.log("user",Users)

  if(Users?.length === 0){
    
       const { data, error } = await supabase
        .from('Users')
        .insert([
            {
            name:user?.user.metadata?.name,
            email:user?.email,
            phone:user?.metadata?.picture
            }
         
        ])
        console.log("data",data)
        setUser(data)
        return
       
    }
    setUser(Users[0]);
    })
}
    


    return (
        <UserDetailConetex.Provider value={{user ,setUser}}>
              <div>{children}</div>

        </UserDetailConetex.Provider>
      
    )
}

export default Provider;

export const useUser = ()=>{
    const context = useContext(UserDetailConetex);
    return context;
}