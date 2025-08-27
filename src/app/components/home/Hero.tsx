import AnimatedProfileImage from './AnimatedProfileImage';
import AnimatedSocialLinks from './AnimatedSocialLinks';

export default function Hero() {
  return (
    <section className="py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile image animation is client-side */}
          <AnimatedProfileImage />

          {/* Main headings and text are server-rendered for SEO */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I&apos;m <span className="text-primary">Abdellatif EL MIZEB</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Lead and Full Stack Developer | Open Source Contributor
          </p>

          {/* Social links animation is client-side */}
          <AnimatedSocialLinks />
        </div>
      </div>
    </section>
  );
}
