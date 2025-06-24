import ButtonGradient from "./assets/svg/ButtonGradient"; {/* Importing ButtonGradient SVG component */}
import ServiceCard from "./components/ServiceCard"; {/* Importing ServiceCard component from components folder */}
import { FaLeaf, FaTools, FaTree, FaHammer, FaDoorOpen, FaWindowRestore, FaShower, FaBath, FaShieldAlt } from "react-icons/fa"; {/* Importing Font Awesome icons */}
import { MdOutlineYard } from 'react-icons/md'; {/* Importing Material Design icons */}
import { GiMirrorMirror } from 'react-icons/gi';  {/* Importing icons from react-icons library */}
import Header from "./components/Header";  {/* Importing Header component from components folder */}
import Footer from "./components/Footer"; {/* Importing Footer component from components folder */}


const App = () => {         {/* Declaring App with es6 const function */} 
  return (
    <>                      {/* Wrapping inside react fragment to add more elements later */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden scroll-smooth">
        <Header />  {/* Importing Header component from components folder */}
        <main>

          <section id="home" className="min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Welcome to Choden Landscaping</h1>
          </section>

          <section id="services" className="py-section bg-brand-light text-brand-dark">
            <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </section>
          
          <section id="about" className="py-section bg-white text-brand-dark">  
            <div className="container max-w-4xl mx-auto px-4">
              <h2 className="section-title text-brand-primary">About Us</h2>
              
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

          <section id="contact" className="py-section bg-brand-dark text-white">
            <div className="container text-center">
              <h2 className="section-title text-white">Get in Touch</h2>
              <p className="mb-6">Call us at <strong>0415 977 783</strong> or email <strong>info@chodengardens.com</strong></p>
              <a href="tel:0415977783" className="btn-primary inline-block">Call Now</a>
            </div>
          </section>

        </main>
      </div>  
      <Footer /> {/* Importing Footer component from components folder */}
      <ButtonGradient />  {/* Importing ButtonGradient SVG component for the button gradient effect */}
    </>
  );
};

export default App;
