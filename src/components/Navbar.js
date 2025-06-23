import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
        <a className="navbar-brand grow" href="#">LOCATE LOOM</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item grow">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item grow">
              <a className="nav-link" href="forms/lostForm.html">Lost</a>
            </li>
            <li className="nav-item grow">
              <a className="nav-link" href="forms/foundForm.html">Found</a>
            </li>
            <li className="nav-item grow">
              <a className="nav-link" href="about_us.html">About Us</a>
            </li>
            <li className="nav-item grow">
              <a className="nav-link" href="forms/contactus.html">Contact Us</a>
            </li>
          </ul>
          <a href="./forms/register.html">
            <i className="fas fa-user signin grow"> SignIn</i>
          </a>
        </div>
      </nav>

      <main>
        <section className="discovery container section-1">
          <div className="text col-lg-6 col-md-6 col-12 w-50 d-flex flex-column align-items-center justify-content-center">
            <h1 className="got-lost-heading mb-3">LOCATE LOOM</h1>
            <p>Something lost it's way and came to you just to show the world how honest you are!</p>
            <p className="mb-5">Or if you've lost something just chill! People here are damnnn cool!</p>
            <div className="shrink">
              <a className="learn-more" href="forms/register.html">Register Now</a>
            </div>
          </div>
          <div className="img col-lg-6 col-md-6 col-12">
            <img src="frontend\src\images\lost-and-found.png" alt="image" className="img-fluid lost-found" />
          </div>
        </section>

        <section className="discovery-col-ak section-2">
          <div className="container">
            <div className="img col-lg-6 col-md-6 col-12 w-50 pt-5 pb-5">
              <img src="frontend\src\images\community.png" alt="image" className="img-fluid border-top-20" />
            </div>
            <div className="text col-lg-6 col-md-6 col-12 w-50 pt-5 pb-5">
              <h2 className="title mb-3">
                WHAT WE DO
                <hr />
              </h2>
              <p className="mb-5">
                We try to reduce students’ stress somewhat by helping them if they lost something precious on college/hostel grounds. <br />
                There are two sections — LOST and FOUND. You can inform others about what you’ve lost and ask for help, or report what you’ve found. <br />
                Faculty involvement is minimal, promoting student bonding and transparency.
              </p>
              <div className="shrink d-inline-block">
                <a className="learn-more px-5" href="about_us.html">Learn More</a>
              </div>
            </div>
          </div>
        </section>

        <section className="service section-3">
          <div className="col mx-auto align-items-center pt-5">
            <div className="heading text-center mb-5 pt-3">
              <h2 className="heading">OUR SERVICES
                <div className="d-flex justify-content-center">
                  <hr />
                </div>
              </h2>
            </div>

            <div className="d-flex flex-row-reverse justify-content-between container">
              <div className="card-image w-50 col-lg-6 col-md-3 col-12 text-right">
                <img className="img-fluid w-100" src="C:\Users\Sakshi\OneDrive\Desktop\My Project\Lost and Found MERN\frontend\src\images\lost-card.png" alt="" />
              </div>
              <div className="one col-lg-6 col-md-3 col-12 w-50 m-2 align-items-center lost-found-card">
                <h5 className="card-title">Lost</h5>
                <ul className="my-3 text-left">
                  <li className="mb-3">Only property lost on College or Hostel can be reported.</li>
                  <li className="mb-3">Max time to report a lost item: 2 days.</li>
                  <li className="mb-3">Be as detailed as possible.</li>
                  <li className="mb-5">Proceed below if you lost something.</li>
                </ul>
                <div className="shrink">
                  <a className="learn-more px-5" href="forms/lostForm.html">Next</a>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-between container mt-5 pb-5">
              <div className="card-image w-50 col-lg-6 col-md-3 col-12 text-left">
                <img className="img-fluid w-100" src="images/found-card.png" alt="" />
              </div>
              <div className="one col-lg-6 col-md-3 col-12 w-50 m-2 align-items-center lost-found-card">
                <h5 className="card-title">Found</h5>
                <ul className="my-3 text-left">
                  <li className="mb-3">Report any found property on college/hostel.</li>
                  <li className="mb-3">Report ASAP to help someone in need.</li>
                  <li className="mb-3">We minimize faculty involvement to promote student bonding.</li>
                  <li className="mb-5">If unclaimed, faculty will get involved.</li>
                </ul>
                <div className="shrink">
                  <a className="learn-more px-5" href="forms/foundForm.html">Next</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RECENT RETURNS */}
        <section className="section-4">
          <div className="heading text-center mb-4 pt-5">
            <h2 className="heading pt-5">RECENT RETURNS
              <div className="d-flex justify-content-center">
                <hr />
              </div>
            </h2>
          </div>
          <div className="container">
            <div className="card-group">
              <div className="card">
                <img src="frontend\src\images\phone.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">CELLPHONE</h5>
                  <p>Return By: <strong>Ishan Mishra</strong></p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>

              <div className="card mx-2">
                <img src="frontend\src\images\watch.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">WRIST WATCH</h5>
                  <p>Return By: <strong>Rawat Senpai</strong></p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 2 days ago</small>
                </div>
              </div>

              <div className="card">
                <img src="frontend\src\images\water-bottle.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">WATER BOTTLE</h5>
                  <p>Return By: <strong>Srishti Shukla</strong></p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 days ago</small>
                </div>
              </div>
            </div>

            <div className="card-group mt-2">
              <div className="card">
                <img src="frontend\src\images\airpods.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">AIRPODS</h5>
                  <p>Return By: <strong>MR. PALINDROME</strong></p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 5 days ago</small>
                </div>
              </div>

              <div className="card mx-2">
                <img src="frontend\src\images\football.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">FOOTBALL</h5>
                  <p>Return By: <strong>MESSI</strong></p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 7 days ago.</small>
                </div>
              </div>

              <div className="card">
                <img src="frontend\src\images\headphone.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">HEADPHONE</h5>
                  <p>Return By: <strong>CHRISTENSON</strong></p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 8 days ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom text-center mt-5 pb-5">
            <div className="shrink">
              <a className="learn-more px-5" href="gallery.html">View More</a>
            </div>
          </div>
        </section>

        <section className="service section-5">
          <div className="row align-items-center container mx-auto py-5">
            <div className="img col-lg-6 col-md-6 col-12 w-75">
              <img src="frontend\src\images\mission.png" alt="image" className="img-fluid" />
            </div>
            <div className="text col-lg-6 col-md-6 col-12 w-75">
              <h2 className="title mb-3">OUR MISSION
                <hr />
              </h2>
              <p className="mb-5">
                We aim to build a trustworthy student community and make college/hostel grounds safer for belongings. <br />
                Students carry valuables that may hold deep meaning. If you lose something, don’t stress — fill the <a href="forms/lostForm.html"><b>LOST</b></a> form and let others help you!
              </p>
              <div className="shrink d-inline-block">
                <a className="learn-more" href="about_us.html">Learn More</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-primary t-bordered section-6">
          <div className="heading text-center mb-4">
            <h2 className="heading">TESTIMONIALS
              <div className="d-flex justify-content-center">
                <hr />
              </div>
            </h2>
          </div>
          <div className="container pb-5">
            <div className="row testimonial-three testimonial-three--col-three">
              {[
                {
                  name: "Rawat Senpai",
                  img: "https://bootdey.com/img/Content/avatar/avatar1.png",
                  text: "Not gonna lie friends, it really worked for me..."
                },
                {
                  name: "Ishan Mishra",
                  img: "https://bootdey.com/img/Content/avatar/avatar2.png",
                  text: "Here to share this wonderful experience..."
                },
                {
                  name: "Srishti Shukla",
                  img: "https://bootdey.com/img/Content/avatar/avatar6.png",
                  text: "At first I didn’t put faith in this, but later..."
                }
              ].map((t, idx) => (
                <div className="col-md-4 testimonial-three-col" key={idx}>
                  <div className="testimonial-inner">
                    <div className="testimonial-image">
                      <img width="180" height="180" src={t.img} alt={t.name} />
                    </div>
                    <div className="testimonial-meta mb-2">
                      <strong className="testimonial-name">{t.name}</strong>
                    </div>
                    <div className="testimonial-content">
                      <p>{t.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="page-footer" className="py-2 bg-dark">
        <div className="brand">
          <a className="navbar-brand" href="#">LOCATE LOOM</a>
        </div>
        <div className="copyright">
          <small>
            <span>Copyright &copy;</span> <span>All Rights Reserved</span> <span>Terms of Use</span> and <span>Privacy Policy</span>
          </small>
        </div>
        <hr />
        <div className="favicon">
          <i className="social-media fab fa-facebook-f fa-2x"></i>
          <i className="social-media fab fa-twitter fa-2x"></i>
          <i className="social-media fab fa-instagram fa-2x"></i>
          <i className="social-media fas fa-envelope fa-2x"></i>
        </div>
        <div className="BackToTop">
          <a id="back-to-top" href="#" role="button">
            <i className="back fas fa-chevron-up fa-2x"></i>
          </a>
          <h4>Back To Top</h4>
        </div>
      </footer>
    </>
  );
}

export default Navbar;
