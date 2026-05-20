/**
 * Global design tokens — single source of truth for colors and typography.
 * Referenced by tailwind.config.js and available for JS usage (e.g. Framer Motion).
 */
export const colors = {
  primary: '#0A2342',
  accent: '#FFFFFF',
  secondary: '#3B82F6',
  background: '#FAFAFA',
  textPrimary: '#1A1A2E',
  textSecondary: '#64748B',
  carriers: '#F8FAFC',
}

export const fonts = {
  heading: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
  body: ['Inter', 'system-ui', 'sans-serif'],
}

export const fontWeights = {
  heading: {
    bold: 700,
    extrabold: 800,
  },
  body: {
    regular: 400,
    medium: 500,
  },
}

export const theme = {
  colors,
  fonts,
  fontWeights,
}

export default theme
