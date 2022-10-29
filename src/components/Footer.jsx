import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="title rubik-light">Leave a request</div>
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
      .
    </footer>
  )
}

export default Footer
