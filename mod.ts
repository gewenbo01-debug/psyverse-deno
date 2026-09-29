/**
 * Psyverse Worldview Compass
 *
 * 四轴罗盘×融合四级：每一级为谁而活。
 * Homepage: https://psyverse.fun
 */

export const axes = ["求真 Truth", "行善 Good", "造美 Beauty", "济世 World"];
export const rungs = ["工具 Tool", "助手 Assistant", "搭档 Partner", "共生 Symbiosis"];

export function compass(): string {
  return `Psyverse: ${axes.join(" × ")} — https://psyverse.fun`;
}
