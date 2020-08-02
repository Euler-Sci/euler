export const theme = {
  transition1: "0.2s",

  /* colors */
  red: "red",
  white: "white",

  salmon: "#fca17d",
  peach: "#F9DBBD",
  taupe: "#785964",
  morningBlue: "#82a7a6",
  black: "#000000",
  gunmetal: "#113241",
  darkGunmetal: "#081920",
  lilac: "#B796AC",

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
