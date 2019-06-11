import React, { Fragment, useEffect, FormEventHandler } from 'react';
import { useInput, useCheckbox } from '@fransvilhelm/hooks';
import { useUrl, ActionType } from '../context/url';
import { Common } from './Common';

function Standard() {
  const width = useInput('400');
  const height = useInput('400');
  const crop = useCheckbox(false);

  const zoom = useInput();
  const quality = useInput();
  const webp = useCheckbox(false);

  const [, dispatch] = useUrl();

  useEffect(() => {
    dispatch({ type: ActionType.RESET_QUERY });
  }, [dispatch]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    dispatch({
      type: ActionType.ADD_QUERY_PARAM,
      payload: {
        w: width.value,
        h: height.value,
        crop: crop.checked,
        zoom: zoom.value,
        quality: quality.value,
        webp: webp.checked,
      },
    });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="standard-w">
              Width <code>(w={'<number>'})</code>
            </label>
            <input id="standard-w" type="number" name="w" {...width} />
          </div>
          <div>
            <label htmlFor="standard-h">
              Height <code>(h={'<number>'})</code>
            </label>
            <input id="standard-h" type="number" name="h" {...height} />
          </div>
        </div>

        <div>
          <div>
            <input id="standard-crop" type="checkbox" name="crop" {...crop} />
            <label htmlFor="standard-crop">
              Crop <code>(crop={'<true|false|1|0>'})</code>
            </label>
          </div>
        </div>

        <Common zoom={zoom} quality={quality} webp={webp} />

        <div>
          <button type="submit">Apply</button>
        </div>
      </form>
    </Fragment>
  );
}

export default Standard;
