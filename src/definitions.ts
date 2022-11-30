export interface egtsMainPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
