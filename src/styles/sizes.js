export default {
  up() {},
  down(size) {
    const sizes = {
      xs: "59.375em",
      sm: "50em",
      md: "41.25em",
      lg: "31.25em",
      xl: "21.875em"
    };
    return `@media (max-width: ${sizes[size]})`;
  }
};