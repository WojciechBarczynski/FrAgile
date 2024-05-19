const paddingSize = {
  xxSmall: 4,
  xSmall: 8,
  small: 12,
  medium: 16,
  mediumBig: 24,
  big: 32,
  xBig: 48,
  xxBig: 64,
};

const borderRadiusSize = {
  small: 4,
  medium: 16,
  big: 32,
};

const fontSize = {
  buttonMobileFontSize: 20,
  baseMobileFontSize: 16,
  baseFontSize: 14,
  smallFontSize: 12,
  h1MobileFontSize: 50,
  h2MobileFontSize: 32,
};

type FontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export { paddingSize, fontSize, borderRadiusSize };
export type { FontWeight };
