import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaHourglassHalf } from 'react-icons/fa';
import { TbMessageChatbot } from 'react-icons/tb';
import { GiMagicPortal } from 'react-icons/gi';
import { FaRankingStar } from 'react-icons/fa6';

export default function Home() {

  const apps = [
    {
      icon: <FaRankingStar />,
      link: 'https://taroj.poyo.jp/apps/ncea',
      name: 'NCEA Progress',
      description: 'Calculate your rank score and manage your credits.'
    },
    {
      icon: <GiMagicPortal />,
      link: 'https://portal.westlake.school.nz/',
      name: 'Portal',
      description: 'Westlake Boys High School Portal.'
    },
    {
      icon: <TbMessageChatbot />,
      link: '/',
      name: 'Chat',
      description: 'Chat with other people.'
    }
  ];

  return (
    <main className='flex flex-col items-center justify-center min-h-full'>
      <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-12">
          <div className='text-9xl'><FaGraduationCap /></div>
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Welcome to Student Hub
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            A collection of apps to help you manage your NCEA progress.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {apps.map((app) => (
            <Link key={app.link} href={app.link} className={`${app.name.toString() === 'Coming soon' ? 'cursor-not-allowed' : ''} flex flex-col items-center w-48 justify-center bg-white rounded-lg shadow-md hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700`}>
              <div className='h-full'>
                <div className="h-32 flex items-center justify-center text-6xl">
                  {app.icon}
                </div>
                <div className="px-4 py-2 text-center">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                    {app.name}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 whitespace-break-spaces">
                    {app.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}