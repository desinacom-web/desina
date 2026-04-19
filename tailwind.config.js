/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        // ده التعريف اللي هيخليك تستخدم كلاس font-cairo في أي مكان
        'cairo': ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
