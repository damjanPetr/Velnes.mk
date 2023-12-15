import { formatDuration, format } from "date-fns";
export const capitalizeFirstLetter = (query: string): string => {
  return query.charAt(0).toUpperCase() + query.substring(1);
};

export const calcTime = (s: string) => {
  let minutes = 0;
  if (s[1] == "1") {
    minutes += 60;
  }
  const min = parseInt(`${s[3]}${s[4]}`);
  minutes += min;

  return minutes;
};

export function minutesToHours(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const formattedDuration = `${String(hours).padStart(2, "0")} hour${
    hours !== 1 ? "s" : ""
  } and ${remainingMinutes} minute${remainingMinutes !== 1 ? "s" : ""}`;

  return `Converted Duration: ${formattedDuration}`;
}

const newDate = new Date();
newDate.setHours(4, 30, 0, 0);

// Format hours with leading zeros
const formattedHours = format(newDate, "HH");

console.log("Formatted Hours:", formattedHours);
