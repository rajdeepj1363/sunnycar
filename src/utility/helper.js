export const getNextDay = (dateStr) => {
  const date = new Date(dateStr);
  date.setDate(date.getDate() + 1);
  return date.toISOString().split("T")[0]; // format: yyyy-mm-dd
};
