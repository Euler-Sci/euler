export const theme = {
  transition1: "0.2s",

  /* colors */
  red: "red",
  white: "white",

  black: "#000000",
  darkGunmetal: "#081920",
  gunmetal: "#113241",
  taupe: "#785964",
  morningBlue: "#82A7A6",
  salmon: "#FCA17D",
  lilac: "#B796AC",
  peach: "#F9DBBD",

  get primary() {
    return this.white;
  },
  get secondary() {
    return this.lilac;
  },
  get highlight() {
    return this.salmon;
  }
}
