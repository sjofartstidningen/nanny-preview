import { QueryParam } from './context/url';

const constructQuery = (queryParams: {
  [param: string]: QueryParam;
}): string => {
  const paramArray = Object.entries(queryParams).reduce(
    (acc: string[], [param, value]) => {
      switch (typeof value) {
        case 'boolean':
          return value ? [...acc, `${param}=true`] : acc;

        case 'number':
          return [...acc, `${param}=${value}`];

        case 'string':
          if (!Number.isNaN(Number.parseInt(value, 10)) || value.length > 0) {
            return [...acc, `${param}=${value}`];
          }

          return acc;

        default:
          return acc;
      }
    },
    [],
  );

  return paramArray.join('&');
};

export { constructQuery };
