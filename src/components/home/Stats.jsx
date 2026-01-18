import ProgressBar from '../ProgressBar';
import { FiUsers, FiAward, FiClock } from 'react-icons/fi';

const stats = [
  {
    icon: <FiClock size={40} className="text-saddle-brown" />,
    label: 'Years of Excellence',
    value: 9,
    maxValue: 10,
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-alabaster text-dark-lava" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Our Experience</h2>
          
        </div>
        <div className="max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-center mb-2">
                {stat.icon}
                <h3 className="text-xl font-bold ml-4">{stat.label}</h3>
              </div>
              <ProgressBar
                value={stat.value}
                maxValue={stat.maxValue}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
