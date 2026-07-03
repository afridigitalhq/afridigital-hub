import React from 'react';
import { StreamRegistry } from '../../streams/core/StreamRegistry';
import AfriVisionLiveFeed from '../../modules/live/AfriVisionLiveFeed';

export default function ControlRoom() {
  return (
    <div className='control-room'>
      <h2>🧠 AfriDigital Control Room</h2>

      <div className='grid'>
        <div className='tile'>
          <AfriVisionLiveFeed />
        </div>
      </div>
    </div>
  );
}
