'use client'
import React, { useEffect, useState } from 'react';
import NceaForm from '@/components/NCEA/NceaForm';
import Graph from '@/components/NCEA/PublicGraph';
import RankScore from '@/components/NCEA/PublicRankScore';
import NceaTable from '@/components/NCEA/PublicTable';

interface Subject {
    subject: string;
    standardNumber: string;
    name: string;
    credits: string;
    achievement: string;
    [key: string]: string;
}

const NCEA = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [sorted, setSorted] = useState(false);
    const [savedSubjects, setSavedSubjects] = React.useState<Subject[]>([{
        subject: '',
        standardNumber: '',
        name: '',
        credits: '',
        achievement: '',
    },]);

    const [subjects, setSubjects] = useState<Subject[]>([
        {
            subject: '',
            standardNumber: '',
            name: '',
            credits: '',
            achievement: '',
        },
    ]);

    useEffect(() => {
        if (sorted) { return }
        const storedSubjects = localStorage.getItem('subjects');
        if (storedSubjects) {
            setSubjects(JSON.parse(storedSubjects));
            setSavedSubjects(JSON.parse(storedSubjects));
        } else {
            setSavedSubjects(subjects);
            setIsEditing(true);
        }
    }, [setIsEditing, setSavedSubjects, setSubjects, sorted, subjects])

    useEffect(() => {
        if (!isEditing && !sorted) {
            const sortedSubjects = [...subjects].sort((a, b) => {
                const levelA = parseFloat(a.standardNumber);
                const levelB = parseFloat(b.standardNumber);
                return levelA - levelB;
            });
            setSubjects(sortedSubjects);
            setSorted(true);
        }
    }, [isEditing, setSubjects, sorted, subjects]);

    return (
        <div className='lg:flex lg:flex-col lg:justify-center lg:items-center px-4 min-h-full'>
            <h1 className="text-4xl font-bold mb-4">NCEA Progress</h1>
            {savedSubjects && savedSubjects[0].subject.length > 0 && savedSubjects[0].standardNumber.length > 0 && savedSubjects[0].name.length > 0 && savedSubjects[0].credits.length > 0 && savedSubjects[0].achievement.length > 0 ? (
                <>
                    <p className='text-lg font-bold mt-2'>Current rank score: {<RankScore subjects={savedSubjects} />}
                        <button
                            onClick={() => { setIsEditing(!isEditing); setSubjects(savedSubjects); }}
                            className="ml-2 text-base bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            {isEditing ? 'Cancel' : 'Edit'}
                        </button>
                    </p>
                    <Graph data={savedSubjects} />
                    <NceaTable subjects={savedSubjects} />
                </>
            ) : (
                <p className='text-lg font-bold mt-2'>
                    Please enter data for rank score and graphs.
                    <button
                        onClick={() => { setIsEditing(!isEditing); setSubjects(savedSubjects); }}
                        className="ml-2 text-base bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        {isEditing ? 'Cancel' : 'Edit'}
                    </button>
                </p>
            )}
            <NceaForm subjects={subjects} savedSubjects={savedSubjects} setSubjects={setSubjects} setSorted={setSorted} isEditing={isEditing} setIsEditing={setIsEditing} setSavedSubjects={setSavedSubjects} />
        </div>
    );
}

export default NCEA;
