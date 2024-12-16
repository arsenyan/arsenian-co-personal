import React from 'react';
import Link from 'next/link';

const menuColumn1 = [
    { href: "/projects", label: "Projects" },
    { href: "/", label: "About Me" },
    { href: "/contacts", label: "Contacts" },

  ];

  const menuColumn2 = [
    { href: "/cv#education-fellowships", label: "Education" },
    { href: "/cv", label: "Work Experience" },
    { href: "/", label: " " },
  ];

const Footer: React.FC = () => {
    return (
        <footer className='bg-accent text-white mt-14'>
            <div className='container px-4 py-4'>
                <div className='md:flex md:justify-between md:items-top grid gap-5 pb-5 md:divide-y-0 divide-y md:border-b-0 border-b border-white divide-white lowercase'>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='grid justify-items-start'>{menuColumn1.map((item) => (
                           <Link 
                            key={item.label}
                            href={item.href}
                            className='underline-animation'
                            >
                                {item.label}
                            </Link>
                        ))}</div>
                        <div className='grid justify-items-start'>{menuColumn2.map((item) => (
                            <Link 
                            key={item.label}
                            href={item.href}
                            className='underline-animation'
                            >
                                {item.label}
                            </Link>
                        ))}</div>
                    </div>
                    <div className='grid grid-cols-2 gap-6 md:pt-0 pt-5'>
                        <div className='grid justify-items-start'>
                            <a href="mailto:artem@arsenian.co" className='underline-animation'>artem@arsenian.co</a>
                            <a href="https://instagram.com/artefactpage" className='underline-animation'>instagram</a>
                            <a href="https://facebook.com/artefactpage" className='underline-animation'>facebook</a>
                        </div>
                        <div className='grid justify-items-start'>
                            <a href="https://t.me/teeema" className='underline-animation'>telegram</a>
                            <a href="https://www.linkedin.com/in/artyomarsenyan" className='underline-animation'>linkedin</a>
                            <a href="https://github.com/artefactpage" className='underline-animation'>github</a>
                            </div>
                    </div>
                </div>
                <p className='md:mt-14 mt-8'>artem arsenian, 2024</p>
            </div>
        </footer>
    );
};

export default Footer;