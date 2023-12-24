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

export function getRandomColor() {
  // Generate random values for red, green, and blue components
  const randomRed = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const randomGreen = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const randomBlue = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");

  // Combine the components into a hexadecimal color code
  const randomColor = `#${randomRed}${randomGreen}${randomBlue}`;

  return randomColor;
}
