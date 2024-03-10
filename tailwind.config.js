/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "100vh-360px": "calc(100vh - 365px)",
        "100vh-178px": "calc(100vh - 178px)",
        "100vh-130px": "calc(100vh - 130px)",
        "100vh-180px": "calc(100vh - 180px);",
        "100vh-194px": "calc(100vh - 194px)",
      },
      width: {
        "100vw-510px": "calc(100vw - 510px)",
        "100vw-427px": "calc(100vw - 427px)",
      },
      backgroundColor: {
        bgSideBar: "rgba(240, 244, 250, 1)",
        bgLogo: " rgba(175, 187, 247, 1)",
        bgMassage: "rgba(91, 150, 247, 1)",
        bgInputSearch: "rgba(234, 242, 254, 1)",
        bgChatList: "rgba(248, 250, 255, 1)",
        bgHoverAvatar: "rgba(0, 0, 0, 0.2)",
        bgHoverAvatar5: "rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        "20px": "20px",
      },
      textColor: {
        allChats: "rgba(103, 102, 103, 1)",
        lastMassage: "rgba(124, 124, 125, 1)",
        timeMassage: "rgba(124, 124, 125, 1)",
      },
      colors: {
        blueItem: "rgba(91, 150, 247, 1)",
        active: "rgba(91, 150, 247, 1)",
      },
    },
  },
  plugins: [],
};
