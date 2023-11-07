import { useState } from "react";

import {
  Button,
  Form,
  Input,
  RadioGroup,
  Textarea,
} from "../../../design-system";
import {
  useCreatePatternMutation,
  useGetAllCraftsQuery,
} from "../../services/StitchItApp/v1/index";

export const CreatePatternForm = () => {
  const [pattern, setPattern] = useState();
  const [selectedCraft, setSelectedCraft] = useState(1);
  const [createPattern] = useCreatePatternMutation();
  const { data: crafts } = useGetAllCraftsQuery();

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
        <RadioGroup>
          <RadioGroup.Label>What Kind of Craft is This?</RadioGroup.Label>
          {crafts.map((craft) => (
            <RadioGroup.Radio
              key={craft.id}
              labelText={craft.name}
              onChange={(e) => {
                setPattern({ ...pattern, craft_id: craft.id });
                setSelectedCraft(craft.id);
              }}
              checked={selectedCraft === craft.id}
              name={craft.name}
              value={craft.id}
            />
          ))}
        </RadioGroup>
        <Button onClick={handleClick} text="Submit" />
      </Form>
    </div>
  );
};
