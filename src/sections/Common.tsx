import React, { FormEventHandler } from 'react';

interface CommonProps {
  zoom: {
    value: string;
    onChange: FormEventHandler<HTMLInputElement>;
  };
  quality: {
    value: string;
    onChange: FormEventHandler<HTMLInputElement>;
  };
  webp: {
    checked: boolean;
    onChange: FormEventHandler<HTMLInputElement>;
  };
}

function Common({ zoom, quality, webp }: CommonProps) {
  return (
    <div>
      <h3>Common settings</h3>

      <div>
        <div>
          <label htmlFor="common-zoom">
            Zoom <code>(zoom={'<number>'})</code>
          </label>
          <input id="common-zoom" name="zoom" type="number" {...zoom} />
        </div>
        <div>
          <label htmlFor="common-quality">
            Quality <code>(quality={'<number>'})</code>
          </label>
          <input
            id="common-quality"
            name="quality"
            type="number"
            {...quality}
          />
        </div>
      </div>

      <div>
        <div>
          <input id="common-webp" type="checkbox" name="webp" {...webp} />
          <label htmlFor="common-webp">
            Use Webp <code>(webp={'<true|false|1|0>'})</code>
          </label>
        </div>
      </div>
    </div>
  );
}

export { Common };
