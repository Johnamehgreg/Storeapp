import React from 'react'
import SectionItem from '../components/SectionItem'

const Home = () => {
    return (
        <div className="home-container">

            <section className="section-header ">
                <h1 className='header-hm ml-1 '>New Zealand</h1>
                <p className='text-hm mb-2'>
                    This project might be trickier than it seems. Look around carefully. What you see?
                    <br />
                    The sky is blue, the grass is green. The sun shines through the window.
                </p>
            </section>

            <SectionItem />

        </div>
    )
}

export default Home