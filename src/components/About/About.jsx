import React from 'react';
import bioPic from '../../assets/images/biopic2.jpg'

function About() {
  return (
    //<!-- About Me -->
    <section id="about-me" className="about-me main">
      <div className="body-title">
          <h2>About Me</h2>
      </div>
      <div className="body-box">
        <p>
        <img src={bioPic}  alt="Bio Pic" />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione quas dolorum dolorem recusandae minus enim eligendi dignissimos est, blanditiis facilis delectus quae ea expedita, iste reprehenderit debitis labore suscipit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque vel rem sed debitis maiores voluptas ratione cupiditate, nostrum perferendis omnis dolor sunt alias et nemo cumque assumenda molestias numquam ea.
        </p>
        <br></br>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi ut est obcaecati at a maxime tempore adipisci molestiae fugiat, temporibus quis facere ad autem modi iusto quisquam unde aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sed deserunt at aut, doloremque culpa voluptatum, ad quisquam in tenetur voluptatem modi cumque aspernatur molestiae? Cum facere et soluta velit.
        </p>
      </div>
    </section>
  );
}

export default About;