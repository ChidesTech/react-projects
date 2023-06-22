import Carousel from "../components/Carousel"
import Header from "../components/Header"



export default function FakeStore(){
    return <>
         <Header></Header>
         <Carousel></Carousel>
         <div>
  <h1 className="m-5 text-center">WHAT WE DO</h1>
  {/* Services Starts here */}
  <div className="services d-flex flex-sm-column flex-md-column flex-lg-row justify-content-between ">
    <div className="service text-light text-center fs-3">
      <i className="fa fa-clock" />
      <h3>24/7</h3>
      <p>Customer Service</p>
    </div>
    <div className="service text-white text-center fs-3">
      <i className="fa fa-users" />
      <h3>1000+</h3>
      <p>Esteemed Users</p>
    </div>
    <div className="service text-white text-center fs-3">
      <i className="fa fa-handshake" />
      <h3>300+</h3>
      <p>Completed Deals</p>
    </div>
    <div className="service text-white text-center fs-3">
      <i className="fa fa-truck" />
      <h3>100%</h3>
      <p>Swift Delivery</p>
    </div>
  </div>
  {/* Services Ends Here */}
  <h1 className="m-5 text-center">PRODUCT GALLERY</h1>
  <section className="d-flex flex-wrap justify-content-center px-1">
    <div className="card" style={{width: '18rem'}}>
      <img src="https://www.traveldailymedia.com/assets/2022/09/How-dependent-is-tourism-industry-on-private-jets.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
          card's content.</p>
        <a href="#" className="btn btn-danger w-100">Go somewhere</a>
      </div>
    </div>
    <div className="card" style={{width: '18rem'}}>
      <img src="https://images.aircharterservice.com/content/what-are-the-world's-most-popular-private-jets-banner.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
          card's content.</p>
        <a href="#" className="btn btn-danger w-100">Go somewhere</a>
      </div>
    </div>
    <div className="card" style={{width: '18rem'}}>
      <img src="https://www.claylacy.com/wp-content/uploads/2018/07/Gulfstream-GIV-Exterior-Sunset.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
          card's content.</p>
        <a href="#" className="btn btn-danger w-100">Go somewhere</a>
      </div>
    </div>
    <div className="card" style={{width: '18rem'}}>
      <img src="https://s1.cdn.autoevolution.com/images/news/bombardiers-newest-luxury-private-jet-wins-award-for-groundbreaking-design-186948_1.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
          card's content.</p>
        <a href="#" className="btn btn-danger w-100">Go somewhere</a>
      </div>
    </div>
    <div className="card" style={{width: '18rem'}}>
      <img src="https://nypost.com/wp-content/uploads/sites/2/2019/01/012319-private-jets-at-davos.jpg?quality=75&strip=all&w=1024" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
          card's content.</p>
        <a href="#" className="btn btn-danger w-100">Go somewhere</a>
      </div>
    </div>
    <div className="card" style={{width: '18rem'}}>
      <img src="https://media.cnn.com/api/v1/images/stellar/prod/211124230511-dubai-airshow-airbus-five-interior.jpg?q=w_3720,h_2092,x_0,y_0,c_fill/w_1280" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
          card's content.</p>
        <a href="#" className="btn btn-danger w-100">Go somewhere</a>
      </div>
    </div>
  </section>
</div>

         </>
    }
    