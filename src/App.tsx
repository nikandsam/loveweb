import { useState } from 'react';
import CardPage from './components/CardPage';
import VideoPage from './components/VideoPage';
import BirthdayMessage from './components/BirthdayMessage';
import GalleryPage from './components/GalleryPage';
import RomanticMessage from './components/RomanticMessage';
import ProposalPage from './components/ProposalPage';
import YesCelebration from './components/YesCelebration';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const pages = [
    <CardPage onNext={nextPage} />,
    <VideoPage onNext={nextPage} />,
    <BirthdayMessage onNext={nextPage} />,
    <GalleryPage onNext={nextPage} />,
    <RomanticMessage onNext={nextPage} />,
    <ProposalPage onYes={nextPage} />,
    <YesCelebration />,
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingHearts />
      <div className="page-transition">
        {pages[currentPage]}
      </div>
    </div>
  );
}

export default App;
