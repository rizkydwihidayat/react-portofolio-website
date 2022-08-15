import "./about.css";
import Me from "../../img/me.jpeg"
import Alterra from "../../img/alterra.png";
import Bag from "../../img/suitcase.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Enthusiastic software engineer with an understanding of frontend
          development. Familiar in HTML, CSS, and JavaScript framework (NuxtJS,
          VueJS, ReactJS) programming languages used to develop software or web
          apps.
        </p>
        <p className="a-desc">
          <br />
          Other than that, I'm also happy with the UI Design. Learn how to make
          a good UI design for mobile or web apps, starting from wireframe into
          real design.
        </p>
        <div className="a-expr">
          <div className="a-expr-job left">
            <img src={Bag} alt="" className="a-bag-icon" />
          </div>
          <div className="a-expr-job right">
            <h3 className="a-title-exp">Work Experience</h3>
          </div>
        </div>
        <div className="a-divider">
          <span></span>
        </div>
        <div className="a-expr">
          <div className="a-expr-job left">
            <img src={Alterra} alt="" className="a-bag-icon" />
          </div>
          <div className="a-expr-job right">
            <p className="a-sub-exp">Alterra Indonesia</p>
          </div>
        </div>
        <div className="a-expr-list">
          <ul>
            <li className="a-list-first">
              Software Engineer (Frontend)
              <br />
              <p>
                <small className="orange-text">Apr 2019 - Present</small>
              </p>
              <p className="a-list-desc">
                  Build, maintain and optimize web apps like a dashboard admin, PWA apps, and handle API
                  Integration. Convert mockup from UI/UX design into interactive
                  web using NodeJS, Vue, React & Next with JS or Typescript.
              </p>
              {/* <br /> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
