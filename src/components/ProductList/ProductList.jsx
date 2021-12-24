import './productList.css';
import products from '../../data';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const ProductList = () => {
  return (
    <>
      <Header />
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Create & Inspire</h1>
          <p className="pl-desc">
            Here is a creative portfolio of mine. Beautiful home pages, stunning
            portfolio styles & a whole lot more awaits inside.
          </p>
        </div>

        <div className="pl-list">
          {products &&
            products.map((item) => (
              <div className="p">
                <div className="p-browser">
                  <div className="p-circle"></div>
                  <div className="p-circle"></div>
                  <div className="p-circle"></div>
                </div>

                <div key={item.id}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img src={item.img} alt="" className="p-img" />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductList;
