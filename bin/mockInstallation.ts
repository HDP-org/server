import { createId } from "@paralleldrive/cuid2";
import { faker } from "@faker-js/faker";

interface IngestData {
  TMP?: string;
  pH?: string;
  ORP?: string;
  K?: string;
  DO?: string;
}

const frequency = 1000 * 5; // 5 seconds
const installations = [createId(), createId(), createId()];

for (const installation of installations) {
  setInterval(() => {
    const data: IngestData = {
      TMP: faker.number
        .float({
          min: -10,
          max: 50,
        })
        .toString(),
      pH: faker.number
        .float({
          min: 0,
          max: 14,
        })
        .toString(),
      ORP: faker.number
        .float({
          min: -1000,
          max: 1000,
        })
        .toString(),
      K: faker.number
        .float({
          min: 0,
          max: 1000,
        })
        .toString(),
      DO: faker.number
        .float({
          min: 0,
          max: 20,
        })
        .toString(),
    };

    fetch(
      `http://localhost:4000/ingest/${installation}/?${new URLSearchParams(
        data,
      )}`,
      {
        method: "POST",
      },
    );
  }, frequency);
}
