import { Form } from "./Form";
import { Input } from "../";
import { Button } from "../";
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
        <Button onClick={action("Clicked!")}>Submit</Button>
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
        <Button onClick={action("Clicked!")}>Submit</Button>
      </Form>
    </>
  );
};

export const VerticalFormWithLabelAndDescription = () => {
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
        <Button onClick={action("Clicked!")}>Submit</Button>
      </Form>
    </>
  );
};
