import React from "react";
import handleDeviceData from "../deviceDataSource";

export default function useDeviceDetect() {
  const [device, setDevice] = React.useState("");

  React.useEffect(() => {
    !!window.navigator && setDevice(handleDeviceData());
  }, []);

  return { device };
}
