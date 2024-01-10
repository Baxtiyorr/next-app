import './Booking.css'
import b from '../../assets/images/B.png'
import Image from 'next/image'

const Booking = () => {
  return (
    <section>
      <div className="booking">
        <Image
            src={b}
            alt='b'
        />
        <div className="container">
            <div className="booking__contacts">
                <h2><span>Bookings</span> & Contact</h2>
                <form className='form'>
                    <label>
                        Name <br />
                        <input type="text" placeholder="Name"  className='input'/>
                    </label>
                    <label>
                    Email <br />
                        <input type="text" placeholder="Email"  className='input'/>
                    </label>
                    <label>
                        Phone <br />
                        <input type="text" placeholder="Phone"  className='input'/>
                    </label>
                    <label>
                        Number of people <br />
                        <input type="text" placeholder="Number of people"  className='input'/>
                    </label>
                </form>
                <div className="date">
                    <h3>Date & Time</h3>
                    <div className="calendar">
                        <div className="title">
                            <button className='title-btn'> {'<'} </button>
                            <h3>July</h3>
                            <button className='title-btn'> {'>'} </button>
                        </div>
                        <div className="days">
                            <h3 className='day'>S</h3>
                            <h3 className='day'>M</h3>
                            <h3 className='day'>T</h3>
                            <h3 className='day'>W</h3>
                            <h3 className='day'>T</h3>
                            <h3 className='day'>F</h3>
                            <h3 className='day'>S</h3>
                            <h4 className='prev-day'>27</h4>
                            <h4 className='prev-day'>28</h4>
                            <h4 className='prev-day'>29</h4>
                            <h4 className='prev-day'>30</h4>
                            <h4 className='prev-day'>31</h4>
                            <h4>1</h4>
                            <h4>2</h4>
                            <h4>3</h4>
                            <h4>4</h4>
                            <h4>5</h4>
                            <h4>6</h4>
                            <h4>7</h4>
                            <h4>8</h4>
                            <h4>9</h4>
                            <h4>10</h4>
                            <h4>11</h4>
                            <h4>12</h4>
                            <h4>13</h4>
                            <h4 className='current-day'>14</h4>
                            <h4>15</h4>
                            <h4>16</h4>
                            <h4>17</h4>
                            <h4>18</h4>
                            <h4>19</h4>
                            <h4>20</h4>
                            <h4>21</h4>
                            <h4>22</h4>
                            <h4>23</h4>
                            <h4>24</h4>
                            <h4>25</h4>
                            <h4>26</h4>
                            <h4>27</h4>
                            <h4>28</h4>
                            <h4>29</h4>
                            <h4>30</h4>
                        </div>
                    </div>
                </div>
                <button className='contact-btn'>Submit</button>

                <div className="contact__info">
            <h2>Contact info</h2>
            <div className="phone">
                <h4>
                Phone
                </h4>
                <p>
                (555) 123-4567
                </p>
            </div>
            <div className="email">
                <h4>Email</h4>
                <a href='#'>info@liquidmaestro.com</a>
            </div>
        </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
