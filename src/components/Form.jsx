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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="city-form">
      <div className="form-group">
        <label htmlFor="city">Enter City</label>
        <input id="city" defaultValue="Chicago" {...register("city")} />
      </div>

      <div className="form-submit-button-container">
        <Button buttonType="submit" name="Submit" />
      </div>
    </form>
  );
}
