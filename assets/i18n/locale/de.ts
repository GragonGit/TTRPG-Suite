import type { I18n } from "../i18n";

export const de: I18n = {
  components: {
    main: {
      cookieBanner: {
        text: "Diese Website verwendet Cookies. Alle Cookies werden für die Website benötigt und es werden keine nicht-essentiellen Cookies verwendet.",
        accept: "Akzeptieren",
        decline: "Ablehnen"
      }
    }
  },
  layouts: {
    auth: {
      legal: "Impressum"
    }
  },
  landing: {
    headerFront: "Willkommen zur ",
    headerSpan: "TTRPG Suite!",
    headerBack: "",
    subheader: "Das Tool für alle Aspekte des Table-Top-Rollenspiels. Von Charakteren über Karten bis hin zum gemeinsamen Spiel. Starte dein Abenteuer noch heute!",
    login: "Anmelden",
    signup: "Registrieren"
  },
  legal: {
    german: ''
  },
  confirm: {
    headerFront: "Danke, dass du uns bei deinem nächsten ",
    headerSpan: "Abenteuer",
    headerBack: " begleitest!",
    subheaderFront: "Dein Konto wurde verifiziert und du bist nun bereit, deine Reise mit der ",
    subheaderSpan: "TTRPG Suite",
    subheaderBack: " zu beginnen.",
    go: "Los geht's!"
  },
  login: {
    header: "Anmelden",
    email: {
      label: "E-Mail",
      placeholder: "E-Mail"
    },
    password: {
      label: "Passwort",
      placeholder: "Passwort"
    },
    login: {
      loading: "Lädt",
      login: "Anmelden"
    },
    signup: "Stattdessen registrieren",
    landing: "Zurück zum Start"
  },
  signup: {
    header: "Registrieren",
    username: {
      label: "Benutzername",
      placeholder: "Benutzername",
      invalid: "Benutzernamen müssen mindestens 2 Zeichen lang sein und mit einem Buchstaben oder einer Zahl beginnen und enden, innerhalb des Benutzernamens sind auch _ .- erlaubt."
    },
    email: {
      label: "E-Mail",
      placeholder: "E-Mail",
      invalid: "Ungültige E-Mail. E-Mails sollten etwa so aussehen: beispiel@email.de"
    },
    password: {
      label: "Passwort",
      placeholder: "Passwort",
      invalid: "Passwörter müssen mindestens 8 Zeichen lang sein und mindestens einen Großbuchstaben, einen Kleinbuchstaben und eine Zahl enthalten."
    },
    signup: {
      loading: "Lädt",
      signup: "Registrieren"
    },
    login: "Stattdessen anmelden",
    landing: "Zurück zum Start"
  },
  verify: {
    headerFront: "Nur noch ",
    headerSpan: "ein",
    headerBack: " Schritt.",
    subheader: "In Kürze erhältst du eine Bestätigungs-E-Mail. Befolge die darin enthaltenen Anweisungen und schon kannst du dein nächstes Abenteuer beginnen.",
    subheader2: "Oder melde dich hier an, nachdem du dein Konto verifiziert hast, indem du auf die Schaltfläche unten klickst.",
    login: "Anmelden"
  }
}