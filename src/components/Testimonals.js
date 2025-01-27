import React, { useState } from "react";
import "./testimonals.css";
import Enrique from "../img/Enrique.jpg";
import JimBole from "../img/Jim Bole.jpg";

const testimonialsData = [
  {
    text: "Nikhitha has been an outstanding member of the group. She is a quick learner and is now able to handle more complex identity and access management support tickets. She is prompt and reliable. She’s shows up on time and documents her work well. She is a great collaborator, working well with her colleagues. She is enthusiastic and shows maturity in handling her assigned tasks.",
    image: JimBole,
    name: "Jim Bole",
    designation: "Chief Info. Security Officer",
  },
  {
    text: "What stood out most about Nikhitha was her proactive attitude and eagerness to learn. She regularly sought feedback, incorporated it into her work, and went above and beyond to ensure tasks were completed to the highest standard. Her professionalism, attention to detail, and collaborative spirit made her a joy to work with.I am confident that Nikhitha will continue to excel in her future endeavors. She is a talented individual, and I have no doubt she will be an asset to any organization lucky enough to have her.",
    image: Enrique,
    name: "Enrique Corado",
    designation: "Director of Technology and Services",
  },
  {
    text: "Sed eget sed est, eget dui quis etiam. Eget dui quis etiam sed eget sed est.",
    image:
      "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors3.svg",
    name: "Alice Brown",
    designation: "Manager",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <div >
      <div className="heading"> <div className="subtitle">Testimonals</div>
      <h1>Thanks, talk soon!</h1></div>
     
      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={prevSlide}>
          ❮
        </button>
        <div className="testimonial">
          <div className="review-info">
            <img
              className="profile-img"
              src={testimonialsData[currentIndex].image}
              alt={testimonialsData[currentIndex].name}
            />
            <div>
              <h4>{testimonialsData[currentIndex].name}</h4>
              <div class="review-subtitle">
                {testimonialsData[currentIndex].designation}
              </div>
            </div>
          </div>
          <p className="paragraph-review">
            "{testimonialsData[currentIndex].text}"
          </p>
        </div>
        <button className="carousel-btn next-btn" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
