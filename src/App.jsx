import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Footer from './components/Footer'

export default function App() {
  const [technologies, setTechnologies] = useState([])
  const [selected, setSelected] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch('/technologies.json')
        if (!response.ok) throw new Error('Failed to load technologies')
        const data = await response.json()
        setTechnologies(data)
      } catch (error) {
        toast.error('Could not load technology data.')
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadTechnologies()
  }, [])

  const handleAdd = (tech) => {
    const alreadySelected = selected.some((item) => item.id === tech.id)
    if (alreadySelected) {
      toast.warning(`${tech.name} is already in your stack.`)
      return
    }

    setSelected((current) => [...current, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  const handleRemove = (id) => {
    const target = selected.find((item) => item.id === id)
    setSelected((current) => current.filter((item) => item.id !== id))
    toast.info(`${target?.name || 'Technology'} removed.`)
  }

  const handleRemoveAll = () => {
    if (selected.length === 0) return
    setSelected([])
    toast.info('All technologies removed from your stack.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar />
      <main>
        <Hero />
        <Technologies
          technologies={technologies}
          selected={selected}
          loading={loading}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
        <section id="projects" className="sr-only" aria-label="Projects" />
        <section id="contact" className="sr-only" aria-label="Contact" />
      </main>
      <Footer /> */}
    </div>
  )
}
