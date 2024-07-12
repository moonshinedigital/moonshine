export const siteConfig = {
  name: 'Your Site Name',
  description: 'Your site description',
  logo: '/path/to/logo.svg',
  terminology: {
    product: 'Your Product Name',
    company: 'Your Company Name',
  },
  social: {
    twitter: 'https://twitter.com/youraccount',
    github: 'https://github.com/youraccount',
  },
  get currentYear() {
    return new Date().getFullYear()
  },
  get copyrightText() {
    return `© ${this.currentYear} ${this.terminology.company}. All rights reserved.`
  },
}

export type SiteConfig = typeof siteConfig
