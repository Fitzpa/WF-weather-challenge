import { useForm } from "react-hook-form";
import Button from "./Button";
import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
// Build form control with the following. Label : “Enter City”, Input form field, Submit Button. Button should be custom built and re-usable.
export default function Form() {
  const { setCity } = useContext(WeatherContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setCity(data.city);
    console.log(data);
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="city">
        Enter City
        <input id="city" defaultValue="test" {...register("city")} />
      </label>

      <Button buttonType="submit" name="Submit" />
    </form>
  );
}
