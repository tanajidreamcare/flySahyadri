import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const NumberCounter = ({ stats, duration }) => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            newCounts[index] += 1;
          } else {
            clearInterval(intervals[index]);
          }
          return newCounts;
        });
      }, duration / stat.value);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <div className="md:flex justify-center p-10">
      {stats.map((stat, index) => (
        <div key={stat.id} className="text-center mx-4">
          <div className="text-5xl text-white font-extrabold">
            {counts[index]}
          </div>
          <div className='flex justify-center'>
          <Image
            src={stat.icon}
            width={150}
            height={300}
            alt={stat.name}
            className="w-10 h-10 my-4 "
          />        
          </div>
          <h1 className='text-white'>{stat.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default NumberCounter;
