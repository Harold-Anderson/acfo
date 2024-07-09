import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [

    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/faq'),
    },
    {
      text: 'Services',
      href:  '/#Services'
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Blog',
          href: getBlogPermalink(),
    },      
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],

};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Services', href: '/#Services' },
        { text: 'Team', href: '/about' },
        { text: 'Pricing', href: '/pricing' },
        { text: "FAQ", href: '/faq'},
        { text: "Pricing FAQ", href: '/pricing#PricingFAQ'}
      ],
    },
    {
      title: 'Partners',
      links: [
        { text: 'Causal', href: 'https://causal.app', target: "_blank" },
        { text: 'SOS Inventory', href: 'https://sosinventory.com' },
        { text: 'Glimpse', href: 'https://tryglimpse.com' },
        { text: 'Oregon Entrepreneurs Network', href: 'https://oen.org' },
        { text: 'QuickBooks Online', href: 'https://quickbooks.intuit.com/accounting/' },
        { text: "QuickBooks Payroll", href: 'https://quickbooks.intuit.com/payroll/'}
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Financing Options', href: 'https://getfutureready.notion.site/802117a4c76b42fa8443f8bc7bf86228?v=5af4657dec0f4b9eba63963e141c460f' },
        { text: 'More Financing Options', href: 'https://docs.google.com/spreadsheets/d/1oIrGF0prsw2Hy02Hj8OZNPforIotPftI6S2Kj9V-ats/edit?usp=sharing' },
        { text: 'Gross Margin Calculator', href: 'https://docs.google.com/spreadsheets/d/1ZMRgneYTd7yEF9UAYFGFnWhV44ZVi0kvcVdAaPzUGr4/edit?usp=sharing' },
        { text: 'Startup CPG', href: 'https://startupcpg.com/' },
        { text: 'Unloop Accounting', href: 'https://unloop.com/' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'Values', href: '/about#Values' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/harold-anderson-cfo/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Harold-Anderson' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src='https://acfostandardstorage.blob.core.windows.net/artwork/favicon-32x32.png' alt="ACFO logo" loading="lazy"></img>
    Copyright &copy; 2024 <a class="text-blue-600 underline dark:text-muted" href="https://www.acfo.co"> Anderson CFO</a> · All rights reserved.
  `,
};
