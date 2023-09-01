import Features from "../components/Features"
import GetStarted from "../components/GetStarted"
import Landing from "../components/Landing"
import Stayproductive from "../components/Stayproductive"
import Testimonials from "../components/Testimonials"

function Home() {
  return (
    <>
        <Landing />
        <Features/>
        <Stayproductive/>
        <Testimonials />
        <GetStarted/>
    </>
  )
}

export default Home