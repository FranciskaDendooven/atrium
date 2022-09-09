const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                darkblue: "#16232e",
                lightBlue: "#67b4bc",
                redOrange: "#b24333",
                brown: "#9a463a",
                white: "#fffcf8",
                black: "#000000",
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
