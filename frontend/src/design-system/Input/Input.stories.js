import { Input } from "./Input";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Input",
  component: Input,
};

export const InputWithLabel = {
  args: {
    labelText: "First Name:",
    name: "name",
    placeholderText: "Sally",
  },
};

export const InputWithoutLabel = {
  args: {
    name: "name",
    placeholderText: "Sally",
  },
};
