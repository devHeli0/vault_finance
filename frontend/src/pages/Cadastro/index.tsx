import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
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