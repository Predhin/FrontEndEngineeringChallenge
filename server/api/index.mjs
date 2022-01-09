import data from './data.mjs';

// mock api search
export default function search(query) {
  const results = data.filter((record) => {
    let keep = false;

    Object.keys(record).forEach((key) => {
      const val = record[key].toString();

      if (val.toLowerCase().includes(query.toLowerCase())) {
        keep = true;
      }
    });

    return keep;
  });

  // setting a more realistic (random) timeout
  return new Promise((resolve) => {
    setTimeout(() => resolve(results), Math.ceil(Math.random() * 250));
  });
}
