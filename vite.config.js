import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/flightrez/",
  plugins: [tailwindcss()],
});
