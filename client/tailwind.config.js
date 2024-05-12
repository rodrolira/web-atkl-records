import flowbite from 'flowbite-react'

/** @type {import('tailwindcss').Config} */

export default {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/lib/esm/**/*.js',
        './node_modules/tw-elements-react/dist/js/**/*.js',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        // eslint-disable-next-line no-undef
        require(flowbite),
    ],
}
