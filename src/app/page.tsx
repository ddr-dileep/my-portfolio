export default function Home() {
  return (
    <>
      <h2>Home</h2>

      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allow="autoplay; encrypted-media"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid d-flex align-items-center mb-5 py-5"
        id="home"
        style={{ minHeight: "100vh", backgroundColor: "rgb(23, 4, 43)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
              <img
                className="img-fluid w-100 rounded-circle shadow-lg"
                src="img/my-image.png"
                alt=""
              />
            </div>
            <div className="col-lg-7 text-center text-lg-left">
              <h3 className="text-white font-weight-normal mb-3">I'm</h3>
              <h1
                className="display-3 text-uppercase text-primary mb-2"
                style={{ WebkitTextStroke: "2px #ffffff" }}
              >
                Dileep Raloti
              </h1>
              <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
              <div className="typed-text d-none">
                Web Designer, Web Developer, Front End Developer, Apps Designer,
                Apps Developer
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <a href="" className="btn btn-outline-light mr-5">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
