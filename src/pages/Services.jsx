import { Link } from 'react-router-dom';
import { FiZap, FiTool, FiWind, FiLayers, FiShield,FiCheckCircle,FiArrowRight, FiTarget, FiCrosshair, FiAperture, FiGitCommit, FiGitBranch, FiGrid, FiCpu  } from 'react-icons/fi';
import cuttingWorks from '../assets/cuttingWorks.jpg';
import welding from '../assets/welding.jpg';
import fabricationCnc from '../assets/fabricationCnc.jpg';
import heroBg from '../assets/hero-bg.jpg';
import powderCoating from '../assets/powderCoating.jpg';
import metalGalvanizing from '../assets/metalGalvanizing.jpg';
import AluminiumWelding from '../assets/AluminiumWelding.jpg';
import FabricationWorks from '../assets/FabricationWorks.jpg';
import LaserCutting from '../assets/LaserCutting.jpg';
import MIGWelding from '../assets/MIGWelding.jpg';
import PlasmaAndFlameCutting from '../assets/PlasmaAndFlameCutting.jpg';
import SheetBending from '../assets/SheetBending.jpg';
import SheetRolling from '../assets/SheetRolling.jpg';
import SSWelding from '../assets/SSWelding.jpg';
import TIGWelding from '../assets/TIGWelding.jpg';
import WaterjetCutting from '../assets/WaterjetCutting.jpg';

const services = [
  {
    icon: <FiZap size={40} className="text-saddle-brown" />,
    title: 'Cutting Works',
    description: 'Our comprehensive cutting services utilize state-of-the-art technology to deliver precise, clean, and efficient results for a wide range of materials and applications.',
    image: cuttingWorks,
    details: [
      'Advanced solutions for materials of all types and thicknesses.',
      'High precision for complex and intricate designs.',
      'Optimized for both large-scale production and custom one-off projects.'
    ]
  },
  {
    icon: <FiTarget size={40} className="text-saddle-brown" />,
    title: 'Waterjet Cutting',
    description: 'High-precision cutting using an ultra-high pressure stream of water, capable of slicing through almost any material without generating heat.',
    image: WaterjetCutting, // Specific image
    details: [
      'No heat-affected zones (HAZ), preserving material integrity.',
      'Cuts a wide variety of materials, from metals to stone and composites.',
      'Achieves exceptional precision for intricate and complex designs.'
    ]
  },
  {
    icon: <FiCrosshair size={40} className="text-saddle-brown" />,
    title: 'Laser Cutting',
    description: 'A thermal cutting process that uses a focused laser beam to deliver high-quality, dimensionally accurate cuts with a fine surface finish.',
    image: LaserCutting, // Specific image
    details: [
      'Exceptional precision and accuracy with minimal kerf (cut width).',
      'Non-contact process reduces risk of material contamination and warping.',
      'Ideal for high-speed cutting of sheet metals and intricate patterns.'
    ]
  },
  {
    icon: <FiAperture size={40} className="text-saddle-brown" />,
    title: 'Plasma and Flame Cutting',
    description: 'Versatile and cost-effective cutting for thick metals, with plasma offering speed for conductive materials and flame excelling at heavy steel plates.',
    image: PlasmaAndFlameCutting, // Specific image
    details: [
      'Plasma cutting is fast and efficient for stainless steel, aluminum, and copper.',
      'Flame cutting is highly effective for very thick carbon steel sections.',
      'A cost-effective solution for heavy-duty industrial applications.'
    ]
  },
  {
    icon: <FiGitBranch size={40} className="text-saddle-brown" />,
    title: 'Sheet Bending',
    description: 'A precision manufacturing process that creates V-shapes, U-shapes, or channel shapes along a straight axis in sheet metal.',
    image: SheetBending, // Specific image
    details: [
      'Creates strong, rigid structures from a single piece of material.',
      'High repeatability and consistency for uniform parts.',
      'Reduces the need for welding or other joining methods, saving time and cost.'
    ]
  },
  {
    icon: <FiGitCommit size={40} className="text-saddle-brown" />,
    title: 'Sheet Rolling',
    description: 'A metal forming process where sheet metal is passed through rollers to reduce thickness or create cylindrical and conical shapes.',
    image: SheetRolling, // Specific image
    details: [
      'Capable of producing large-scale cylindrical tanks, shells, and pipes.',
      'Improves material grain structure and overall strength.',
      'Enables the creation of smooth, curved surfaces without seams.'
    ]
  },
  {
    icon: <FiTool size={40} className="text-saddle-brown" />,
    title: 'Welding',
    description: 'Our expert welding services provide strong, durable, and clean joints for a wide variety of metals and applications, ensuring structural integrity and longevity.',
    image: welding,
    details: [
      'Certified welders experienced in multiple advanced techniques.',
      'Solutions for steel, stainless steel, aluminum, and exotic alloys.',
      'Focused on delivering both functional strength and aesthetic quality.'
    ]
  },
  {
    icon: <FiZap size={40} className="text-saddle-brown" />,
    title: 'MIG Welding',
    description: 'A versatile and fast welding process that is ideal for a wide range of materials and thicknesses, delivering high-quality welds with excellent speed.',
    image: MIGWelding, // Specific image
    details: [
      'High welding speed boosts productivity for large projects.',
      'Excellent for long, continuous, and consistent welds.',
      'Adaptable for steel, stainless steel, and aluminum fabrication.'
    ]
  },
  {
    icon: <FiZap size={40} className="text-saddle-brown" />,
    title: 'TIG Welding',
    description: 'An arc welding process producing high-quality, precise, and exceptionally clean welds, offering superior control for detailed work.',
    image: TIGWelding, // Specific image
    details: [
      'Produces superior, high-purity welds for critical applications.',
      'Offers precise operator control over heat and filler material.',
      'Ideal for thin materials and non-ferrous metals like aluminum and copper.'
    ]
  },
  {
    icon: <FiZap size={40} className="text-saddle-brown" />,
    title: 'SS Welding',
    description: 'Specialized welding processes tailored for stainless steel to maintain its corrosion-resistant properties, strength, and clean appearance.',
    image: SSWelding, // Specific image
    details: [
      'Preserves the critical corrosion resistance of the stainless steel.',
      'Requires specific techniques to prevent distortion and discoloration.',
      'Ensures strong, durable joints for sanitary or high-strength applications.'
    ]
  },
  {
    icon: <FiZap size={40} className="text-saddle-brown" />,
    title: 'Aluminium Welding',
    description: 'Advanced welding techniques for aluminum, which demands special consideration due to its high thermal conductivity and protective oxide layer.',
    image: AluminiumWelding, // Specific image
    details: [
      'Requires specialized AC equipment and shielding gases.',
      'Expert techniques to manage heat input and prevent burn-through.',
      'Produces strong, lightweight fabrications for various industries.'
    ]
  },
  {
    icon: <FiGrid size={40} className="text-saddle-brown" />,
    title: 'Fabrication Works',
    description: 'The complete process of creating products from raw materials, involving cutting, bending, assembling, and finishing.',
    image: FabricationWorks, // Specific image
    details: [
      'End-to-end solutions from design and prototyping to final assembly.',
      'Custom structural frames, machine parts, and complex assemblies.',
      'Integration of multiple processes to deliver a finished product.'
    ]
  },
  {
    icon: <FiCpu size={40} className="text-saddle-brown" />,
    title: 'CNC Lathe and Milling',
    description: 'Subtractive manufacturing processes using computer-controlled machinery to create high-precision parts with complex geometries.',
    image: fabricationCnc, // Keep existing generic image
    details: [
      'Achieves extremely tight tolerances and high repeatability.',
      'Lathes create rotational parts; milling machines create prismatic shapes.',
      'Ideal for rapid prototyping and high-volume production runs.'
    ]
  },
  {
    icon: <FiLayers size={40} className="text-saddle-brown" />,
    title: 'Powder Coating',
    description: 'Durable and uniform powder coating solutions for superior surface protection.',
    image: powderCoating,
    details: [
      'High-quality corrosion resistance',
      'Smooth, uniform finish in multiple colors',
      'Suitable for industrial & architectural components'
    ]
  },
  {
    icon: <FiShield size={40} className="text-saddle-brown" />,
    title: 'Metal Galvanizing',
    description: 'Hot-dip galvanizing services to enhance metal durability and corrosion resistance.',
    image: metalGalvanizing,
    details: [
      'Long-lasting rust protection',
      'Ideal for outdoor & heavy-duty applications',
      'Complies with industrial quality standards'
    ]
  }
];


