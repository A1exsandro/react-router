import React from "react";
import { useForm } from "react-hook-form";
import './styles.css';

const Users = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return(
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Nome
            <input {...register("name")} />
          </label>
          <label>
            Idade
            <input {...register("age")} />
          </label>
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default Users;