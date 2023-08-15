import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login=()=>{
    const navigate=useNavigate();
    const box1=useRef("");
    const box2=useRef("");

    const my_func=()=>{
      /*  axios.post("https://localhost:1999/Login",
        {"email":box1.current.valueOf,"password":box2.current.value}).then((posRes)=>{
     const {data}=posRes;*/
     if(box1.current.value=="adinarayana"&&box2.current.value=="adhi@007"){
        navigate("/dashboard");
        toast.success("Access Granted")
     }else{
        navigate("/failure");
        toast.success("Access Denaid")
     }
      /*  },(errRes)=>{
            console.log(errRes)
        })
    };*/
}
    return(
<>
<fieldset>
    <legend> LOGIN FORM</legend>
    <input type={"text"} ref={box1} placeholder="@email"></input>
    <br></br><br></br>
    <input type={"password"} ref={box2} placeholder="password"></input><br></br>
    <button className="bt bt-primary bt-sm" onClick={my_func}>Login</button>
</fieldset>
</>
    )
};
export default Login;