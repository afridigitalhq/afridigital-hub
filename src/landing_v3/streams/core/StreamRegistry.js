import useAfriVisionStream from '../useAfriVisionStream';

/**
 * Stream Registry = control room source map
 * Each module becomes a live stream node
 */

export const StreamRegistry = {
  afrivision: useAfriVisionStream
};
