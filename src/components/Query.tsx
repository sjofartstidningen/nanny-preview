import React, { useMemo } from 'react';
import { useUrl } from '../context/url';
import { constructQuery } from '../utils';

function Query() {
  const [state] = useUrl();

  const query = useMemo(() => constructQuery(state.queryParams), [
    state.queryParams,
  ]);

  return (
    <div>
      <span>{state.url}</span>
      {query.length > 0 && <span>?{query}</span>}
    </div>
  );
}

export { Query };
