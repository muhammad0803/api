import { useState } from "react"
import "../crud/Crud2.css"
export const Crud2=()=>{
    const[mot,setMot]=useState("")
    const [data,setData]=useState( 
        [
            // {
            //  id:"",
            //  name:"",
            //  email:"",
            //  password:"",
            //  eye:false,
            // }
         ]
    )
    const [user,setUser]=useState(
        {
            id:false,
            name:"",
            email:"",
            password:"",
            eye:false,
        }
    );

    const change=(e)=>{
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value,
            }
        )
    };
    const send = (e) => {
        e.preventDefault();
        console.log(user);
        if(user.id){
            setData(data=>data.map((item)=>item.id===user.id? user : item))
        }else{
            setData([
              ...data,
              {
                ...user,
                id: new Date().getTime(),
              },
            ]);
        }
        

        setUser({
            id: false,
            name: "",
            email: "",
            password: "",
            eye: false,
          });
        };

        const deleteUser = (id) => {
            setData(data.filter((item) => item.id !== id));
          };

    return(
        <div className="crud2">
            <input type="text" name="" id="" onChange={(e)=> setMot(e.target.value.toLocaleLowerCase().trim())} />

        <form className="inputs" onSubmit={send}>
            <h3>register</h3>
            <input type="text" placeholder="name" name="name" value={user.name} onChange={change}  required />
            <input type="email" placeholder="email" name="email" value={user.email} onChange={change} required />
            <input type="password" placeholder="password" name="password" value={user.password} required onChange={change} />
            <button>send</button>
        </form>

           <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>actiation</th>
                </tr>
            </thead>
            <tbody>
              {
                mot.length>0 ? data.filter((item)=> (item.name.toLocaleLowerCase().trim().indexOf(mot) != -1)).length>0 ?
                data.filter((item)=> (item.name.toLocaleLowerCase().trim().indexOf(mot) != -1))
                .map((item,index)=>{ 
                    return(
                        <tr key={index}>
                            <th>{index+1}</th>
                            <th>{item.name}</th>
                            <th>{item.email}</th>
                            <th>{item.password}</th>
                            <th>
                                <button onClick={()=>deleteUser(item.id)}>delete</button>
                                <button onClick={()=>setUser(item)} >add</button>
                            </th>
                        </tr>
                    )
                }) : <h1>NO found</h1> :  data?.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <th>{index+1}</th>
                            <th>{item.name}</th>
                            <th>{item.email}</th>
                            <th>{item.password}</th>
                            <th>
                                <button onClick={()=>deleteUser(item.id)}>delete</button>
                                <button onClick={()=>setUser(item)} >add</button>
                            </th>
                        </tr>
                    )
                })
              } 
            </tbody>
           </table>
        </div>
    )
}