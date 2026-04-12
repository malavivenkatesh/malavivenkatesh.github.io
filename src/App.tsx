import './App.css'

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Malavika Venkatesh</h1>
          <p>
            Software Engineer
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with me</h2>
          <ul>
            <li>
              <a href="https://github.com/malavivenkatesh" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/malavikavenkatesh/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#linkedin-icon"></use>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:malavivenkatesh@gmail.com" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#email-icon"></use>
                </svg>
                Email
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1gLNtXpK6sz_nKYERFHzGU88SOsH5LQCq/view?usp=sharing" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#resume-icon"></use>
                </svg>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
