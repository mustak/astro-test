import { DateTime } from 'luxon';

export function formatDate(d: string) {
  const frontMatterDate = DateTime.fromISO(d);
  return frontMatterDate.toLocaleString(DateTime.DATE_HUGE);

}