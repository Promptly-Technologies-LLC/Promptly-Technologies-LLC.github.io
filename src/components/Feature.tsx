import './Feature.css';

const Feature = () => {
  const portraitImage = {"alt": "Mockup of Scribert app on a mobile device", "src": "images/mobile-mockup2.png"};

  
  return (
    <div className="feature-container">
      <div className="feature-text">
        <p>
          <a href='https://scribert.com'>Scribert</a>, your AI speech-to-text companion, transcribes your voice note and outputs polished, formatted text. Sign up by March 31 with promo code 'NEWALPHAUSER' and get 100% off your first month!
        </p>
        <div>
          <button className="button">Sign up</button>
        </div>
      </div>
      <div className="feature-image">
        <img src={portraitImage.src} alt="Portrait" />
      </div>
    </div>
  );
};

export default Feature;