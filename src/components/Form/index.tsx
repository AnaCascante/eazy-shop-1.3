import React from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <div className="flex justify-center pt-3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-5">Contact us</h2>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm">
            Full Name
          </label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">This field is required</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-red-500">
              This field is required to be at least 3 characters
            </p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="text" className="block mb-2 text-sm">
            Subject
          </label>
          <input
            {...register("subject", { required: true, minLength: 3 })}
            type="text"
            id="subject"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.subject?.type === "required" && (
            <p className="text-red-500">This field is required</p>
          )}
          {errors.subject?.type === "minLength" && (
            <p className="text-red-500">
              This field is required to be at least 3 characters
            </p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm">
            Email
          </label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">This field is required</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-red-500">
              This field is required to be a valid email
            </p>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="body" className="block mb-2 text-sm">
            Body
          </label>
          <input
            {...register("body", { required: true, minLength: 3 })}
            type="message"
            id="body"
            className="w-full p-7 border border-gray-300 rounded"
          />
          {errors.body?.type === "required" && (
            <p className="text-red-500">This field is required</p>
          )}
          {errors.body?.type === "minLength" && (
            <p className="text-red-500">
              This field is required to be at least 3 characters
            </p>
          )}
        </div>
        <button className="w-full hover:text-pink-500 text-black font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;