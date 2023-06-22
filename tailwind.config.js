/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			BackGroundImage: {
				main: "url('	https://www.uber-assets.com/image/upload/f_auto,q_…a88f87/original/DotCom_Update_Earner_bg_med2x.jpg')",
				Help: " url('https://tb-static.uber.com/prod/bliss-helpdot/asset/images/landing-page-index.jpeg')",
			},
		},
	},
	plugins: [],
};

