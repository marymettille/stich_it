import { Textarea } from ".";
import { Form } from "../Form";
//👇 This default export determines where your story goes in the story list
export default {
  title: "Textarea",
  component: Textarea,
};

export const DefaultTextarea = () => {
  return (
    <>
      <Textarea
        name="description"
        placeholderText="Tell us about the pattern!"
      />
    </>
  );
};

export const TextareaWithLabel = () => {
  return (
    <>
      <Textarea
        name="description"
        placeholderText="Tell us about the pattern!"
        labelText="Description:"
      />
    </>
  );
};
