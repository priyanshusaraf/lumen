import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WordCloud from '@/components/WordCloud'
import Features from '@/components/Features'
import MarketImpact from '@/components/MarketImpact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WordCloud />
      <Features />
      <MarketImpact />
      <Footer />
    </main>
  )
}