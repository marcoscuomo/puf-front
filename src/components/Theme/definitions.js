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

const fontSizes = {
  small: '0.8rem',
  medium: '1rem',
  large: '2rem',

}

export const definitions = {
  colors,
  fontSizes,
}
