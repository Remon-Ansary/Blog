import React from "react";
import axios from "axios";
import firebase from "./firebase";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

class App extends React.Component {
  handleFile = (files) => {
    this.setState({
      files: files,
    });
  };
  handleSave = () => {
    let bucketName = "images";
    let file = this.state.files[0];
    let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
      let downloadURL = uploadTask.snapshot.downloadURL;
    });
  };

  showImage = () => {
    let storageRef = firebase.storage().ref();
    let spaceRef = storageRef.child("images/" + this.state.files[0].name);
    storageRef
      .child("images/" + this.state.files[0].name)
      .getDownloadURL()
      .then((url) => {
        document.getElementById("new_image").src = url;
      });
  };

  state = {
    title: "",
    body: "",
    files: null,
    posts: [],
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();
    const payload = {
      title: this.state.title,
      body: this.state.body,
    };

    axios({
      url: "/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("data sent to server");
        this.resetUserInputs();
        this.getBlogPost();
      })
      .catch(() => {
        console.log("error");
      });
  };

  componentDidMount = () => {
    this.getBlogPost();
  };

  getBlogPost = () => {
    axios
      .get("/api")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log("data received");
      })
      .catch(() => {
        alert("Data not receiving");
      });
  };

  resetUserInputs = () => {
    this.setState({
      title: "",
      body: "",
    });
  };

  displayBlogPost = (posts) => {
    if (!posts.length) return null;
    return posts.map((post, index) => (
      <section className="blogpost" id="blogpost">
        <div>
          <div class="portfolio-modal " id="portfolioModal1">
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header border-0">
                  {/* <button
                    // class="btn-close"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button> */}
                </div>
                <div class="modal-body text-center pb-5">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-lg-8">
                        <div key={index}>
                          <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
                            {post.title}
                          </h2>
                          {/* <!-- Icon Divider--> */}
                          <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon">
                              <i class="fas fa-star"></i>
                            </div>
                            <div class="divider-custom-line"></div>
                          </div>
                          {/* <!-- Portfolio Modal - Image--> */}
                          {/* <img
                            className="img-fluid rounded mb-5"
                            src="https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_960_720.png"
                            alt="..."
                          /> */}
                           <img id="new_image"  />

                          {/* <!-- Portfolio Modal - Text--> */}
                          <p class="mb-4"> {post.body}</p>
                        </div>
                        <button
                          class="btn btn-primary"
                          href="#!"
                          data-bs-dismiss="modal"
                        >
                          Rate this blog
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
    ));
  };

  render() {
    console.log("state: ", this.state);
    return (
      <div>
        <Navbar />
        <div className="container">
          {/* ////// form section/////////// */}
          <section className="page-section" id="home">
            <div className="container">
              {/* <!-- Contact Section Heading--> */}
              <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                Write a Blog
              </h2>
              {/* <!-- Icon Divider--> */}
              <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="divider-custom-line"></div>
              </div>

              {/* <!-- Contact Section Form--> */}
              <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-7">
                  <form id="contactForm" onSubmit={this.submit}>
                    {/* <!-- Name input--> */}
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id=""
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleChange}
                      />
                      <label for="name">Title</label>
                    </div>

                    {/* <!-- Message input--> */}
                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        type="text"
                        placeholder="Enter your message here..."
                        placeholder="body"
                        name="body"
                        value={this.state.body}
                        onChange={this.handleChange}
                      ></textarea>
                      <label for="message">Blog</label>
                    </div>

                    <div>
                      <input
                        type="file"
                        onChange={(e) => {
                          this.handleFile(e.target.files);
                        }}
                      />
                      <button onClick={this.handleSave}>Save on cloud!</button>
                      <button onClick={this.showImage}>view</button>
                      {/* <img id="new_image" /> */}
                    </div>

                    {/* <!-- Submit success message-->
                  <!---->
                  <!-- This is what your users will see when the form-->
                  <!-- has successfully submitted--> */}
                    <div className="d-none" id="submitSuccessMessage">
                      <div className="text-center mb-3">
                        <div className="fw-bolder">
                          Form submission successful!
                        </div>

                        <br />
                      </div>
                    </div>

                    {/* <!-- Submit Button--> */}
                    <button
                      className="btn btn-primary"
                      id="submitButton"
                      type="submit"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* blogview section */}
          <div className="blog-post">
            {this.displayBlogPost(this.state.posts)}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
