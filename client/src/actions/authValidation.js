import { z } from "zod";

const signupSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  contact: z.string().regex(/^\d{10}$/),
  password: z.string(),
  avatar: z.custom((value) => value instanceof File),
});

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const signupValidation = (formData) => {
  try {
    const dataValidated = signupSchema.parse(formData);
    return { message: "validation passed", dataValidated };
  } catch (error) {
    return { message: "validation failed", error: error };
  }
};

export const loginValidation = (formData) => {
  try {
    const dataValidated = loginSchema.parse(formData);
    return {message: "validation passed", info: dataValidated};
  } catch (error) {
    return {message: "validation failded", error: error};

};
