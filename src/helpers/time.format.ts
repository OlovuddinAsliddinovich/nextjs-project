export const calculateEstimatedTimeToRead = (text: string) => {
  const wordPerMinute = 150;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordPerMinute);
  return time;
};
