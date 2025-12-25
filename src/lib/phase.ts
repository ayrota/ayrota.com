export type Phase =
  | 'orientation'
  | 'drift'
  | 'learning'
  | 'correction'
  | 'stability';

export function phaseFromScroll(
  scrollY: number,
  totalHeight: number
): Phase {
  const p = scrollY / totalHeight;

  if (p < 0.15) return 'orientation';
  if (p < 0.35) return 'drift';
  if (p < 0.6) return 'learning';
  if (p < 0.8) return 'correction';
  return 'stability';
}