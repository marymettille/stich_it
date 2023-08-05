import { Button } from "./Button";
//👇 This default export determines where your story goes in the story list
export default {
  title: "Button",
  component: Button,
};

// const Template = (props) => <Button {...props} />;

export const Primary = {
  args: {
    text: "I am cute",
  },
};
