import type { I18n } from "../i18n";

export const en: I18n = {
  components: {
    main: {
      cookieBanner: {
        text: "This website uses cookies. All cookies are essential to the website and no non-essential cookies are used.",
        accept: "Accept",
        decline: "Decline"
      }
    }
  },
  layouts: {
    auth: {
      legal: "Legal"
    }
  },
  landing: {
    headerFront: 'Welcome to the ',
    headerSpan: 'TTRPG Suite!',
    headerBack: '',
    subheader: 'The tool covering every aspect of table top role playing. From characters to maps to playing together. Start your adventure now!',
    login: 'Log In',
    signup: 'Sign Up'
  },
  legal: {
    german: 'Imprint is only available in German.'
  },
  confirm: {
    headerFront: 'Thanks for joining us on your next ',
    headerSpan: 'Adventure!',
    headerBack: '',
    subheaderFront: 'Your account has been verified and you are now ready to start journey with the ',
    subheaderSpan: 'TTRPG Suite.',
    subheaderBack: '',
    go: 'Let\'s Go!',
  },
  login: {
    header: 'Log In',
    email: {
      label: 'Email',
      placeholder: 'Email',
    },
    password: {
      label: 'Password',
      placeholder: 'Password',
    },
    login: {
      loading: 'Loading',
      login: 'Log In',
    },
    signup: 'Sign up instead',
    landing: 'Back to Start',
  },
  signup: {
    header: 'Sign Up',
    username: {
      label: 'Username',
      placeholder: 'Username',
      invalid: 'Usernames have to be at least 2 characters long and start and end with a letter or number.Within the username _ .- are also allowed.',
    },
    email: {
      label: 'Email',
      placeholder: 'Email',
      invalid: 'Invalid email. Emails should look something like this: example@email.com',
    },
    password: {
      label: 'Password',
      placeholder: 'Password',
      invalid: 'Passwords have to be at least 8 characters long and require at least one uppercase letter, one lowercase letter and one number.',
    },
    signup: {
      loading: 'Loading',
      signup: 'Sign Up',
    },
    login: 'Log in instead',
    landing: 'Back to Start',
  },
  verify: {
    headerFront: 'Just ',
    headerSpan: 'one',
    headerBack: ' more step.',
    subheader: 'A verification email will be sent to you shortly. Follow its instructions and you are ready start your next adventure.',
    subheader2: 'Or log in here after verifying your account by clicking the button below.',
    login: 'Log In'
  },
}