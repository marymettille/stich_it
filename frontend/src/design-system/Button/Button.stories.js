import { Button } from "./Button";
import { action } from "@storybook/addon-actions";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Button",
  component: Button,
};

export const DefaultButton = () => {
  return (
    <>
      <Button text="I'm such a cute button!" onClick={action("Clicked!")} />
    </>
  );
};
