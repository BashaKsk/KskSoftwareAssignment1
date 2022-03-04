import {Component} from 'react'

import './index.css'

class CarCatalogue extends Component {
  render() {
    return (
      <div className="bg-container">
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#sectionHome">
                <img
                  src="https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1963.jpg"
                  className="food-munch-logo"
                  alt="Loading"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                  <a
                    className="nav-link active"
                    id="navItem1"
                    href="#sectionHome"
                  >
                    Home
                    <span className="sr-only">(current)</span>
                  </a>

                  <a
                    className="nav-link active"
                    id="navItem1"
                    href="#sectionServices"
                  >
                    Services
                    <span className="sr-only">(current)</span>
                  </a>
                  <a className="nav-link" href="#sectionCars" id="navItem2">
                    Find Cars
                  </a>
                  <a className="nav-link" href="#sectionContact" id="navItem3">
                    Contact Us
                  </a>
                  <a className="nav-link" href="#sectionAbout" id="navItem4">
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="main-section">
          <div className="home-section" id="sectionHome">
            <h1>
              Welcome to Bayerische <br /> Motoren Werke AG
            </h1>
            <div className="btn-container">
              <button type="button" className="btn">
                More
              </button>
              <button type="button" className="btn">
                View All
              </button>
            </div>
            <p className="description">Thank you for entering here</p>
          </div>
          <div className="section" id="sectionServices">
            <hr className="main-line" />
            <h1>Services</h1>
            <div className="services1">
              <div className="service">
                <img
                  src="https://www.ridetime.ca/wp-content/uploads/2018/07/shutterstock_511829017.jpg"
                  alt="loading"
                  className="img"
                />
                <p className="service-description">Air filter Change</p>
              </div>

              <div className="service">
                <img
                  src="https://www.mikejohnsimports.com/wp-content/uploads/MINI-Engine-Oil-Change.jpg"
                  alt="loading"
                  className="img"
                />
                <p className="service-description">Engine Oil Change</p>
              </div>
              <div className="service">
                <img
                  src="https://carroar.com/wp-content/uploads/2019/10/car-air-filter.jpg"
                  alt="loading"
                  className="img"
                />
                <p className="service-description"> AC filter Change</p>
              </div>
              <div className="service">
                <img
                  src="https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/1_How_to_Change_Spark_Plugs_in_a_Car_person_removing_a_spark_plug_from_a_car_engine"
                  alt="loading"
                  className="img"
                />
                <p className="service-description">Spark Plug Change</p>
              </div>
              <div className="service">
                <img
                  src="https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2021/02/29081446/WhentoChangeyourcarstyre02102021.jpg"
                  alt="loading"
                  className="img"
                />
                <p className="service-description">
                  Check the Condition of Tyres
                </p>
              </div>
            </div>
            <hr className="main-line" />
          </div>

          <div className="find-car-section" id="sectionCars">
            <h1 style={{color: 'white'}}>Cars</h1>

            <div className="services1">
              <div className="car-container">
                <img
                  src="https://imgd.aeplcdn.com/1056x594/n/74bausa_1482332.jpg?q=75"
                  alt="carLoading"
                  className="img"
                />
                <p className="car-name">BMW X1</p>
                <p className="car-price">Price : ₹1.79 Lakh</p>
              </div>

              <div className="car-container">
                <img
                  src="https://images.carandbike.com/car-images/colors/bmw/x3/bmw-x3-phytonic-blue-metallic.png?v=1643793806"
                  alt="carLoading"
                  className="img"
                />
                <p className="car-name">BMW X3</p>
                <p className="car-price">Price : ₹59.90 Lakh</p>
              </div>

              <div className="car-container">
                <img
                  src="https://imgd.aeplcdn.com/1056x594/n/05uvesa_1463397.jpg?q=75"
                  alt="carLoading"
                  className="img"
                />
                <p className="car-name">BMW X5</p>
                <p className="car-price">Price : ₹69.90 Lakh</p>
              </div>
              <div className="car-container">
                <img
                  src="https://imgd.aeplcdn.com/664x374/cw/ec/28286/BMW-X7-Right-Front-Three-Quarter-164106.jpg?wm=0&q=75"
                  alt="carLoading"
                  className="img"
                />
                <p className="car-name">BMW X7</p>
                <p className="car-price">Price : ₹1.15 Cr</p>
              </div>
              <div className="car-container">
                <img
                  src="https://imgd.aeplcdn.com/1056x594/n/c2l7osa_1474664.jpg?q=75"
                  alt="carLoading"
                  className="img"
                />
                <p className="car-name">BMW 3 Series</p>
                <p className="car-price">Price : ₹40 Lakh</p>
              </div>
              <div className="car-container">
                <img
                  src="https://www.ccarprice.com/products/BMW_5_Series_540i_2021.jpg"
                  alt="carLoading"
                  className="img"
                />
                <p className="car-name">BMW 5 Series</p>
                <p className="car-price">Price : ₹63.90 Lakh</p>
              </div>

              <div className="car-container">
                <img
                  src="https://imgd.aeplcdn.com/1056x594/n/c7kn9sa_1463923.jpg?q=75"
                  alt="carLoading"
                  className="img"
                />
                <p className="car-name">BMW Z4 Series</p>
                <p className="car-price">Price : ₹69.90 Lakh</p>
              </div>

              <div className="car-container">
                <img
                  src="https://imgd.aeplcdn.com/1280x720/cw/ec/37095/BMW-Z4-Roadster-Right-Front-Three-Quarter-153914.jpg?wm=0&q=75"
                  alt="carLoading"
                  className="img"
                />
                <p className="car-name">BMW Z5 Series</p>
                <p className="car-price">Price : ₹82.90 Lakh</p>
              </div>
            </div>
            <hr className="main-line" />
          </div>
          <div className="section" id="sectionContact">
            <h1>Contact Us</h1>
            <div className="contact-details">
              <div className="email-container">
                <i className="fas fa-envelope icon" />
                <p>Email : contact.india@bmw.in</p>
              </div>
              <div className="email-container">
                <i className="fas fa-address-card icon" />
                <p>Contact : 1800 102 2269</p>
              </div>

              <div className="icon-container">
                <i className="fab fa-facebook icon" />

                <i className="fab fa-instagram-square icon" />
                <i className="fab fa-linkedin icon" />

                <i className="fab fa-twitter-square icon" />
              </div>
            </div>
            <hr className="main-line" />
          </div>
          <div className="section" id="sectionAbout">
            <h1>About Us</h1>
            <div className="text-container">
              <p>
                Bayerische Motoren Werke AG, commonly referred to as BMW, is a
                German multinational corporate manufacturer of luxury vehicles
                and motorcycles headquartered in Munich, Bavaria, Germany. The
                corporation was founded in 1916 as a manufacturer of aircraft
                engines, which it produced from 1917 until 1918 and again from
                1933 to 1945. Automobiles are marketed under the brands BMW,
                Mini and Rolls-Royce, and motorcycles are marketed under the
                brand BMW Motorrad, in 2017, BMW was the worlds
                fourteenth-largest producer of motor vehicles, with 2,279,503
                vehicles produced.[3] The company has significant motorsport
                history, especially in touring cars, Formula 1, sports cars and
                the Isle of Man TT.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CarCatalogue
