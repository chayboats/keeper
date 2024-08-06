import linkAttributes from '@/data/navLinkInfo';

export default function Navbar(props) {
  const { className } = props;

  return (
    <nav className={className}>
      {linkAttributes.map((link, index) => (
        <a
          href={link.href}
          className={link.className}
          key={index}
        >
          {link.text}
        </a>
      ))}
    </nav>
  );
}
