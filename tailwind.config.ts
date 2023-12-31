// import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const {nextui} = require("@nextui-org/react");

// export default {
//   content: [
//     "./src/**/*.tsx",
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["var(--font-sans)", ...fontFamily.sans],
//       },
//     },
//   },
//   darkMode: "class",
//   plugins: [nextui()],
// } satisfies Config;



import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
            fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [nextui()],
}
export default config