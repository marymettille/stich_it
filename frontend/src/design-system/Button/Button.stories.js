import { Button } from "./Button";
import "./button.css";
//👇 This default export determines where your story goes in the story list
export default {
  title: "Button",
  component: Button,
};

// const Template = (props) => <Button {...props} />;

export const Primary = {
  args: {
    children: "I am cute",
  },
};
