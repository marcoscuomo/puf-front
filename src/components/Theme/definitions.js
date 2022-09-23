const baseColors = {
  black: '#000',
  red: '#ff647c',
  green: '#0bd9b3',
  blue: '#487fd9',
  yellow: '#ebc455',

}

const brandColors = {
  raisinBlack: '#16171c',
  caribbeanGreen: baseColors.green,
}

const colors = {
  ...baseColors,
  ...brandColors,
}

const fontSizes = [12, 12, 14, 16, 18, 21];
const spaces = [4, 8, 12, 16, 20, 24, 28, 32];

export const definitions = {
  colors,
  fontSizes,
  spaces,
}
