import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__title title rubik-light">Leave a request</div>
      <div className="footer__flex-container">
        <div className="footer__flex-item footer__flex-item--margin">
          <div className="form-item footer__form">
            <p className="form-item__title rubik-regular">Your name</p>
            <input
              type="text"
              placeholder="Please introduce yourself"
              className="form-item__field rubik-regular"
            />
          </div>
          <div className="form-item footer__form">
            <p className="form-item__title rubik-regular">Email</p>
            <input
              type="text"
              placeholder="ivanov@mail.ru"
              className="form-item__field"
            />
          </div>
          <div className="form-item footer__form">
            <p className="form-item__title  rubik-regular">Phone number</p>
            <input
              type="text"
              placeholder="+7 (999) 123-45-78"
              className="form-item__field rubik-regular"
            />
          </div>
          <div className="form-item footer__form">
            <p className="form-item__title rubik-regular">Comment</p>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Message text"
              className="form-item__field rubik-regular"
            />
          </div>
          <button className="button footer__buttom">Send</button>
          <div className="footer__confirm-message rubik-regular">
            By clicking "Send" you confirm your consent to the{" "}
            <a href="#" className="footer__link">
              processing of personal data
            </a>
          </div>
        </div>
        <div className="footer__flex-item">
          <div className="about-company rubik-regular">
            <div className="about-company__message">
              We will advise you and help you start a new project
            </div>
            <div className="about-company__phone">+7 499 391-66-69</div>
            <div className="about-company__mail">mail@greensight.ru</div>
            <div className="about-company__adres">
              Moscow, Zelenograd, Central Ave., bldg. 305, 3rd floor
            </div>
            <div className="about-company__route">How to get there?</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
