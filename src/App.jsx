import Header from "./components/Header";  {/* Importing Header component from components folder */}
import Footer from "./components/Footer"; {/* Importing Footer component from components folder */}
import Services from "./components/Services"; {/* Importing Services component from components folder */}
import Hero from "./components/Hero"; {/* Importing Hero component from components folder */}
import About from "./components/About"; {/* Importing About component from components folder */}
import Contact from "./components/Contact"; {/* Importing Contact component from components folder */}

const App = () => {         {/* Declaring App with es6 const function */} 
  return (
    <>                      {/* Wrapping inside react fragment to add more elements later */}
      <div className="pt-[8rem] lg:pt-[8rem] overflow-hidden scroll-smooth">
        <Header />  {/* Importing Header component from components folder */}
        <main>

          <Hero />  {/* Importing Hero component from components folder */}

          <Services />  {/* Importing Services component from components folder */}
          
          <About /> {/* Importing About component from components folder */}

          <Contact />  {/* Importing Contact component from components folder */}

        </main>
      </div>  
      
      <Footer /> {/* Importing Footer component from components folder */}
    </>
  );
};

export default App;
