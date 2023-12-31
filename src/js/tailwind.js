

tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"'],
        Verdana: ['"Verdana"'],
      },

      fontSize: {
        "5xs": "0.3996373225rem",
        "4xs": "0.4555865477rem",
        "3xs": "0.5193686644rem",
        "2xs": "0.5920802774rem",
        xs: "0.6749715162rem",
        sm: "0.7694675285rem",
        md: "0.8771929825rem",
        nm: "1rem",
        lg: "1.14rem",
        xl: "1.2996rem",
        "2xl": "1.481544rem",
        "3xl": "1.68896016rem",
        "4xl": "1.9254145824rem",
        "5xl": "2.1949726239rem",
      },
      spacing: {
        "5xs": "0.3996373225rem",
        "4xs": "0.4555865477rem",
        "3xs": "0.5193686644rem",
        "2xs": "0.5920802774rem",
        xs: "0.6749715162rem",
        sm: "0.7694675285rem",
        md: "0.8771929825rem",
        nm: "1rem",
        lg: "1.14rem",
        xl: "1.2996rem",
        "2xl": "1.481544rem",
        "3xl": "1.68896016rem",
        "4xl": "1.9254145824rem",
        "5xl": "2.1949726239rem",
      },
      colors: {
        util: {
          success: "#2CC966",
          OnSuccess: "#0B3219",

          error: "#D74747",
          OnError: "#320B0B",

          warning: "#D7B447",
          OnWarning: "#32280B",

          info: "#95A1B2",
          Oninfo: "#1A1E23",
        },
        onAccent: "#171C17",
        accent: {
          light: "#22d3ee",
          base: "#22d3ee",
          dark: "#22d3ee",
        },
        dark: {
          surface_1: "#040404",
          surface_2: "#0A0A0A",
          surface_3: "#0F0F0F",
          surface_4: "#141414",
          surface_5: "#1A1A1A",
          surface_6: "#1F1F1F",
          surface_7: "#242424",
          surface_8: "#292929",
          disabled: "#849A84",
          muted: "#9AAC9A",
          passive: "#B1BFB1",
          active: "#DDE3DD",
        },
        light: {
          surface_1: "#EFF1EF",
          surface_2: "#D8DED8",
          surface_3: "#C3CBC3",
          surface_4: "#ADB9AD",
          surface_5: "#97A696",
          surface_6: "#778A76",
          surface_7: "#5A6959",
          surface_8: "#475347",
          disabled: "#273527",
          muted: "#1E291E",
          passive: "#161E15",
          active: "#040604",
        },
      },
      gridTemplateColumns: {
        "2-cols-layout-drawer": "22rem, minmax(0, 1fr)",
      },
      gridTemplateRows: {
        "2-rows-layout-drawer": "6rem, minmax(0, 1fr)",
        "2-rows_dash": "auto minmax(0, 1fr)",
      },
      gridAutoRows: {
        "2-auto-rows": "minmax(0, 1fr)",
      },
    },
  },
};