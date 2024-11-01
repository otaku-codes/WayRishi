import React, { useState, useContext, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { productImages } from "./helpers";
import "./index.css";
import { useNavigate } from "react-router-dom";

// Context to manage global state
const AppContext = React.createContext();

const AppProvider = ({ children, docInfo }) => {
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLightboxGalleryOpen, setIsLightboxGalleryOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [mainImg, setMainImg] = useState(docInfo.images[0]);
  const [amount, setAmount] = useState(0);
  const [product, setProduct] = useState({
    name: "Fall Limited Edition Sneakers",
    price: 125,
    img: productImages[0],
    productAmount: 0,
    finalePrice: 0,
  });
  console.log(children);
  const handleAddToCart = (amount) => {
    setProduct({
      ...product,
      productAmount: amount,
      finalePrice: product.price * amount,
    });
  };

  const handleDeleteProduct = () => {
    setProduct({ ...product, productAmount: 0, finalePrice: 0 });
  };

  const openLightboxGallery = () => {
    setIsLightboxGalleryOpen(false);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? docInfo.images.length - 1 : prev - 1
    );
    setMainImg(docInfo.images[currentImage]);
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === docInfo.images.length - 1 ? 0 : prev + 1
    );
    setMainImg(docInfo.images[currentImage]);
  };

  return (
    <AppContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        isLightboxGalleryOpen,
        setIsLightboxGalleryOpen,
        product,
        handleAddToCart,
        handleDeleteProduct,
        openLightboxGallery,
        currentImage,
        setCurrentImage,
        prevImage,
        nextImage,
        mainImg,
        setMainImg,
        amount,
        setAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const App = ({ docInfo }) => {
  const navigate = useNavigate();
  const {
    isCartOpen,
    setIsCartOpen,
    isLightboxGalleryOpen,
    product,
    handleDeleteProduct,
    openLightboxGallery,
    currentImage,
    prevImage,
    nextImage,
    mainImg,
    setMainImg,
  } = useContext(AppContext);

  return (
    <div className="lg:flex lg:mx-[15%]">
      <article className="gallery-container">
        <div className="slider-container">
          <div className="slider-arrow-left" onClick={prevImage}>
            <IoIosArrowBack />
          </div>
          {docInfo.images.map((image, index) => (
            <div
              className={
                index === currentImage
                  ? "slider-img-container slider-img-container-active"
                  : "slider-img-container"
              }
              key={index}
            >
              {index === currentImage && (
                <img
                  src={image}
                  alt="product"
                  className="slider-img"
                  onClick={openLightboxGallery}
                />
              )}
            </div>
          ))}
          <div className="slider-arrow-right" onClick={nextImage}>
            <IoIosArrowForward />
          </div>
        </div>

        <section className="gallery-big-screen-images-container">
          <img
            src={mainImg}
            alt="product"
            className="big-screen-main-img"
            onClick={openLightboxGallery}
          />
          <div className="gallery-small-images bg-gray-100 p-4 rounded-lg shadow-md">
            {docInfo.images.map((image, index) => (
              <div
                className={
                  image === mainImg
                    ? "active-small-img-container small-img-container border-2 border-blue-500"
                    : "small-img-container"
                }
                key={index}
                onClick={() => setMainImg(image)}
              >
                <img
                  src={image}
                  alt="small-product"
                  className="small-image rounded-md transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      </article>

      <section className="product-info-container">
        <h3>{docInfo.speciality}</h3>
        <h3 className="text-black font-bold text-xl">
          Welcome to an Enchanting Journey!
        </h3>

        <p dangerouslySetInnerHTML={{ __html: docInfo.about }} />

        <div />

        <div className="add-to-cart-container">
          <button
            className="add-to-cart-btn my-3"
            onClick={() => navigate(docInfo.address)}
          >
            <span>Book Now</span>
          </button>
        </div>
      </section>

      {isCartOpen && (
        <section className="shopping-cart-container">
          <div className="shopping-cart-header">
            <p>Cart</p>
            <span
              className="shopping-cart-close-btn"
              onClick={() => setIsCartOpen(false)}
            >
              <FaTimes />
            </span>
          </div>

          <div className="cart-line"></div>
          {product.productAmount > 0 ? (
            <div className="shopping-cart-product-container">
              <div className="shipping-cart-product-info">
                <img
                  className="shopping-cart-img"
                  src={product.img}
                  alt="product"
                />
                <div className="shopping-cart-name-price-container">
                  <p>{product.name}</p>
                  <div className="shopping-cart-price container">
                    <p>
                      {`$${product.price}.00 x ${product.productAmount}`}
                      <span className="shopping-cart-final-price">{` $${product.finalePrice}.00`}</span>
                    </p>
                  </div>
                </div>
                <button className="delete-btn" onClick={handleDeleteProduct}>
                  <RiDeleteBin5Line />
                </button>
              </div>
              <button className="add-to-cart-btn shopping-cart-checkout">
                Checkout
              </button>
            </div>
          ) : (
            <div className="empty-cart-info">
              <p>Your cart is empty.</p>
            </div>
          )}
        </section>
      )}

      {isLightboxGalleryOpen && (
        <section className="lightbox-gallery-container">
          <div className="inner-lightbox-gallery-container">
            <div className="lightbox-inner-container">
              <span className="lightbox-gallery-close-btn">
                <FaTimes />
              </span>
              <article className="gallery-big-screen-images-container lightbox-gallery-image-container">
                <div
                  className="slider-arrow-left lightbox-arrow-left"
                  onClick={prevImage}
                >
                  <IoIosArrowBack />
                </div>
                <img
                  src={mainImg}
                  alt="product"
                  className="big-screen-main-img lightbox-main-img"
                />
                <div className="gallery-small-images">
                  {productImages.map((image, index) => (
                    <div
                      className={
                        image === mainImg
                          ? "active-small-img-container small-img-container"
                          : "small-img-container"
                      }
                      key={index}
                      onClick={() => setMainImg(image)}
                    >
                      <img
                        src={image}
                        alt="small-product"
                        className="small-image"
                      />
                    </div>
                  ))}
                </div>
                <div
                  className="slider-arrow-right lightbox-arrow-right"
                  onClick={nextImage}
                >
                  <IoIosArrowForward />
                </div>
              </article>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

// Main app component
const MainApp = ({ docInfo }) => {
  return (
    <AppProvider docInfo={docInfo}>
      <App docInfo={docInfo} />
    </AppProvider>
  );
};

export default MainApp;
