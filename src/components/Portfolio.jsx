import React from 'react';
import { ReactComponent as CodeIcon } from '../assets/github.svg';
import { ReactComponent as LinkIcon } from '../assets/link.svg';
import { projects } from '../data';

export default function Portfolio() {
  return (
    <div id="portfolio">
      <h2>Experience</h2>
      <div className="list-container">
        <div className="project-list">
          {projects.map(({ logo, title, desc, links, repo }) => (
            <div className="project" key={title}>
              <img
                src={logo}
                alt={title}
                className={`logo ${links ? 'clickable' : null}`}
                onClick={links ? () => window.open(links?.[0]) : null}
              />
              <div className="info">
                <h4
                  className={links ? 'clickable' : null}
                  onClick={links ? () => window.open(links?.[0]) : null}
                >
                  {title}
                </h4>
                <p>{desc}</p>
                <div className="links">
                  {repo && (
                    <a href={repo} target="_blank" rel="noopener noreferrer">
                      <CodeIcon />
                    </a>
                  )}
                  {links &&
                    (links.length === 1 ? (
                      <a
                        href={links[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkIcon />
                      </a>
                    ) : (
                      links.map((link, i) => (
                        <a
                          key={i}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkIcon className={`link-${i}`} />
                        </a>
                      ))
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
