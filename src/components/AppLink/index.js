import Link from 'next/link';

/* This is necessary if you’re using libraries like styled-components. 
Without this, the <a> tag will not have the href attribute, 
which might hurt your site’s SEO.
https://nextjs.org/docs/api-reference/next/link */

function AppLink({ href, className, children, target }) {
  // Must add passHref to Link
  return (
    <Link href={href} passHref>
      <a target={target} className={className}>
        {children}
      </a>
    </Link>
  );
}

export default AppLink;