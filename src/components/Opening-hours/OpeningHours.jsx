import './OpeningHours.css'

const OpeningHours = () => {
  return (
    <section className='opening-section'>
      <div className="container">
        <div className="opening">
            <h2><span>Opening</span> Hours</h2>

            <div className="opening__days">
                <h3>Mon - Thu: <span>5 PM - 12 AM</span> </h3>
                <h3>Fri - Sat: <span>5 PM - 2 AM</span></h3>
                <h3 className='closed-day'>Sun: Closed</h3>
            </div>
        </div>
      </div>
    </section>
  )
}

export default OpeningHours
