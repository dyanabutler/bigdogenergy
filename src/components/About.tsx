import React from 'react';
import Image from 'next/image';

interface IconProps extends React.SVGProps<SVGSVGElement> {}


const BackpackIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
    <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
    <path d="M8 10h8" />
    <path d="M8 18h8" />
  </svg>
);

const BookIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);

const CameraIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const MusicIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const About: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 py-12 md:py-24">
        <Image
          alt="Profile Picture"
          className="rounded-full"
          height={128}
          src="/hero.png"
          style={{
            aspectRatio: "1",
            objectFit: "cover",
          }}
          width={128}
        />
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">William Epiter-Smith</h1>
          <p className="text-gray-500 dark:text-gray-400">Professional Dog Walker</p>
          <p className="max-w-md text-sm/relaxed">
          Hi there! I&apos;m Willy, a dedicated dog walker with a deep passion for animals and their well-being. 
          </p>
        </div>
        <h2 className="text-2xl font-bold  sm:text-3xl">What I Love</h2>
        <p className="max-w-md space-y-2 text-sm/relaxed">
        When I&apos;m not out exploring parks with my furry clients, I&apos;m probably immersed in the vibrant worlds of video games and anime.
        </p>
        <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          <li>
            <div className="flex flex-col items-center justify-center gap-1">
              <BackpackIcon className="h-6 w-6" />
              <span>Video Games</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center justify-center gap-1">
              <BookIcon className="h-6 w-6" />
              <span>Anime</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center justify-center gap-1">
              <CameraIcon className="h-6 w-6" />
              <span>Photography</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center justify-center gap-1">
              <MusicIcon className="h-6 w-6" />
              <span>Music</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;
