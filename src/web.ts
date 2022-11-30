import { WebPlugin } from '@capacitor/core';

import type { egtsMainPlugin } from './definitions';

export class egtsMainWeb extends WebPlugin implements egtsMainPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
