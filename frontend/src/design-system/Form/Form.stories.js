import { useState } from "react";

import { Form } from "./Form";
import { Input, Button, Textarea, RadioGroup } from "../";
import { action } from "@storybook/addon-actions";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Form",
  component: Form,
};

const Template = (args) => {
  return (
    <Form>
      <Input name={args.name} placeholderText={args.placeholderText} />
    </Form>
  );
};

export const DefaultForm = Template.bind({});
DefaultForm.args = {
  name: "name",
  placeholderText: "Sally",
};

export const FormWithLabel = () => {
  return (
    <>
      <Form.Label>Submit a New Pattern!</Form.Label>
      <Form>
        <Input
          name="pattern"
          placeholderText="Pattern"
          labelText="Pattern Name:"
        />
      </Form>
    </>
  );
};

export const VerticalForm = () => {
  const [craft, setCraft] = useState("1");

  const handleChange = (e) => {
    action("onChange")(`toggled!`);
    setCraft(e.target.value);
  };
  return (
    <>
      <Form.Label>Submit a New Pattern!</Form.Label>
      <Form vertical>
        <Input
          name="pattern"
          placeholderText="Pattern"
          labelText="Pattern Name:"
        />
        <Input
          name="author"
          placeholderText="Author"
          labelText="Author Name:"
        />
        <Textarea
          name="description"
          placeholderText="Tell us about the pattern!"
          labelText="Description:"
        />
        <RadioGroup>
          <RadioGroup.Label>What Kind of Craft is This?</RadioGroup.Label>
          <RadioGroup.Radio
            labelText="English Paper Piecing"
            onChange={handleChange}
            checked={craft === "1"}
            name="English Paper Piecing"
            value={1}
          />
          <RadioGroup.Radio
            labelText="Machine Quilting"
            onChange={handleChange}
            checked={craft === "2"}
            name="Machine Quilting"
            value={2}
          />
        </RadioGroup>
        <Button onClick={action("Clicked!")} text="Submit" />
      </Form>
    </>
  );
};

export const HorizontalForm = () => {
  return (
    <>
      <Form.Label>Submit a New Pattern!</Form.Label>
      <Form horizontal>
        <Input name="pattern" placeholderText="Name" />
        <Button onClick={action("Clicked!")} text="Submit" />
      </Form>
    </>
  );
};

export const VerticalFormWithLabelAndDescription = () => {
  const [craft, setCraft] = useState("1");

  const handleChange = (e) => {
    action("onChange")(`toggled!`);
    setCraft(e.target.value);
  };

  return (
    <>
      <Form.Label>Submit a New Pattern!</Form.Label>
      <Form.Description>
        A pattern is a set of instructions to make something OH SO COOL!
      </Form.Description>
      <Form vertical>
        <Input
          name="pattern"
          placeholderText="Pattern"
          labelText="Pattern Name:"
        />
        <Input
          name="author"
          placeholderText="Author"
          labelText="Author Name:"
        />
        <Textarea
          name="description"
          placeholderText="Tell us about the pattern!"
          labelText="Description:"
        />
        <RadioGroup>
          <RadioGroup.Label>What Kind of Craft is This?</RadioGroup.Label>
          <RadioGroup.Radio
            labelText="English Paper Piecing"
            onChange={handleChange}
            checked={craft === "1"}
            name="English Paper Piecing"
            value={1}
          />
          <RadioGroup.Radio
            labelText="Machine Quilting"
            onChange={handleChange}
            checked={craft === "2"}
            name="Machine Quilting"
            value={2}
          />
        </RadioGroup>
        <Button onClick={action("Clicked!")} text="Submit" />
      </Form>
    </>
  );
};
