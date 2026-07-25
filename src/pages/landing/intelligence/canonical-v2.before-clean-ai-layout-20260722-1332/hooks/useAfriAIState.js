import { useEffect, useState } from "react";
import afriAILandingRuntime from "../runtime/AfriAILandingRuntime";

/**
 * AfriAI UI State Hook
 *
 * OWNER:
 * React state exposure only.
 *
 * RULE:
 * No intelligence logic.
 * No orchestration.
 * Runtime remains the source of truth.
 */

export default function useAfriAIState(){

  const [state,setState] = useState(
    afriAILandingRuntime.state
  );


  useEffect(()=>{

    const unsubscribe =
      afriAILandingRuntime.subscribe(
        setState
      );


    return unsubscribe;

  },[]);


  return state;
}
