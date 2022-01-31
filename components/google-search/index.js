// Server

const endpoints = {
  '/': {
    get: () => 'hello world',
  },
  '/autocomplete': {
    get: getAutoCompleteHandler,
  },
};

// API

function getRandomString({ length }) {}

function getRandomInteger({ min, max }) {}

function generateSuggestions(prefix) {
  const RATIO_EXACT_MATCH = 0.3;
  const RATIO_AUTOCORRECT = 0.1;

  if (Math.random() < RATIO_AUTOCORRECT) {
    return getRandomString({
      length: getRandomInteger({ min: 1, max: prefix.length }),
    });
  }

  if (Math.random() < RATIO_EXACT_MATCH) {
    return prefix;
  }

  return (
    prefix + getRandomString({ length: getRandomInteger({ min: 1, max: 10 }) })
  );
}

function getAutoCompleteHandler() {
  const MAX_CHARS = 10;
  const NUM_AUTOCOMPLETE_RESULTS = 10;
  const RATIO_AUXILIARY_DATA = 0.1;

  if (data.length > MAX_CHARS) {
    return [];
  }

  const results = [];

  while (results.length < NUM_AUTOCOMPLETE_RESULTS) {
    const suggestion = generateSuggestions(data);

    if (Math.random() < RATIO_AUXILIARY_DATA) {
      results.push({
        suggestion,
        auxillery: getRandomString({length: getRandomInteger({min: 5, max: 15})});
      });
    } else {
      results.push({suggestion, auxillery: ""})
    }
  }

  return results;
}

function getFunction(url, data, cb) {
  const endpoint = url.substring(url.indexOf('/'), url.length);

  cb(endpoints[endpoint]['get'](data));
}

const api = {
  get: getFunction,
};
