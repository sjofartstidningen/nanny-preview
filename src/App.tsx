import React, { Suspense } from 'react';
import { Router, Link } from '@reach/router';
import { UrlProvider } from './context/url';
import { Query } from './components/Query';
import { BaseUrl } from './components/BaseUrl';

const sections = [
  {
    name: 'Standard',
    path: '/',
    Component: React.lazy(() => import('./sections/Standard')),
  },
  {
    name: 'Resize',
    path: 'resize',
    Component: React.lazy(() => import('./sections/Resize')),
  },
];

const App: React.FC = () => {
  return (
    <UrlProvider>
      <div>
        <header>
          <h1>Nanny</h1>
          <nav>
            <ul>
              {sections.map(section => (
                <li key={section.path}>
                  <Link to={section.path}>{section.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <section>
          <BaseUrl />
        </section>

        <section>
          <Suspense fallback={<p>Loading</p>}>
            <Router>
              {sections.map(section => (
                // @ts-ignore
                <section.Component key={section.path} path={section.path} />
              ))}
            </Router>
          </Suspense>
        </section>

        <main></main>

        <section>
          <Query />
        </section>
      </div>
    </UrlProvider>
  );
};

export default App;
