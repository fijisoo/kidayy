export const getDayOfAWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getTimeOfADay = (today) => {
  if (today < 12) {
    return "morning";
  }
  if (today < 18) {
    return "afternoon";
  }
  return "evening";
};
