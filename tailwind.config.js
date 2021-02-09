const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/js/**/*.vue", "./src/**/*.html", +"./src/**/*.js"],

    theme: {
        extend: {
            fontFamily: {
                mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
            },
            fontSize: {
                xxs: [".65rem", "1rem"],
            },
        },
        customForms: (theme) => ({
            default: {
                input: {
                    borderWidth: theme("borderWidth.0"),
                    backgroundColor: theme("colors.gray.200"),
                },
            },
        }),
    },

    variants: {
        extend: {
            opacity: ["disabled"],
            borderColor: ["focus"],
            borderWidth: ["focus", "hover"],
            margin: ["last"],
        },
    },

    plugins: [
        // require('@tailwindcss/forms'),
        require("@tailwindcss/typography"),
    ],
};
