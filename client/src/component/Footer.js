import React from 'react'

class footer extends React.Component {
    render() {
        return (
            <section className="about" id="about">

            <div>
                <footer class="footer text-center">
                    <div class="container">
                        <div class="row">
                            {/* <!-- Footer Location--> */}
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <h4 class="text-uppercase mb-4">Location</h4>
                                <p class="lead mb-0">
                                    Md.Rasel Ansary Remon
                                    <br />
                                    55 Shukrabad,Dhaka
                                </p>
                            </div>
                            {/* <!-- Footer Social Icons--> */}
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <h4 class="text-uppercase mb-4">Around the Web</h4>
                                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
                                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
                                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
                                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a>
                            </div>
                            {/* <!-- Footer About Text--> */}
                            <div class="col-lg-4">
                                <h4 class="text-uppercase mb-4"></h4>
                                <p class="lead mb-0">

                                    <li className="btn btn-outline-light"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#home">Home</a></li>
                                    <li className="btn btn-outline-light"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#blogpost">Blog Post</a></li>
                                    <li className="btn btn-outline-light"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>

                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- Copyright Section--> */}
                <div class="copyright py-4 text-center text-white">
                    <div class="container"><small>Copyright &copy; Remon 2021</small></div>
                </div>
                {/* <!-- Portfolio Modals-->
        <!-- Portfolio Modal 1--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                            <div class="modal-body text-center pb-5">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                                            {/* <!-- Icon Divider--> */}
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="..." />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                                            </p>
                                            <button class="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                                Close Window
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}

export default footer
