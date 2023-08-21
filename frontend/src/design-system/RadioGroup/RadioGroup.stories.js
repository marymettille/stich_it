import { RadioGroup } from ".";
import { useState } from "react";
import { action } from "@storybook/addon-actions";
//👇 This default export determines where your story goes in the story list
export default {
  title: "RadioGroup",
  component: RadioGroup,
};

export const DefaultRadioButton = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    action("onChange")(`toggled!`);
    setChecked(!checked);
  };

  return (
    <RadioGroup>
      <RadioGroup.Label>What Kind of Craft is This?</RadioGroup.Label>
      <RadioGroup.Radio
        labelText="sewing"
        onChange={handleChange}
        checked={checked}
        name="sewing"
        value="sewing"
      />
    </RadioGroup>
  );
};
