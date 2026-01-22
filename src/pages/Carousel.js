const Carousel = () => {
  return (
    <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          data-bs-target="#imageCarousel"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button data-bs-target="#imageCarousel" data-bs-slide-to="1"></button>
        <button data-bs-target="#imageCarousel" data-bs-slide-to="2"></button>
      </div>

      {/* Images */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1628406525643-949838e3aadb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            alt="Slide 1"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://plus.unsplash.com/premium_photo-1687757693613-66738c23b6da?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            alt="Slide 2"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1756982784657-ae36e5c19910?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            alt="Slide 3"
          />
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        data-bs-target="#imageCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        data-bs-target="#imageCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carousel;
