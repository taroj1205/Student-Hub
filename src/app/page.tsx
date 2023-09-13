import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaHourglassHalf, FaMedal } from 'react-icons/fa';
import { FaRankingStar } from 'react-icons/fa6';

export default function Home() {

  const apps = [
    {
      icon: <FaRankingStar />,
      link: '/app1',
      name: 'Rank scores',
      description: 'Calculate your rank score here.'
    },
    {
      icon: <FaMedal />,
      link: '/app2',
      name: 'Credits',
      description: 'Manage your NCEA credits.'
    },
    {
      icon: <FaHourglassHalf />,
      link: '/app3',
      name: 'Coming soon',
      description: 'Coming soon.'
    }
  ];

  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white'>
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
            <Link key={app.link} href={app.link} className='flex flex-col items-center w-48 justify-center bg-white rounded-lg shadow-md hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
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
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}