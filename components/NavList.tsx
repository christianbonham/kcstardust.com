import Link from 'next/link';

interface INavigationItem {
  text: string;
  url: string;
}

interface INavListProps {
  id: string;
}

const nav: Array<INavigationItem> = [
  {
    text: 'Services',
    url: '/#services',
  },
  {
    text: 'About',
    url: 'about',
  },
  {
    text: 'Contact',
    url: '#contact',
  },
];

export default function NavList(props: INavListProps) {
  const { id } = props;
  return (
    <ul id={id}>
      {nav.map((navItem: INavigationItem) => (
        <li key={navItem.text}>
          <Link href={navItem.url}>
            <a>{navItem.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
