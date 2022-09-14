import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

export default function parseDate(value) {
  const date = new Date(value);
  return date.toDateString().slice(4);
}

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");

export const timeSince = (date) => {
  return timeAgo.format(new Date(date), "mini-now");
};
