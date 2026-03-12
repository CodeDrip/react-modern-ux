import Navbar from "./layout/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" >
      <Navbar />
      <main>
        <Hero/>

        {/* <!-- Neon Pink Button --> */}
<button class="bg-accent-400 text-accent-foreground shadow-neon-pink hover:bg-accent-300">
  Cyberpunk Action
</button>

{/* <!-- Teal Primary --> */}
<button class="bg-primary-400 text-primary-foreground shadow-neon-teal">
  Primary
</button>

{/* <!-- Gradient Text --> */}
<h1 class="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
  Futuristic Title
</h1>

{/* <!-- Glass Card --> */}
<div class="bg-surface/80 backdrop-blur-md border border-border shadow-glass rounded-lg">
  Content
</div>



        {/* 
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact /> */}
      </main>
    </div>
  )
}

export default App
