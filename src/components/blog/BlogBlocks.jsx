import React from 'react';
import '../../styles/BlogBlocks.css';

function getLinkTarget(link) {
  if (link.target) {
    return link.target;
  }

  return link.external ? '_blank' : undefined;
}

function getLinkRel(link, target) {
  if (link.rel) {
    return link.rel;
  }

  return target === '_blank' ? 'noreferrer' : undefined;
}

export function BlogFigure({ src, alt, caption, className = '' }) {
  const figureClassName = ['blog-figure', className].filter(Boolean).join(' ');

  return (
    <figure className={figureClassName}>
      <img src={src} alt={alt} loading="lazy" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function BlogStatList({ items, ariaLabel = 'Key details' }) {
  return (
    <dl className="blog-stat-list" aria-label={ariaLabel}>
      {items.map((item) => (
        <div className="blog-stat-list__item" key={`${item.value}-${item.label}`}>
          <dt>{item.value}</dt>
          <dd>
            <span>{item.label}</span>
            {item.detail ? <p>{item.detail}</p> : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function BlogNameList({ title, items, description, ariaLabel }) {
  return (
    <section className="blog-name-list" aria-label={ariaLabel || title}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {description ? <p>{description}</p> : null}
    </section>
  );
}

export function BlogLinkList({ links, ariaLabel = 'Related links' }) {
  return (
    <nav className="blog-link-list" aria-label={ariaLabel}>
      {links.map((link) => {
        const target = getLinkTarget(link);
        const rel = getLinkRel(link, target);

        return (
          <a key={`${link.href}-${link.label}`} href={link.href} target={target} rel={rel}>
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}

export const blogMdxComponents = {
  BlogFigure,
  BlogLinkList,
  BlogNameList,
  BlogStatList,
};
