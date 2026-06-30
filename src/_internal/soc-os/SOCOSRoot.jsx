import React from "react";
import SOCBootLoader from "./boot/SOCBootLoader";

export default function SOCOSRoot() {
  const windows = [
    { id: "warroom" },
    { id: "dag" },
    { id: "incidents" }
  ];

  return <SOCBootLoader windows={windows} />;
}
