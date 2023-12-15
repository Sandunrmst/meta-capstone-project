import img1 from "../images/reviewer1.png"
import img2 from "../images/reviewer2.png"
import img3 from "../images/reviewer3.png"


export default function Testimonials() {
    return (
      <div className="testimonials-parent">
        <p className="testimonials-title">Testimonials</p>
        <div className="testimonials">
            <div className="testimonial">
                <img className="reviewer-img" src={img1} alt="greek salad"/>
                <div className="name-rating">
                    <p className="reviewer-name">John Doe</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed, faucibus mattis lorem. </p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src={img2} alt="greek salad"/>
                <div className="name-rating">
                    <p className="reviewer-name">John Doe</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, iaculis libero lacus non diam. </p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src={img3} alt="greek salad"/>
                <div className="name-rating">
                    <p className="reviewer-name">John Doe</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                    iaculis libero lacus non diam. </p>
                </div>
            </div>
        </div>
      </div>
    )
  }
  

  