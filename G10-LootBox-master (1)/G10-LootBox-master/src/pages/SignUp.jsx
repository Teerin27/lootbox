import { useState } from "react";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const schema = z
    .object({
      username: z.string().min(3, "Username must be at least 3 characters"),
      password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must include at least one uppercase letter")
        .regex(/[0-9]/, "Password must include at least one number"),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords must match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password", "");
  const passwordRequirements = {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasNumber: /[0-9]/.test(password),
  };

  const onSubmit = (data) => {
    navigate("/login");
  };

  const handleFormSubmit = (data) => {
    setIsSubmitted(true);
    return handleSubmit(onSubmit)(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-100 px-4">
      <div className="w-full max-w-md">
        <div className="fixed top-12 left-0 right-0 flex justify-center z-50">
          <img src="..\src\icon\logo.png" alt="LootBox Logo" className="w-52" />
        </div>

        <form onSubmit={handleFormSubmit} className="bg-orange-200 p-6 rounded-lg shadow-md w-full">
          <img src="../src/icon/signupLogo.png" alt="Sign Up Logo" className="w-24 mx-auto mb-4" />

          <label className="block font-semibold">Username</label>
          <input
            {...register("username")}
            className="bg-white w-full p-2 border rounded mt-1"
            placeholder="Enter your Username"
          />
          {errors.username && (
            <p className="text-red-600 text-sm flex items-center mt-1">
              <span className="mr-1">✗</span>
              Username must be at least 3 characters
            </p>
          )}

          <label className="block font-semibold mt-4">Password</label>
          <div className="relative">
            <input
              {...register("password")}
              type={passwordVisible ? "text" : "password"}
              className="bg-white w-full p-2 border rounded mt-1"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => togglePassword("password")}
              className="absolute right-3 top-4"
            >
              
            </button>
          </div>

          {isSubmitted && errors.password && (
            <div className="mt-2">
              <div className="flex items-center">
                <span className={`${passwordRequirements.minLength ? "text-green-600" : "text-red-600"} mr-1`}>
                  {passwordRequirements.minLength ? "✓" : "✗"}
                </span>
                <span className={`${passwordRequirements.minLength ? "text-green-600" : "text-red-600"} text-sm`}>
                  Contain minimum 8 characters
                </span>
              </div>
              <div className="flex items-center mt-1">
                <span className={`${passwordRequirements.hasUppercase ? "text-green-600" : "text-red-600"} mr-1`}>
                  {passwordRequirements.hasUppercase ? "✓" : "✗"}
                </span>
                <span className={`${passwordRequirements.hasUppercase ? "text-green-600" : "text-red-600"} text-sm`}>
                  Include at least one uppercase letter (A-Z)
                </span>
              </div>
              <div className="flex items-center mt-1">
                <span className={`${passwordRequirements.hasNumber ? "text-green-600" : "text-red-600"} mr-1`}>
                  {passwordRequirements.hasNumber ? "✓" : "✗"}
                </span>
                <span className={`${passwordRequirements.hasNumber ? "text-green-600" : "text-red-600"} text-sm`}>
                  Include at least one number (0-9)
                </span>
              </div>
            </div>
          )}

          <label className="block font-semibold mt-4">Confirm Password</label>
          <div className="relative">
            <input
              {...register("confirmPassword")}
              type={confirmPasswordVisible ? "text" : "password"}
              className="bg-white w-full p-2 border rounded mt-1"
              placeholder="Re-enter your password"
            />
            <button
              type="button"
              onClick={() => togglePassword("confirmPassword")}
              className="absolute right-3 top-4"
            >
              
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm flex items-center mt-1">
              <span className="mr-1">✗</span>
              Passwords must match
            </p>
          )}

          <button type="submit" className="w-full bg-amber-800 hover:bg-amber-900 text-white p-2 mt-4 rounded font-bold border border-black">
            Sign Up
          </button>

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-black font-semibold hover:underline"
            >
              Log In
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}