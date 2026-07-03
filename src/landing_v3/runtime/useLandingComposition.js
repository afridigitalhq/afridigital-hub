import useMergedLandingSections from "../composition/merge/mergeLandingSections";

export default function useLandingComposition() {
  const { sections, loading } = useMergedLandingSections();

  return {
    sections,
    loading,
    isReady: !loading
  };
}
