// components/PointsList.tsx

interface Point {
  number: string;
  description: string;
  _key: string;
}

interface PointsListProps {
  points: Point[];
}

const PointsList: React.FC<PointsListProps> = ({ points }) => {
  return (
    <div className="md:mt-8 pt-5 grid lg:grid-cols-4 border-t border-accent md:border-t-0 md:grid-cols-2 lg:gap-x-2 md:gap-0 gap-y-4 md:divide-x md:divide-y-0 divide-y divide-accent">
      {points.map((point, index) => (
        <div
          key={point._key}
          className={`flex md:flex-col md:justify-between md:pr-2 md:pb-0 md:pt-0 pt-4 lg:border-b-0 ${index >= 1 ? 'lg:pl-2' : ''} ${index === 1 ? 'md:max-lg:border-b' : ''} ${index === 2 ? ' md:max-lg:border-none md:max-lg:pt-10' : ''} ${index === 3 ? ' md:max-lg:pt-10' : ''} ${index % 2 !== 0 ? 'md:pl-2' : ''} `}
        >
          <span className="text-accent md:pr-0 pr-10">{point.number}</span>
          <p className="md:pt-5 leading-tight">{point.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PointsList;