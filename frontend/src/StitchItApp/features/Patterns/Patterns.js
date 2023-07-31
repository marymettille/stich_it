import { useGetAllPatternsQuery } from "../../services/StitchItApp/v1";
import { PatternCard } from "./PatternCard";
import { Loading } from "../../../design-system";

import "./Patterns.scss";

export const Patterns = () => {
  const { data: patterns, isLoading } = useGetAllPatternsQuery();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="patterns-container">
      {patterns.map((pattern) => (
        <PatternCard key={pattern.id} pattern={pattern} />
      ))}
    </div>
  );
};
