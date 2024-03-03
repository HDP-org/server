import { builder } from "../lib/index.js";

export class DataPoint {
  TMP: number;
  pH: number;
  OR: number;
  K: number;
  DO: number;

  constructor(data: typeof DataPoint.prototype) {
    this.TMP = data.TMP;
    this.pH = data.pH;
    this.OR = data.OR;
    this.K = data.K;
    this.DO = data.DO;
  }
}

export class Data {
  id: string;
  data: DataPoint[];

  constructor(data: typeof Data.prototype) {
    this.id = data.id;
    this.data = data.data;
  }
}

builder.objectType(Data, {
  name: "Data",
  fields: (t) => ({
    id: t.exposeID("id"),
    data: t.expose("data", {
      type: DataPoint,
    }),
  }),
});

builder.objectType(DataPoint, {
  name: "DataPoint",
  fields: (t) => ({
    TMP: t.exposeFloat("TMP"),
    pH: t.exposeFloat("pH"),
    OR: t.exposeFloat("OR"),
    K: t.exposeFloat("K"),
    DO: t.exposeFloat("DO"),
  }),
});
