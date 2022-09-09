export default function parseDate(value) {
  const date = new Date(value);
  return date.toDateString().slice(4);
}
