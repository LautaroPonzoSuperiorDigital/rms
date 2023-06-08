import React, { useState } from "react";
import "../../styles/modal.css";
import testImg from "../../assets/img/testImg.jpg";
import closeListing from "../../assets/img/close.svg";
import closeHover from "../../assets/img/closeHover.svg";
import ModalListingsImgs from "./modalListingsImgs";
import Pagination from "../Paginations";

const EditModalListings = () => {
  const [isCloseHovered, setIsCloseHovered] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showMainModal, setShowMainModal] = useState(true);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsCloseHovered(true);
  };

  const handleMouseLeave = () => {
    setIsCloseHovered(false);
  };

  const handleImageMouseEnter = () => {
    setIsImageHovered(true);
  };

  const handleImageMouseLeave = () => {
    setIsImageHovered(false);
  };
  const handleCancel = () => {
    window.location.href = "/listingsAdmin";
  };

  const handleImageClick = () => {
    setShowImageModal(true);
    setShowMainModal(false);
  };

  const closeModal = () => {
    setShowImageModal(false);
    setShowMainModal(true);
  };

  return (
    <div className="modalWrapper2 container-fluid">
      {showMainModal && (
        <div className="container-fluid modalContent2 d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="imgContainer" onClick={handleImageClick}>
              <img
                className="ModalImg"
                src={testImg}
                alt="testImg"
                onMouseEnter={handleImageMouseEnter}
                onMouseLeave={handleImageMouseLeave}
              />
              <div className={`imgOverlay ${isImageHovered ? "hovered" : ""}`}>
                <div className="editBar">
                  <span className="editText">Edit Album (10)</span>
                </div>
              </div>
            </div>
          </div>
          <form className="modalListing1 d-flex row justify-content-start">
            <div className="row">
              <div className="col">
                <div className="inputContainerListing">
                  <input
                    type="text"
                    className="inputListing"
                    placeholder="ID                                                                                                364675"
                  />
                  <input
                    type="text"
                    className="inputListing"
                    placeholder="LOCATION                    8148 Larga Ave, 67884, Atascadero, California"
                  />
                  <input
                    type="text"
                    className="inputListing"
                    placeholder="LOT SIZE                                                           3,608 Sq. Ft. Per County"
                  />
                  <input
                    type="text"
                    className="inputListing"
                    placeholder="HOUSE SIZE                                                      3,608 Sq. Ft. Per County"
                  />
                  <input
                    type="text"
                    className="inputListing"
                    placeholder="PRICE                                                                               $ 4,000 / Mo"
                  />
                  <div className="listingCheckbox">
                    <div className="form-check">
                      <label htmlFor="publicCheckbox" className="checkboxLabel">
                        PUBLIC
                      </label>
                      <input
                        type="checkbox"
                        id="publicCheckbox"
                        className="checkboxListing"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <img
                  className="closeListing"
                  src={isCloseHovered ? closeHover : closeListing}
                  alt="close"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleCancel}
                />
                <div className="inputListing2">
                  <div className="inputContainerListing2">
                    <div className="bedroomBathroom">
                      <input
                        type="text"
                        className="inputListing3"
                        placeholder="#BEDROOMS                                         2"
                      />
                      <input
                        type="text"
                        className="inputListingBath"
                        placeholder="#BATHROOMS                                      3"
                      />
                    </div>
                  </div>
                  <p className="amentities">AMENTITIES</p>
                  <ul className="list">
                    <li> A Full Kitchen </li>
                    <li>Air Conditioning</li>
                    <li>Free Parking</li>
                    <li>Pet-Friendly Environment</li>
                    <li>Wifi</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="line">
              <div className="buttonContainer1 d-flex justify-content-end">
                <button
                  type="button"
                  className="modalButton cancelListing"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button type="button" className="modalButton1 saveListing">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {showImageModal && (
        <>
          <ModalListingsImgs closeModal={closeModal} />
          <style>{`.footer { display: none !important; }`}</style>
        </>
      )}
    </div>
  );
};

export default EditModalListings;
