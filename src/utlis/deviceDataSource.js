import { isMobile, isTablet } from "react-device-detect";

const handleDeviceData = (data) => {
  if (isMobile) {
    if (!data) {
      return "mobile";
    }
    return data.mobile;
  }
  if (isTablet) {
    if (!data) {
      return "tablet";
    }
    return data.tablet || "tablet";
  }
  if (!data) {
    return "desktop";
  }
  return data.desktop || "desktop";
};

export default handleDeviceData;
