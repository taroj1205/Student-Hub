'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: Implement form submission logic
    };

    return (
        <main className='flex flex-col items-center justify-center min-h-full'>
            <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center py-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                        Contact Me
                    </h1>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                        We&apos;d love to hear from you! Please fill out the form below and we&apos;ll get back to you as soon as possible.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6">
                    <div className="flex flex-col items-start w-full">
                        <label htmlFor="name" className="text-lg font-medium text-gray-900 dark:text-white">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-2 px-4 py-2 w-full text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required />
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <label htmlFor="email" className="text-lg font-medium text-gray-900 dark:text-white">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-2 px-4 py-2 w-full text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required />
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <label htmlFor="message" className="text-lg font-medium text-gray-900 dark:text-white">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="mt-2 px-4 py-2 w-full h-32 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required />
                    </div>
                    <button type="submit" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Submit
                    </button>
                    <div className="flex items-center justify-center gap-4">
                        <Link href="https://www.facebook.com/taroj1205/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-4xl text-blue-500 hover:text-blue-600" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/taroj1205/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-4xl text-blue-500 hover:text-blue-600" />
                        </Link>
                        <Link href="https://twitter.com/taroj1205/" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-4xl text-blue-500 hover:text-blue-600" />
                        </Link>
                        <Link href="https://instagram.com/taroj1205/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-4xl text-blue-500 hover:text-blue-600" />
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    );
}
