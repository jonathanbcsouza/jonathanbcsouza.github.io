export function setTextLightness(timeInPercent, setTextColour) {
  const setLightness = 100 - timeInPercent / 2
  setTextColour(setLightness)
}
