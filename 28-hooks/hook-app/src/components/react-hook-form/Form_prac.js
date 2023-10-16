import React from "react";
import { useForm } from "react-hook-form";

export default function Form_prac() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onValid = (data) => {
    console.log("onValid", data);
  };


  console.log("errors", errors);
  console.log("watch", watch("username"));

  return (
    <div>
      <h1>react-hook-form 연습</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            required: "이름을 입력해 주세요",
            minLength: {message: "이름은 필수 항목입니다" },
          })}
        />
        <div>{errors.username?.message}</div>

        <br />
        <input
          type="text"
          placeholder="age"
          {...register("age", {
            validate: {
              isPositive:(value)=> value> 0|| "0 이상의 숫자만 입력 가능합니다" ,},
          })}
        />

        <div>{errors.age?.message}</div>
        <br />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
