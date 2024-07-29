import React from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center pt-3">
      <h1>Contact Us</h1>
      <ContactForm onSubmit={onSubmit} />
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        {...register("name", { required: true })}
      />
      {errors.name && <span>This field is required</span>}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        {...register("email", { required: true })}
      />
      {errors.email && <span>This field is required</span>}

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        {...register("message", { required: true })}
      />
      {errors.message && <span>This field is required</span>}

      <button type="submit">Submit</button>
    </form>
  );
}