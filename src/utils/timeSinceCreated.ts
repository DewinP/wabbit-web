import * as relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
dayjs.extend(relativeTime);

export const timeSinceCreated = (date: string | undefined) => {
  if (typeof date === "undefined") {
    return "sometime ago";
  }

  let newDate = dayjs(parseInt(date));
  return dayjs(dayjs(newDate)).from();
};
