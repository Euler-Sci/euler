export const theme = {
  red: "red",
  white: "white",

  taupe: "#785964",
  morningBlue: "#82a7a6",
  black: "#000000",
  gunmetal: "#113241",
  lilac: "#B796AC",

  get primary() {
    return this.white;
  },
  get secondary() {
    return this.taupe;
  },
  get highlight() {
    return this.red;
  }

}
