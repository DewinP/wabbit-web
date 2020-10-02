import * as relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
dayjs.extend(relativeTime);

export const timeSinceCreated = (date: string) => {
  let newDate = dayjs(parseInt(date));
  return dayjs(dayjs(newDate)).from();
};
