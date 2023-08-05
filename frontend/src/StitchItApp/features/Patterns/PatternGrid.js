import { useGetAllPatternsQuery } from "../../services/StitchItApp/v1";
import { PatternCard } from "./PatternCard";
import { Loading } from "../../../design-system";

import "./PatternGrid.scss";

export const PatternGrid = () => {
  const { data: patterns, isLoading } = useGetAllPatternsQuery();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="pattern-grid">
        {patterns.map((pattern) => (
          <PatternCard key={pattern.id} pattern={pattern} />
        ))}
      </div>
    </>
  );
};
