import React from 'react'
import { evidenceGroups } from './data/evidence'
import Nav from './components/Nav'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import EvidenceSection from './components/EvidenceSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <StatsBar />
      {evidenceGroups.map(group => (
        <EvidenceSection key={group.id} group={group} />
      ))}
      <Footer />
    </>
  )
}
