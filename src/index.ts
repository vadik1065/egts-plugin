import { registerPlugin } from '@capacitor/core';

import type { egtsMainPlugin } from './definitions';

const egtsMain = registerPlugin<egtsMainPlugin>('egtsMain', {
  web: () => import('./web').then(m => new m.egtsMainWeb()),
});

export * from './definitions';
export { egtsMain };
