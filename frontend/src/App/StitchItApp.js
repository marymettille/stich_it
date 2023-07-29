import { StitchItRouter } from "./StitchItRouter";

// This is the entry point for the Stitch-It App.
export const StitchItApp = () => {
  return (
    <>
      <h1>Time to Get Stitching!</h1>
      <div>
        <StitchItRouter />
      </div>
    </>
  );
};
