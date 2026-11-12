export interface NavLink {
  href: string;
  label: string;
  /** Stays in the cover nav on small screens, where hash links are hidden. */
  coverPersistent?: boolean;
}

/** Mid-page section links shared by hero and simple nav. */
export const sectionNavLinks: NavLink[] = [
  { href: '/#story', label: 'Story' },
  { href: '/#contact', label: 'Contact' },
  { href: '/#credits', label: 'Credits' },
  { href: '/community/#events', label: 'Events' },
  { href: '/community/#newsletter', label: 'Newsletter' },
  { href: '/community/#store', label: 'Store', coverPersistent: true },
];

/** Full link set for store/legal/footer navigation. */
export const simpleNavLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  ...sectionNavLinks,
  { href: '/legal/', label: 'Privacy Policy' },
];
