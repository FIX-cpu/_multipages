import './Home.css';

function Home() {
    return (
        <div className='home-container'>
            <div className="profile-container">
      <div className="profile-image-section">
        <img 
          src="./img/pictures/Fix.jfif" 
          alt="Chonlakorn Bualuang" 
          className="profile-image"
        />
        <div className="profile-name">
          <h2>WITTAWAT KUISING</h2>
          <p>Currently studying at</p>
          <p>Computer Science and Software Development Innovation Department (CSI)</p>
          <p>at Sripatum University (SPU)</p>
        </div>
      </div>
      <div className="profile-info-section">
        <h3>Personal information:</h3>
        <ul>
          <li><strong>Name:</strong> WITTAWAT KUISING</li>
          <li><strong>Nickname:</strong> Fix</li>
          <li><strong>Age:</strong> 20 years old</li>
          <li><strong>My birthday:</strong> 11th of August 2004</li>
          <li><strong>Studying at:</strong> Sripatum University, Computer Science and Software Development Innovation Department, Faculty of Information Technology</li>
          <li><strong>Study about:</strong> Full stack software development by writing code such as HTML, CSS, JAVASCRIPT, PYTHON, PHP, .NET, NODEJS, JAVA, etc. Making it possible to solve problems, design systems, design UX/UI and develop software for both FRONT-END and BACK-END parts.</li>
        </ul>
        <p>Thanks for visiting my website !!!</p>
      </div>
    </div>
        </div>
      );
}

export default Home;