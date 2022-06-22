export const baseTheme = {
    colors: {
      default: '#1698D9',
      defaultHover: '#2EA8E6',
      selected: '#D91667',
      selectedHover: '#E52E7A',
      baseText: '#666666',
      disabled: '#B3B3B3',
      white: '#FFFFFF',
      bg: '#f2f2f2',
    },
  
    media: {
      extraLarge: '(max-width: 1140px)',
      large: '(max-width: 960px)',
      medium: '(max-width: 720px)',
      small: '(max-width: 540px)',
    },
  
    // in px
    sizes: {
      header: { height: 56 },
      container: { width: 1200 },
      footer: { height: 128 },
      modal: { width: 540 },
    },
  
    // in ms
    durations: {
      ms300: 300,
    },
  
    // z-index
    order: {
      header: 50,
      modal: 100,
    },
  }