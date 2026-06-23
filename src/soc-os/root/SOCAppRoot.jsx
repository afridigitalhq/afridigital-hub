import React from "react";
import SOCBootLoader from "../boot/SOCBootLoader";
import WarRoomShell from "../../warroom/WarRoomShell";

export default function SOCAppRoot() {
  const [booted, setBooted] = React.useState(false);

  return (
    <>
      {!booted ? (
        <SOCBootLoader windows={[]} onFinish={() => setBooted(true)} />
      ) : (
        <WarRoomShell />
      )}
    </>
  );
}
