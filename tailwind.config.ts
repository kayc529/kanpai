import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '360px',
      md: '640px',
      lg: '968px',
      xl: '1280px',
    },
    extend: {
      maxWidth: {
        checkbox: '350px',
        textField: '350px',
        dropdown: '350px',
        button: '255px',
      },
      width: { checkbox: '350px', textField: '350px', sidebar: '300px' },
      height: {
        'button-lg': '48px',
        'button-sm': '40px',
        checkbox: '40px',
        textField: '40px',
        dropdown: '40px',
        dropdownOption: '25px',
      },
      colors: {
        blue: '#635FC7',
        'blue-10': 'rgba(99,95,199,0.1)',
        'blue-25': 'rgba(99,95,199,0.25)',
        lightBlue: '#ABA4FF',
        black: '#000112',
        'black-25': 'rgba(0,1,18,0.25)',
        veryDarkGrey: '#20212C',
        darkGrey: '#282C37',
        linesDark: '#3E3F4E',
        mediumGrey: '#828FA3',
        'mediumGrey-25': 'rgba(130,143,163,0.25)',
        linesLight: '#E4EBFA',
        lightGrey: '#F4F7FD',
        white: '#FFFFFF',
        red: '#EA5555',
        lightRed: '#FF9898',
      },
      fontSize: {
        xs: '0.75rem', //12px
        sm: '0.813rem', //13px
        md: '0.938rem', //15px
        lg: '1.125rem', //18px
        xl: '1.5rem', //24px
      },
      lineHeight: {
        sm: '0.938rem', //15px
        md: '1.188rem', //19px
        lg: '1.438rem', //23px
        xl: '1.875rem', //30px
      },
      letterSpacing: {
        sm: '0.15px', //2.4px
      },
    },
  },
  plugins: [],
};
export default config;
