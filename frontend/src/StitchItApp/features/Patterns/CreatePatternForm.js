import { useState } from "react";

import { Button, Form, Input, Textarea } from "../../../design-system";
import { useCreatePatternMutation } from "../../services/StitchItApp/v1/index";

export const CreatePatternForm = () => {
  const [pattern, setPattern] = useState();
  const [createPattern] = useCreatePatternMutation();

  const handleClick = () => {
    createPattern(pattern);
  };

  return (
    <div className="create-pattern-form">
      <Form.Label>Submit a New Pattern!</Form.Label>
      <Form vertical>
        <Input
          name="pattern"
          placeholderText="Pattern"
          labelText="Pattern Name:"
          onChange={(e) => setPattern({ ...pattern, name: e.target.value })}
        />
        <Input
          name="author"
          placeholderText="Author"
          labelText="Author Name:"
          onChange={(e) => setPattern({ ...pattern, author: e.target.value })}
        />
        <Textarea
          name="description"
          placeholderText="Tell us about the pattern!"
          labelText="Description:"
          onChange={(e) =>
            setPattern({ ...pattern, description: e.target.value })
          }
        />
        <Button onClick={handleClick} text="Submit" />
      </Form>
    </div>
  );
};
