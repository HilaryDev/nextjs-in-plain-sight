import dynamic from 'next/dynamic';

const Header = dynamic(() => import('components/header'));
const Footer = dynamic(() => import('components/footer'));


export default function Layout(
  {
    children,
  }:
  {
    children: JSX.Element | JSX.Element[];
  },
): JSX.Element {
  /* To make the site have a sticky footer (ie. a footer that sticks to the bottom
  of the page), we wrap pages with a `<div>` container with the class names specified
  below.
  */
  return (
    <div
      className="h-100 vh-100 flex flex-column"
    >
      <Header />


      {children}


      <Footer />
    </div>
  );
}
