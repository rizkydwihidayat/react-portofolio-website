import "./intro.css";

const Intro = () => {
  const downloadCV = () => {
    fetch('cv-rizkydwihidayat.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'CV-Rizky.pdf';
            alink.click();
        })
    })
  }

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Rizky Dwi Hidayat</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Frontend Engineer </div>
            </div>
            <br />
            <br />
          </div>
          <p className="i-description">
            An individual who likes and is passionate about working in IT,<br />
            especially Frontend development and UI Design.
          </p>
          <div className="i-btn">
            <button className="i-btn-contact" href="#contact">Contact Me</button>
            <button className="i-btn-download" onClick={downloadCV}>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
