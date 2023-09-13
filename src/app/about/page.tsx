import Image from 'next/image';

export default function About() {
    return (
        <main className='flex flex-col items-center justify-center min-h-full bg-gray-100 dark:bg-gray-900'>
            <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center py-12">
                    <h1 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                        About Me
                    </h1>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                        Hi, I&apos;m Shintaro! I&apos;m a passionate developer dedicated to creating innovative solutions.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src="/profile.webp"
                        alt="Profile Picture"
                        width={200}
                        height={200}
                        className="rounded-lg object-fit"
                    />
                </div>
                <div className="max-w-2xl mx-auto mt-8 text-center">
                    <p className="text-gray-600 dark:text-gray-400">
                        My mission is to help students in New Zealand manage their NCEA studies more effectively. As a developer, I have experience in building web applications that can simplify the process of tracking and managing NCEA credits and assessments.
                    </p>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        If you&apos;re a student or a teacher looking for a better way to manage NCEA, feel free to explore my projects and get in touch with me if you have any questions or suggestions.
                    </p>
                </div>
            </div>
        </main>
    );
}