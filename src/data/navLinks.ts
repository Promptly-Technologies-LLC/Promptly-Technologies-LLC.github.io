export interface NavLink {
  href: string;
  label: string;
}

/** Mid-page section links shared by hero and simple nav. */
export const sectionNavLinks: NavLink[] = [
  { href: '/#story', label: 'Story' },
  { href: '/#newsletter', label: 'Newsletter' },
  { href: '/#events', label: 'Events' },
  { href: '/#contact', label: 'Contact' },
  { href: '/#credits', label: 'Credits' },
  { href: '/store/', label: 'Store' },
];

/** Full link set for store/legal/footer navigation. */
export const simpleNavLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  ...sectionNavLinks,
  { href: '/legal/', label: 'Privacy Policy' },
];
