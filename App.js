//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html>
    <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/d1c2ea8b80.js" crossorigin="anonymous"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
    <body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a class="navbar-brand Potfolio-logo" href="#Homesection">A</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
                <a class="nav-link active text-white nav-element" href="#Homesection">Home <span class="sr-only">(current)</span></a>
                <a class="nav-link text-white nav-element" href="#aboutmesection">About me</a>
                <a class="nav-link text-white nav-element" href="#projectsection">Projects</a>
                <a class="nav-link text-white nav-element" href="#Servicesection">Services</a>
                <a class="nav-link text-white nav-element" href="#recentblogsection">Recent Blogs</a>
            </div>
        </div>
    </nav>
    
    <div class="Potfolio-navbar-container d-flex flex-column justify-content-center">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-5 order-1 order-md-2">
                    <img class="portfolio-banner-img" alt="img1" src="https://res.cloudinary.com/djvdontvj/image/upload/v1650349398/git_img1_sfazxv.png" />
                </div>
                <div class="col-12 col-md-7 order-2 order-md-1">
                    <h1 class="portfolio-banner-name mt-3">Hey, I am <span class="portfolio-name">Anudeepthi</span></h1>
                    <h2 class="portfolio-banner-role mt-3">I am a FullStack Developer</h2>
                </div>
            </div>
        </div>
    </div>
    <div id="aboutmesection">
        <div class="about-me-bg-container pt-3 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 order-1 order-md-2 d-flex flex-column justify-content-center">
                        <h1 class="facts mt-5">Facts</h1>
                        <p class="about_me">About me</p>
                        <img class="about-me-image d-md-none mb-3" alt="imgg"  />
                        <div class="col-12 col-md-6 order-2 order-md-1 d-none d-md-block">
                            <img class="about-me-image" alt="img2" src="https://res.cloudinary.com/djvdontvj/image/upload/v1650349398/git_img1_sfazxv.png" />
                        </div>
                        <p class="About_me_description mt-3">
                            My name is Anudeepthi, and I am currently looking for a job in FullStack Development. I have done M.SC in Applied Statistics from Osmania University.
                            People find me to be an upbeat,self-motivated team player with excellent communication skills.
                        </p>
                        <p class="About_me_description mb-3">
                            I am a dedicated person with a family of four.I enjoy learning, the knowledge and perspective that my reading gives me have strengthened my 
                            skills and presentation abilities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="projectsection">
        <div class="skill-section pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="facts mb-3">Skills:</h1>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="text-center skills-card shadow mb-3">
                            <img class="skills-card-image" alt="img3" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-html-img.png" />
                            <h1 class="skill-tittle">HTML</h1>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="text-center skills-card shadow mb-3">
                            <img class="skills-card-image text-center" alt="img4" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-css-img.png" />
                            <h1 class="skill-tittle">CSS</h1>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="text-center skills-card shadow mb-3">
                            <img class="skills-card-image" alt="img5" src="https://res.cloudinary.com/djvdontvj/image/upload/v1638629861/640px-Python-logo-notext.svg_ccsjvs.png" />
                            <h1 class="skill-tittle">Python</h1>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="text-center skills-card shadow mb-3">
                            <img class="skills-card-image" alt="img6" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-js-img.png" />
                            <h1 class="skill-tittle">JavaScript</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="projects-bg-container pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="portfolio-heading">Portfolio</h1>
                        <h1 class="projects-heading">Projects I have done</h1>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="shadow project-image mb-3">
                            <img class="web-image" alt="img7" src="https://res.cloudinary.com/djvdontvj/image/upload/v1638642047/businessman-touching-digital-chat-bot-on-tablet-for-provide-access-to-information-and-data-in-online-network-robot-application-and-global-connection-ai-artificial-intelligence-scaled_akhxei.jpg" />
                            <h1 class="web-design">Web design</h1>
                            <h1 class="hotel-heading">Chat Bot</h1>
                            <p class="hotel-description">
                                A chatbot or chatterbot is a software application used to conduct an on-line
                                chat conversation via text or text-to-speech, in lieu of providing direct contact with a live human agent.
                            </p>
                            <a class="more-item-link" href="https://chatbotravi.ccbp.tech/">Read More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="shadow project-image mb-3">
                            <img class="web-image" alt="img8" src="https://res.cloudinary.com/dbu9up1il/image/upload/v1621757791/eco_rjf0qf.jpg" />
                            <h1 class="web-design">Web design</h1>
                            <h1 class="hotel-heading">E-Commerce</h1>
                            <p class="hotel-description">
                                E-commerce is the buying and selling of good or services via the internet,
                                and the transfer of money and data to complete the sales.
                                It's also known as electronic commerce or internet commerce.
                            </p>
                            <a class="more-item-link" href="https://guruecommerce.ccbp.tech">Read More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="shadow project-image mb-3">
                            <img class="web-image" alt="img9" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-2-img.png" />
                            <h1 class="web-design">Web design</h1>
                            <h1 class="hotel-heading">Happy Meals</h1>
                            <p class="hotel-description">
                                Happy Meals is the best-in-class food ordering page today.with interactive UI/UX
                                and simple call to actions...
                            </p>
                            <a class="more-item-link" href="https://ecommercert.ccbp.tech/">Read More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />

                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="Servicesection">
        <div class="Services-bg-container pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12 col-lg-12">
                        <h1 class="Services-heading">Services</h1>
                        <h1 class="sub-heading mb-3">What I do</h1>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="shadow website-page p-3 mt-3">
                            <img class="website-image" alt="img10" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-web-design-img.png" />
                            <h1 class="website-name mt-3">Static Websites</h1>
                            <p class="static-description mt-3">
                                A Static website containees web pages with fixed content.Each page is developed using HTML and CSS
                                and displays the same information to every visitor.
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="shadow website-page p-3 mt-3">
                            <img class="website-image" alt="img11" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-web-development-img.png" />
                            <h1 class="website-name mt-3">Responsive Web design</h1>
                            <p class="static-description mt-3">
                                Responsive Web design is the approach that suggests that design and development should respond
                                to the user's behaviour and environment based on screen,platform and orientation
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="shadow website-page p-3 mt-3">
                            <img class="website-image" alt="img12" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-customize-img.png" />
                            <h1 class="website-name mt-3">Customisable Layouts</h1>
                            <p class="static-description mt-3">
                                Customisable sites arre templates with set layouts.You may be able to change
                                photos and colors,but your sites due to template.The same goes for...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="recentblogsection">
        <div class="work-done-bg-container text-center pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-4 text-center">
                        <svg width="60px" height="60px" viewBox="0 0 16 16" class="bi bi-hand-thumbs-up" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                        </svg>
                        <hr class="hr-line" />
                        <h1 class="card-tittle mt-3">10</h1>
                        <h1 class="card-sub-heading mt-3">Projects Completed</h1>
                    </div>
                    <div class="col-4 text-center">
                        <svg width="60px" height="60px" viewBox="0 0 16 16" class="bi bi-file-text" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z" />
                            <path fill-rule="evenodd" d="M4.5 10.5A.5.5 0 0 1 5 10h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <hr class="hr-line" />
                        <h1 class="card-tittle mt-3">2,800</h1>
                        <h1 class="card-sub-heading mt-3">Lines of Code</h1>
                    </div>
                    <div class="col-4 text-center">
                        <svg width="60px" height="60px" viewBox="0 0 16 16" class="bi bi-clock" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" />
                            <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        <hr class="hr-line" />
                        <h1 class="card-tittle mt-3">8hrs/Day</h1>
                        <h1 class="card-sub-heading mt-3">Work Hours</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bg-container pt-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-3">
                    <div class="d-flex flex-row">
                        <img class="mb-3 image" alt="img13" src="https://res.cloudinary.com/djvdontvj/image/upload/v1650349398/git_img1_sfazxv.png" />
                        <div class="ml-3">
                            <h1 class="footer-section-name">Anudeepthi</h1>
                            <p class=" designation">FullStack Developer</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3">
                    <h1 class="footer-section-name">Phone No.</h1>
                    <div>
                        <i class="fa fa-phone-alt icon-size" aria-hidden="true"></i>
                        <span class=" footer-section-deatails ml-2">+91 XXXXXXXXX</span>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3">
                    <h1 class="footer-section-name">E-mail</h1>
                    <div>
                        <i class="fa fa-envelope icon-size" aria-hidden="true"></i>
                        <span class="footer-section-deatails ml-2">ghub7934@gmail.com</span>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-3">
                    <h1 class="footer-section-name">Address</h1>
                    <div>
                        <i class="fa fa-map-marker icon-size" aria-hidden="true"></i>
                        <span class="footer-section-deatails ml-2">1-4-23, Telangana, India.</span>
                    </div>
                </div>
                <div class="footer-container text-center w-100 pt-2 pb-2">
                    <i class="fa fa-copyright icon-size" aria-hidden="true"></i>
                    <span class="footer-section-deatails">2023 by Anudeepthi.Created with Bootstrap.</span>
                </div>
            </div>
        </div>
    </div>
    </body>
    </html>
  );
}

export default App;
