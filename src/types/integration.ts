/*
 * @Author 舜君
 * @LastEditTime 2021-10-14 19:24:08
 * @Description
 */

export interface Integration {
  name: string;

  setupOnce(): void;
}
