import React, { useState } from "react"
import InputMask from "react-input-mask"

const Footer = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`
    Ваше имя ${name}
    Ваша почта ${email}
    Ваш номер ${phone}
    Ваш коментарий ${comment}
    `)
  }

  return (
    <footer className="footer">
      <div className="footer__title title rubik-light">Leave a request</div>
      <div className="footer__flex-container">
        <div className="footer__flex-item footer__flex-item--margin">
          <form onSubmit={handleSubmit}>
            <div className="form-item footer__form">
              <label htmlFor="#name" className="form-item__title rubik-regular">
                Your name
              </label>
              <input
                id="#name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                type="text"
                placeholder="Please introduce yourself"
                className="form-item__field rubik-regular"
                required
              />
            </div>
            <div className="form-item footer__form">
              <label
                htmlFor="#email"
                className="form-item__title rubik-regular"
              >
                Email
              </label>
              <input
                id="#email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="ivanov@mail.ru"
                className="form-item__field"
                required
              />
            </div>
            <div className="form-item footer__form">
              <label
                htmlFor="#phone"
                className="form-item__title  rubik-regular"
              >
                Phone number
              </label>
              {/* <input
                id="#phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                type="tel"
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                placeholder="7999-123-4578"
                className="form-item__field rubik-regular"
                required
              /> */}
              <InputMask
                className="form-item__field rubik-regular"
                placeholder="+7(999) 999 9999"
                id="#phone"
                value={phone}
                mask="+7 (999) 999 9999"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-item footer__form">
              <label
                htmlFor="comment"
                className="form-item__title rubik-regular"
              >
                Comment
              </label>
              <input
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                type="text"
                name="comment"
                placeholder="Message text"
                className="form-item__field rubik-regular"
              />
            </div>
            <input
              type="submit"
              className="button footer__buttom"
              value="Send"
            />
          </form>
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
