export default function(timeStamp) {
  const date = new Date(+timeStamp);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date
    .getDate()
    .toString()
    .padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}
