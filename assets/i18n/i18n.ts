export type I18n = {
  landing: {
    headerFront: string,
    headerSpan: string,
    headerBack: string,
    subheader: string,
    login: string,
    signup: string
  },
  confirm: {
    headerFront: string,
    headerSpan: string,
    headerBack: string,
    subheaderFront: string,
    subheaderSpan: string,
    subheaderBack: string,
    go: string,
  },
  login: {
    header: string,
    email: {
      label: string,
      placeholder: string,
    },
    password: {
      label: string,
      placeholder: string,
    },
    login: {
      loading: string,
      login: string,
    },
    signup: string,
    landing: string,
  },
  signup: {
    header: string,
    username: {
      label: string,
      placeholder: string,
      invalid: string,
    },
    email: {
      label: string,
      placeholder: string,
      invalid: string,
    },
    password: {
      label: string,
      placeholder: string,
      invalid: string,
    },
    signup: {
      loading: string,
      signup: string,
    },
    login: string,
    landing: string,
  },
  verify: {
    headerFront: string,
    headerSpan: string,
    headerBack: string,
    subheader: string,
    subheader2: string,
    login: string
  }
}