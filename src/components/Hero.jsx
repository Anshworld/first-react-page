const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="herosection">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="second-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icon">
            <img src="\img\amazon.png" alt="amazonlogo" />
            <img src="\img\flipkart.png" alt="amazonlogo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="\img\shoe_image.png" alt="amazonlogo" />
      </div>
    </main>
  );
};

export default HeroSection;
