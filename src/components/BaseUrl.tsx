import React, { FormEventHandler } from 'react';
import { useUrl, ActionType } from '../context/url';

function BaseUrl() {
  const [state, dispatch] = useUrl();

  const handleChange: FormEventHandler<HTMLInputElement> = e => {
    dispatch({
      type: ActionType.SET_URL,
      payload: {
        url: e.currentTarget.value,
      },
    });
  };

  return (
    <div>
      <label htmlFor="base-url">Url</label>
      <input
        id="base-url"
        type="url"
        value={state.url}
        onChange={handleChange}
      />
    </div>
  );
}

export { BaseUrl };
