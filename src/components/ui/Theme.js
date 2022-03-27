import { createMuiTheme } from "@material-ui/core"

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"
const arcGrey = "#868686"

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
          fontFamily: "Raleway",
          textTransform: 'none',
          color: "white",
          fontWeight: 700,
          fontSize: "1rem",
        },
        estimate: {
          fontFamily: "Pacifico",
          fontSize: "1em",
          textTransform: "none",
          color: "white"
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: arcBlue,
            lineHeight: 1.5
          },
          h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: arcBlue
          },
          h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            color: arcBlue,
            fontWeight: 700
          },
          h6: {
            fontWeight: 500,
            fontFamily: "Raleway",
            color: arcBlue,
            lineHeight: 1
          },
          subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: arcGrey
          },
          subtitle2: {
            color: "white",
            fontSize: "1.25rem",
            fontWeight: 300
          },
          body1: {
            fontSize: '1.25rem',
            color: arcGrey,
            fontWeight: 300
          },
          caption: {
            fontSize: "1.5rem",
            fontWeight: 300,
            color: arcGrey
          },
          learnMore: {
            borderColor: arcBlue,
            color: arcBlue,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
          },
          
    },
    overrides: {
      // allows us to customize the default components for our material ui setups.
      MuiInputLabel: {
        root: {
          color: arcBlue,
          fontSize: "1rem"
        }
      },
      MuiInput: {
        root: {
          color: arcGrey,
          fontWeight: 300
        },
        underline: {
          "&:before": {
            // style underline before being clicked or hovered on
            borderBottom: `2px solid ${arcBlue}`
          },
          "&:hover:not($disabled):not($focused):not($error):before": {
            borderBottom: `2px solid ${arcBlue}`
          }
        }
      }
    }
})
