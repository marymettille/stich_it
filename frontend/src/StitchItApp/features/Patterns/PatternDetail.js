import { useParams } from "react-router-dom";
import { useGetPatternQuery } from "../../services/StitchItApp/v1";

import { Loading } from "../../../design-system";
export const PatternDetail = () => {
  const { id } = useParams();

  const { data: pattern, isLoading } = useGetPatternQuery({ id });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="pattern-detail-view">
      <h3>{pattern.name}</h3>
      <p>{pattern.author}</p>
      <p>{pattern.description}</p>
    </div>
  );
};
