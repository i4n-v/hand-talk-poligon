import { CustomParamsSerializer } from 'axios';

const querySerializer: CustomParamsSerializer = (query) => {
  const exceptionValues = query.nullable ? [null, 0, false] : [0, false];
  delete query.nullable;

  const queryParams = new URLSearchParams();

  if (query instanceof Object) {
    const queryEntries = Object.entries(query);

    queryEntries.forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (exceptionValues.includes(item) || Boolean(item)) {
            queryParams.append(key, String(item));
          }
        });
      } else if (exceptionValues.includes(value) || Boolean(value)) {
        queryParams.append(key, String(value));
      }
    });
  }

  return queryParams.toString();
};

export default querySerializer;
