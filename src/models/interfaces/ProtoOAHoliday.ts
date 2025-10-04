import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAHoliday extends ProtoMessage {
  holidayId: number;
  name: string;
  description?: string;
  scheduleTimeZone: string;
  holidayDate: number;
  isRecurring: boolean;
  startSecond?: number;
  endSecond?: number;
}
