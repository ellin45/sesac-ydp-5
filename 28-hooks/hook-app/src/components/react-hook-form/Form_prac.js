import React from "react";
import { useForm } from "react-hook-form";

export default function Form_prac() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onValid = (data) => {
    console.log("onValid", data);
    success();
    reset();
  };
  const success = () => {
    alert("제출이 완료 되었습니다.")
  }
  const onInvalid = ()=>{
    alert("다시 작성해 주세요.")
  }
  console.log("errors", errors);
  console.log("watch", watch("username"));

  return (
    <div>
      <h1>react-hook-form 연습</h1>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            required: "이름을 입력해 주세요",
            minLength: { message: "이름은 필수 항목입니다" },
          })}
        />
        <div>{errors.username?.message}</div>
          
        <br />
        <input
          type="text"
          placeholder="age"
          {...register("age", {
            validate: {
              isPositive: (value) =>
                value > 0 || "0 이상의 숫자만 입력 가능합니다",
            },
          })}
        />
        <div>{errors.age?.message}</div>
        <br />
        <input type="date" 
        {...register("date", {
          required: "날짜를 입력 해주세요",
          valueAsDate: {
            isDate: (value) => value > 0 || "0 이상의 날짜만 입력 가능합니다",
          }
        })}
        />
        <br />
        <div>{errors.date?.message}</div>
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
