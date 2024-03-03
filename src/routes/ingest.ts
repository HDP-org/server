import { isCuid } from "@paralleldrive/cuid2";
import {} from "typia";
import { app, influxdb } from "../lib/index.js";
import { Point } from "@influxdata/influxdb3-client-browser";

interface IngestData {
  TMP?: number;
  pH?: number;
  ORP?: number;
  K?: number;
  DO?: number;
}

app.post("/ingest/:installation/", (req, res) => {
  if (isCuid(req.params.installation) === false) {
    return res.sendStatus(400);
  }

  const data = req.query as IngestData;

  influxdb.write(
    Point.measurement("sensor_data")
      .setTag("install_id", req.params.installation)
      .setFloatField("TMP", data.TMP || 0)
      .setFloatField("pH", data.pH || 0)
      .setFloatField("ORP", data.ORP || 0)
      .setFloatField("K", data.K || 0)
      .setFloatField("DO", data.DO || 0),
  );

  res.sendStatus(200);
});
