import { InfluxDBClient } from "@influxdata/influxdb3-client-browser";

export const influxdb = new InfluxDBClient({
  host: process.env.INFLUXDB_HOST,
  token: process.env.INFLUXDB_TOKEN,
  database: process.env.INFLUDXB_DATABASE,
});
