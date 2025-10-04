import type { ProtoOATradeSide } from "../enums/ProtoOATradeSide.ts";
import type { ProtoOADealStatus } from "../enums/ProtoOADealStatus.ts";
import type { ProtoOAClosePositionDetail } from "./ProtoOAClosePositionDetail.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOADeal extends BaseMessage {
  dealId: number;
  orderId: number;
  positionId: number;
  volume: number;
  filledVolume: number;
  symbolId: number;
  createTimestamp: number;
  executionTimestamp: number;
  utcLastUpdateTimestamp?: number;
  executionPrice?: number;
  tradeSide: ProtoOATradeSide;
  dealStatus: ProtoOADealStatus;
  marginRate?: number;
  commission?: number;
  baseToUsdConversionRate?: number;
  closePositionDetail?: ProtoOAClosePositionDetail;
  moneyDigits?: number;
}
