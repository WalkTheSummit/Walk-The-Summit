import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import AchievementsSection from '../components/AchievementsSection';
import AwardsSection from '../components/AwardsSection';
import MediaSection from '../components/MediaSection';
import PartnersSection from '../components/PartnersSection';
import GetInvolvedSection from '../components/GetInvolvedSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <HeroSlider />
      </section>

      {/* About Section */}
      <section className="section-padding bg-white" id="about">
        <AboutSection />
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-gray-50" id="achievements">
        <AchievementsSection />
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-white" id="awards">
        <AwardsSection />
      </section>

      {/* Media Section */}
      <section className="section-padding bg-gray-50" id="media">
        <MediaSection />
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-white" id="partners">
        <PartnersSection />
      </section>

      {/* Get Involved Section */}
      <section className="section-padding bg-black text-white" id="get-involved">
        <GetInvolvedSection />
      </section>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default Home;
