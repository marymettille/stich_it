import axios from "axios";
import { useEffect } from "react";

export const Patterns = () => {
  useEffect(() => {
    axios.get("/api/v1/patterns").then(({ data }) => {
      console.log(data);
    });
  });

  return (
    <>
      <p>Projects will go here.</p>
    </>
  );
};
