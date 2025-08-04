import ServiceCard from "./components/ServiceCard"; {/* Importing ServiceCard component from components folder */}
import { FaTools, FaTree, FaHammer, FaDoorOpen, FaWindowRestore, FaShower, FaShieldAlt } from "react-icons/fa"; {/* Importing Font Awesome icons */}
import { MdOutlineYard } from 'react-icons/md'; {/* Importing Material Design icons */}
import { GiMirrorMirror } from 'react-icons/gi';  {/* Importing icons from react-icons library */}
import Header from "./components/Header";  {/* Importing Header component from components folder */}
import Footer from "./components/Footer"; {/* Importing Footer component from components folder */}
import Button from './components/Button';


const App = () => {         {/* Declaring App with es6 const function */} 
  return (
    <>                      {/* Wrapping inside react fragment to add more elements later */}
      <div className="pt-[8rem] lg:pt-[8rem] overflow-hidden scroll-smooth">
        <Header />  {/* Importing Header component from components folder */}
        <main>

          <section
            id="home"
            className="h-[75vh] md:h-[80vh] flex items-center justify-center text-center px-4 bg-hero-pattern bg-cover bg-center text-white relative"
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Add subtle overlay */}
            <div className="relative z-10">
              <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
                Welcome to <span className="text-brand-accent">Choden Brothers Services</span>
              </h1>

              <p className="mt-4 text-lg md:text-xl text-gray-200">
                Transforming Hobart's outdoor spaces with care and Quality.
              </p>
              <Button href="#contact" className="mt-6 btn-primary">Call Us</Button>
            </div>
          </section>

          <section id="services" className="scroll-mt-24 py-section bg-brand-light text-brand-dark">
            <div className="container max-w-6xl mx-auto px-4">
              <h2 className="section-title text-brand-primary mb-4">Our Services</h2>
              <p className="mb-8 text-lg text-gray-700">
                From garden care to handyman repairs, explore how we can help transform your home and outdoor space.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                title="Gardening"
                description="Lawn care, pruning, and plant maintenance."
                icon={<MdOutlineYard />}
              />
              <ServiceCard
                title="Landscaping"
                description="Garden design, turf, and retaining walls."
                icon={<FaTree />}
              />
              <ServiceCard
                title="Concreting"
                description="Paths, driveways, and slabs for all spaces."
                icon={<FaHammer />}
              />
              <ServiceCard
                title="Handyman Services"
                description="General repairs and household fixes."
                icon={<FaTools />}
              />
              <ServiceCard
                title="Glazing"
                description="Glass repair and replacement for windows and doors."
                icon={<FaWindowRestore />}
              />
              <ServiceCard
                title="Security Door Installation"
                description="Secure, custom-fit doors for safety and peace of mind."
                icon={<FaShieldAlt />}
              />
              <ServiceCard
                title="Sliding Door & Window Replacement"
                description="Upgrade old sliders and windows with ease."
                icon={<FaDoorOpen />}
              />
              <ServiceCard
                title="Shower Screen Installation"
                description="Stylish and durable shower screens fitted to your bathroom."
                icon={<FaShower />}
              />
              <ServiceCard
                title="Bathroom Mirror & Light Installation"
                description="Brighten bathrooms with elegant mirrors and lighting."
                icon={<GiMirrorMirror />}
              />
              <ServiceCard
                title="Fly Screen Installation"
                description="Keep bugs out while letting fresh air in."
                icon={<FaShieldAlt />}
              />
              </div>
            </div>
          </section>
          
          <section id="about" className="scroll-mt-24 py-section bg-white text-brand-dark">  
            <div className="container max-w-6xl mx-auto px-4">
              <h2 className="section-title text-brand-primary mb-4">About Us</h2>
              
              <p className="mb-6 text-lg leading-relaxed">
                At <strong>Choden Landscaping & Handyman Services</strong>, we bring over <strong>10 years of hands-on experience</strong> in transforming outdoor spaces into practical, beautiful environments. From turf laying to garden beds, concrete works to general repairs — we’re the team locals trust for quality workmanship and reliability.
              </p>

              <p className="mb-6 text-lg leading-relaxed">
                Based in Hobart, our crew understands the Tasmanian climate and soil, which helps us deliver durable, low-maintenance solutions that stand the test of time. Whether it's a new garden feature, a fresh concrete path, or seasonal maintenance, we treat every job — big or small — with the same care and professionalism.
              </p>

              <p className="text-lg leading-relaxed">
                Our commitment? <strong>Honest service. Transparent pricing. Lasting results.</strong> We believe in doing things once and doing them right.
              </p>
            </div>
          </section>

          <section
            id="contact"
            className="py-section bg-wood-texture bg-cover bg-center text-white relative"
          >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative container max-w-3xl mx-auto text-center z-10">
              <h2 className="section-title text-white text-glow">Get in Touch</h2>
              <p className="mb-6 text-lg text-gray-200">
                Let's bring your outdoor vision to life. Reach out today for a free quote or consultation.
              </p>
              <div className="space-y-2 text-lg font-semibold text-brand-accent">
                <p>📞 <a href="tel:0415977783" className="hover:underline ">0415 977 783</a></p>
                <p>📧 <a href="mailto:chodenbrothersservices@gmail.com" className="hover:underline">chodenbrothersservices@gmail.com</a></p>
              </div>
              <Button href="tel:0415977783" className="mt-4">
                Call Now
              </Button>
            </div>
          </section>



        </main>
      </div>  
      <Footer /> {/* Importing Footer component from components folder */}
    </>
  );
};

export default App;



// serviceCard.jsx

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="card text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
// This component can be used to display individual service cards in the services section of your app.
// I have passed props like title, description, and icon to customize each card.
// I can also import and use this component in the Services section like this:
// import ServiceCard from './ServiceCard';