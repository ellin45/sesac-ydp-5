import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  //handleSubmit(funcA[, funcB]): 두개의 함수를 받음
  //- funcA: 필수, 유효할 때 실행
  //- funcB: 선택, 유효하지 않을 때 실행

  const onValid = (data) => {
    console.log("onValid", data);
  };

  const onInValid = (err) => {
    console.log("onInValid", err);
  };
  console.log()
  console.log("errors", errors);
  console.log("watch", watch("username"));


  return (
    <div>
      <h1>react-hook-form 라이브러리 데모</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            required: "이름을 입력해 주세요",
            minLength: {
              message: "이름은 최소 2글자 이상 작성해 주세요",
              value: 2,
            },
          })}
        />
        {errors.username?.message}

        <br />
        <input
          type="email"
          placeholder="email(gmail)"
          {...register("email", {
            required: "이메일을 입력해 주세요",
            validate: {
              useGmail: (v) =>
                v.includes("gmail.com") || "gmail로만 가입 가능합니다.",
            },
          })}
        />
        {errors.email?.message}
        <br />
        <input
          type="text"
          placeholder="password"
          {...register("password", {
            minLength: {
              message: "비밀번호는 최소 3글자 이상입니다",
              value: 3,
            },
          })}
        />
        {errors.password?.message}
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
