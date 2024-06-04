import React from 'react'
import { UilInstagram, UilGithubAlt, UilLinkedinAlt } from '@iconscout/react-unicons'



function Social() {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/luna.rs/" className="home__social-icon" target="_blank">
            <i>
                <UilInstagram/>
            </i>
        </a>
        <a href="https://www.instagram.com/luna.rs/" className="home__social-icon" target="_blank">
            <i>
                <UilGithubAlt/>
            </i>
        </a>
        <a href="https://www.instagram.com/luna.rs/" className="home__social-icon" target="_blank">
            <i>
                <UilLinkedinAlt/>
            </i>
        </a>

    </div>
  )
}

export default Social