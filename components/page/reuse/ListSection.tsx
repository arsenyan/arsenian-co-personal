import React from 'react';

interface ListItem {
  role: string;
  year?: string;
  company: string;
  _key: string;
}

interface ListSectionProps {
  title: string;
  items: ListItem[];
}

const ListSection: React.FC<ListSectionProps> = ({ title, items }) => {
  return (
    <div>
      <h2 className='font-serif lg:text-6xl leading-none md:text-4xl text-2xl pb-3'>{title}</h2>
      <ul className='flex flex-col gap-4 divide-y border-t border-accent divide-accent'>
        {items.map((item) => (
          <li className='pt-4' key={item._key}>
            <div className='md:text-2xl'>{item.year} <span className='text-accent'>{item.role}</span></div>
            {item.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;