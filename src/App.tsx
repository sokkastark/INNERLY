import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomeRoute } from './app/routes/HomeRoute';
import { MatchRoute } from './app/routes/MatchRoute';
import { ExploreRoute } from './app/routes/ExploreRoute';
import { BodyRoute } from './app/routes/BodyRoute';
import { LearnRoute } from './app/routes/LearnRoute';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  const renderActiveRoute = () => {
    switch (activeTab) {
      case 'home':
        return <HomeRoute onNavigate={(tab) => setActiveTab(tab)} />;
      case 'match':
        return <MatchRoute />;
      case 'explore':
        return <ExploreRoute />;
      case 'body':
        return <BodyRoute />;
      case 'learn':
        return <LearnRoute />;
      default:
        return <HomeRoute onNavigate={(tab) => setActiveTab(tab)} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header activeTab={activeTab} onSelectTab={(tab) => setActiveTab(tab)} />
      <main style={{ flex: 1, paddingBottom: '70px' }}>{renderActiveRoute()}</main>
      <Footer />
    </div>
  );
};

export default App;
