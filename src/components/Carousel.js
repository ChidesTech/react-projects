export default function Carousel(){
    return <>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="Amanzz.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="Lead-Gulfstream-Branded.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="private-jet-scaled.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="private-jet-tarmac-GettyImages-523476302.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="VAGZSV52JMTGOAVPB53XFLRDWQ.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
}