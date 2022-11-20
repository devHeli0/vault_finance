import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const Register = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
 
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
       {<Link to={"/"}>Voltar</Link>}
      <div>
        <label>Username</label>
        <input {...register('username', { required: "username é necessário" } )} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password', {required: "Senha é necessária"})} />
      </div>
      <button>Submit</button>
    </form>
  );
};
export default Register;