
const MODULES = {
  vision: 'MODULES.vision',
  monitor: 'MODULES.monitor'
};

import useMODULES.monitorStream from '../useMODULES.monitorStream';

/**
 * Stream Registry = control room source map
 * Each module becomes a live stream node
 */

export const StreamRegistry = {
  afrimonitor: useMODULES.monitorStream
};
