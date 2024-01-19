const path = require("path");
export {};

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@HOCs": path.resolve(__dirname, "src/HOCs"),
      "@store": path.resolve(__dirname, "src/store"),
      "@Contexts": path.resolve(__dirname, "src/Contexts"),
      "@svg": path.resolve(__dirname, "src/components/SvgComponent"),
    },
  },
};
