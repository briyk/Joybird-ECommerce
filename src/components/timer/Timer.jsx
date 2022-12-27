import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { useState, useEffect } from 'react'
import counterImg from '../../assets/images/counter-timer-img.png'
import './timer.css'

const Timer = () => {
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [mintues, setMintues] = useState()
    const [seconds, setSeconds] = useState()
    let interval;
    const handleCounter = () => {
        const destination = new Date('sep 1, 2023').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = destination - now;
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const mintues = Math.floor(difference % (1000 * 60 * 60 ) / (1000 * 60));
            const seconds = Math.floor(difference % (1000 * 60  ) / (1000));

            if (destination <= 0) clearInterval(interval.current)
            else {
                setDays(days);
                setHours(hours);
                setMintues(mintues);
                setSeconds(seconds);
            }
        })
    }

    useEffect(() =>{
        handleCounter() ;
    } ,[])

    return (
        <section className='section__space timer'>

            <Container>
                <Row className='justify-content-center align-items-center'>
                    <Col lg={6} md={12}>
                        <div className="timer__content text-white">
                            <h4>Limited Offers</h4>
                            <h3>Quality Armchair</h3>
                        </div>
                        <div className="clock  my-2 d-flex align-items-center gap-5">
                            <div className="clock__data d-flex align-items-center gap-5">
                                <div className='text-white'>
                                    <h1>{days}</h1>
                                    <h5>Days</h5>
                                </div>
                                <span className='fs-1 text-white'>:</span>
                            </div>
                            <div className="clock__data d-flex align-items-center gap-5 ">
                                <div className='text-white'>
                                    <h1>{hours}</h1>
                                    <h5>Hours</h5>
                                </div>
                                <span className='fs-1 text-white'>:</span>
                            </div>
                            <div className="clock__data d-flex align-items-center gap-5">
                                <div className='text-white'>
                                    <h1>{mintues}</h1>
                                    <h5>Mintues</h5>
                                </div>
                                <span className='fs-1 text-white'>:</span>
                            </div>
                            <div className="clock__data d-flex align-items-center gap-5">
                                <div className='text-white'>
                                    <h1>{seconds}</h1>
                                    <h5>Seconds</h5>
                                </div>

                            </div>
                        </div>
                        <button className='buy-btn'>
                            <Link to="/shop">Visit Store</Link>
                        </button>
                    </Col>
                    <Col lg={6} md={12} className="text-end timer-img">
                        <img src={counterImg} alt="counter" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Timer 