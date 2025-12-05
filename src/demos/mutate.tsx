import React, { useEffect, useRef } from 'react';
import CountDown, { ActionType } from 'rc-countdown-view';
import { useSetState } from 'rc-hooks';

function Demo() {
  const countdownActionRef = useRef<ActionType>(undefined);
  const [state, setState] = useSetState({
    inputTime: 60 * 60,
    inputInterval: 1,
    inputFormat: 'HH:mm:ss',

    time: 60 * 60 * 1000,
    interval: 1000,
    format: 'HH:mm:ss'
  });

  useEffect(() => {
    countdownActionRef.current?.restart();
  }, [state.time]);

  // console.log('state:', state);

  return (
    <div>
      <div>
        <label>
          time:{' '}
          <input
            type="number"
            min="0"
            step="1"
            value={state.inputTime}
            onChange={(e) => {
              setState({
                inputTime: Number(e.target.value)
              });
            }}
            style={{ width: 100 }}
          />
        </label>
        秒
      </div>
      <div>
        <label>
          interval:{' '}
          <input
            type="number"
            min="0"
            step="1"
            value={state.inputInterval}
            onChange={(e) => {
              setState({
                inputInterval: Number(e.target.value)
              });
            }}
            style={{ width: 100 }}
          />
        </label>
        秒
      </div>
      <div>
        <label>
          format:{' '}
          <input
            type="input"
            value={state.inputFormat}
            onChange={(e) => {
              setState({
                inputFormat: e.target.value
              });
            }}
            style={{ width: 100 }}
          />
        </label>
      </div>
      <div>
        <button
          onClick={() => {
            setState((s) => ({
              time: s.inputTime * 1000,
              interval: s.inputInterval * 1000,
              format: s.inputFormat
            }));
          }}
        >
          确定修改并重新运行
        </button>
      </div>
      <div>
        <CountDown
          time={state.time}
          interval={state.interval}
          format={state.format}
          actionRef={countdownActionRef}
        />
      </div>
    </div>
  );
}

export default Demo;
