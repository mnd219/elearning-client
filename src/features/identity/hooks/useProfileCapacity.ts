import { Grid } from "antd";

export function useProfileCapacity() {
  const screens = Grid.useBreakpoint();

  if (screens.xl) return 4;
  if (screens.md) return 3;

  return 2;
}