export default function Services() {
  return (
    <div className="pt-16 bg-alabaster text-dark-lava">

      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] flex items-center justify-start text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        data-aos="fade-down"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-left px-6 md:px-12 lg:px-24 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold">Our Services</h1>
          <p className="text-lg mt-4">
            Delivering excellence in every cut, weld, and fabrication.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-parchment">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`md:flex items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                data-aos="fade-up"
              >
                <div className="md:w-2/5 mb-8 md:mb-0">
                  <img src={service.image} alt={service.title} className="rounded-lg shadow-2xl" />
                </div>
                <div className="md:w-3/5">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h2 className="text-3xl font-bold ml-4">{service.title}</h2>
                  </div>
                  <p className="text-beaver mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center">
                        <FiCheckCircle className="text-saddle-brown mr-3" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-alabaster">
        <div className="container mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-12">Our Simple Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-parchment rounded-full p-4 mb-4">
                <FiArrowRight size={30} />
              </div>
              <h3 className="text-xl font-bold">1. Consultation</h3>
              <p className="text-beaver">We discuss your requirements.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-parchment rounded-full p-4 mb-4">
                <FiArrowRight size={30} />
              </div>
              <h3 className="text-xl font-bold">2. Design & Quote</h3>
              <p className="text-beaver">We provide a plan and a quote.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-parchment rounded-full p-4 mb-4">
                <FiArrowRight size={30} />
              </div>
              <h3 className="text-xl font-bold">3. Fabrication</h3>
              <p className="text-beaver">We bring your project to life.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-parchment rounded-full p-4 mb-4">
                <FiArrowRight size={30} />
              </div>
              <h3 className="text-xl font-bold">4. Delivery</h3>
              <p className="text-beaver">We deliver your finished product.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section
        className="py-24 bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        data-aos="zoom-in"
      >
        <div className="bg-black/70 py-16">
          <h2 className="text-4xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Let's talk about your project and how we can help you.
          </p>

          <Link to="/contact" className="mt-8 inline-flex items-center justify-center px-8 py-4 font-bold text-lg bg-saddle-brown text-alabaster rounded-lg shadow-lg hover:bg-saddle-brown/90 transform hover:scale-105 transition-transform duration-300">
            Get a Quote
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}