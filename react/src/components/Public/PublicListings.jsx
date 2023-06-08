import React, { useState } from "react";
import "../../styles/publIcListings/publicListings.css";
import Logo from "../../assets/img/Logo.svg";
import bath from "../../assets/img/bath.svg";
import bed from "../../assets/img/bed.svg";
import SearchIconHover from "../../assets/img/SearchIconHover.svg";
import SearchIcon from "../../assets/img/SearchIcon.svg";
import picture1 from "../../assets/img/picture.jpg";
import picture2 from "../../assets/img/picture2.jpg";
import picture3 from "../../assets/img/picture3.jpg";
import picture4 from "../../assets/img/picture4.jpg";
import picture5 from "../../assets/img/picture5.jpg";
import picture6 from "../../assets/img/picture6.jpg";
import ModalPublicListings from "./modalPublicListings";

const PublicListings = () => {
  const [isSearchIconHovered, setIsSearchIconHovered] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleSearchIconHover = () => {
    setIsSearchIconHovered(true);
  };

  const handleSearchIconLeave = () => {
    setIsSearchIconHovered(false);
  };

  const handleInputHover = () => {
    setIsInputHovered(true);
  };

  const handleInputLeave = () => {
    setIsInputHovered(false);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className=" containerPublic w-100">
      <div
        className={`position-sticky w-100 ${isModalOpen ? "modal-open" : ""}`}
      >
        <div className="filtersBar d-flex align-items-center">
          <img
            className="LogoPublic justify-content-start ms-4"
            src={Logo}
            alt="Logo"
          />
          <form method="GET">
            <input
              className={`inputPublic ms-5 ${
                isInputHovered ? "inputHovered" : ""
              }`}
              type="text"
              placeholder="     Keyword Or City"
              required
              onMouseEnter={handleInputHover}
              onMouseLeave={handleInputLeave}
            />
            <button type="submit">
              <img
                className={`SearchIconListings justify-content-start ${
                  isInputHovered || isSearchIconHovered ? "SearchIconHover" : ""
                }`}
                src={
                  isInputHovered || isSearchIconHovered
                    ? SearchIconHover
                    : SearchIcon
                }
                alt="SearchIcon"
                onMouseEnter={handleSearchIconHover}
                onMouseLeave={handleSearchIconLeave}
              />
            </button>
            <select className="dropdownMenu">
              <option className="opt" value="price">
                &nbsp;&nbsp;Price
              </option>
            </select>
            <select className="dropdownMenu">
              <option className="opt" value="sqft">
                &nbsp;&nbsp;Sq. Ft
              </option>
            </select>
            <select className="dropdownMenu largeArrow">
              <option className="opt" value="amenities">
                &nbsp;&nbsp;Amenities
              </option>
            </select>
          </form>
        </div>
      </div>
      <div className="containerImgs">
        <div className="item1">
          <img
            className="imgPublic"
            src={picture1}
            onClick={() => handleImageClick(picture1)}
          />

          <div className="description d-flex col">
            <div className="spects d-flex flex-column justify-content-center align-items-start">
              <p className="publicPrice">
                $ 6,500 <span className="strong">per month</span>
              </p>
              <p className="spect">
                HOUSE <span className="strong">3,435 SQ. FT.</span>
              </p>
              <p className="spect">
                LOT <span className="strong">13,608 SQ. FT.</span>
              </p>
            </div>
            <div className="spects2">
              <p className="spectText d-flex justify-content-end">
                Paso Robles, Ca
              </p>
              <div className="icons1 d-flex justify-content-end">
                <span className="nbedbath">2</span>
                <img className="bed" src={bed} />
                <span className="nbedbath">3</span>
                <img className="bath" src={bath} />
              </div>
              <p className="listingNumber d-flex justify-content-end mt-2">
                # 46780
              </p>
            </div>
          </div>
        </div>
        <div className="item1">
          <img
            className="imgPublic"
            src={picture2}
            onClick={() => handleImageClick(picture2)}
          />

          <div className="description d-flex col">
            <div className="spects d-flex flex-column justify-content-center align-items-start">
              <p className="publicPrice">
                $ 6,500 <span className="strong">per month</span>
              </p>
              <p className="spect">
                HOUSE <span className="strong">3,435 SQ. FT.</span>
              </p>
              <p className="spect">
                LOT <span className="strong">13,608 SQ. FT.</span>
              </p>
            </div>
            <div className="spects2">
              <p className="spectText d-flex justify-content-end">
                Paso Robles, Ca
              </p>
              <div className="icons1 d-flex justify-content-end">
                <span className="nbedbath">2</span>
                <img className="bed" src={bed} />
                <span className="nbedbath">3</span>
                <img className="bath" src={bath} />
              </div>
              <p className="listingNumber d-flex justify-content-end mt-2">
                # 46780
              </p>
            </div>
          </div>
        </div>
        <div className="item1">
          <img
            className="imgPublic"
            src={picture3}
            onClick={() => handleImageClick(picture3)}
          />

          <div className="description d-flex col">
            <div className="spects d-flex flex-column justify-content-center align-items-start">
              <p className="publicPrice">
                $ 6,500 <span className="strong">per month</span>
              </p>
              <p className="spect">
                HOUSE <span className="strong">3,435 SQ. FT.</span>
              </p>
              <p className="spect">
                LOT <span className="strong">13,608 SQ. FT.</span>
              </p>
            </div>
            <div className="spects2">
              <p className="spectText d-flex justify-content-end">
                Paso Robles, Ca
              </p>
              <div className="icons1 d-flex justify-content-end">
                <span className="nbedbath">2</span>
                <img className="bed" src={bed} />
                <span className="nbedbath">3</span>
                <img className="bath" src={bath} />
              </div>
              <p className="listingNumber d-flex justify-content-end mt-2">
                # 46780
              </p>
            </div>
          </div>
        </div>
        <div className="item1">
          <img
            className="imgPublic"
            src={picture4}
            onClick={() => handleImageClick(picture4)}
          />

          <div className="description d-flex col">
            <div className="spects d-flex flex-column justify-content-center align-items-start">
              <p className="publicPrice">
                $ 6,500 <span className="strong">per month</span>
              </p>
              <p className="spect">
                HOUSE <span className="strong">3,435 SQ. FT.</span>
              </p>
              <p className="spect">
                LOT <span className="strong">13,608 SQ. FT.</span>
              </p>
            </div>
            <div className="spects2">
              <p className="spectText d-flex justify-content-end">
                Paso Robles, Ca
              </p>
              <div className="icons1 d-flex justify-content-end">
                <span className="nbedbath">2</span>
                <img className="bed" src={bed} />
                <span className="nbedbath">3</span>
                <img className="bath" src={bath} />
              </div>
              <p className="listingNumber d-flex justify-content-end mt-2">
                # 46780
              </p>
            </div>
          </div>
        </div>
        <div className="item1">
          <img
            className="imgPublic"
            src={picture5}
            onClick={() => handleImageClick(picture5)}
          />

          <div className="description d-flex col">
            <div className="spects d-flex flex-column justify-content-center align-items-start">
              <p className="publicPrice">
                $ 6,500 <span className="strong">per month</span>
              </p>
              <p className="spect">
                HOUSE <span className="strong">3,435 SQ. FT.</span>
              </p>
              <p className="spect">
                LOT <span className="strong">13,608 SQ. FT.</span>
              </p>
            </div>
            <div className="spects2">
              <p className="spectText d-flex justify-content-end">
                Paso Robles, Ca
              </p>
              <div className="icons1 d-flex justify-content-end">
                <span className="nbedbath">2</span>
                <img className="bed" src={bed} />
                <span className="nbedbath">3</span>
                <img className="bath" src={bath} />
              </div>
              <p className="listingNumber d-flex justify-content-end mt-2">
                # 46780
              </p>
            </div>
          </div>
        </div>
        <div className="item1">
          <img
            className="imgPublic"
            src={picture6}
            onClick={() => handleImageClick(picture6)}
          />

          <div className="description d-flex col">
            <div className="spects d-flex flex-column justify-content-center align-items-start">
              <p className="publicPrice">
                $ 6,500 <span className="strong">per month</span>
              </p>
              <p className="spect">
                HOUSE <span className="strong">3,435 SQ. FT.</span>
              </p>
              <p className="spect">
                LOT <span className="strong">13,608 SQ. FT.</span>
              </p>
            </div>
            <div className="spects2">
              <p className="spectText d-flex justify-content-end">
                Paso Robles, Ca
              </p>
              <div className="icons1 d-flex justify-content-end">
                <span className="nbedbath">2</span>
                <img className="bed" src={bed} />
                <span className="nbedbath">3</span>
                <img className="bath" src={bath} />
              </div>
              <p className="listingNumber d-flex justify-content-end mt-2">
                # 46780
              </p>
            </div>
          </div>
        </div>
        <div className="item1">
          <img
            className="imgPublic"
            src={picture2}
            onClick={() => handleImageClick(picture2)}
          />

          <div className="description d-flex col">
            <div className="spects d-flex flex-column justify-content-center align-items-start">
              <p className="publicPrice">
                $ 6,500 <span className="strong">per month</span>
              </p>
              <p className="spect">
                HOUSE <span className="strong">3,435 SQ. FT.</span>
              </p>
              <p className="spect">
                LOT <span className="strong">13,608 SQ. FT.</span>
              </p>
            </div>
            <div className="spects2">
              <p className="spectText d-flex justify-content-end">
                Paso Robles, Ca
              </p>
              <div className="icons1 d-flex justify-content-end">
                <span className="nbedbath">2</span>
                <img className="bed" src={bed} />
                <span className="nbedbath">3</span>
                <img className="bath" src={bath} />
              </div>
              <p className="listingNumber d-flex justify-content-end mt-2">
                # 46780
              </p>
            </div>
          </div>
        </div>
        <div className="item1">
          <img
            className="imgPublic"
            src={picture1}
            onClick={() => handleImageClick(picture1)}
          />

          <div className="description d-flex col">
            <div className="spects d-flex flex-column justify-content-center align-items-start">
              <p className="publicPrice">
                $ 6,500 <span className="strong">per month</span>
              </p>
              <p className="spect">
                HOUSE <span className="strong">3,435 SQ. FT.</span>
              </p>
              <p className="spect">
                LOT <span className="strong">13,608 SQ. FT.</span>
              </p>
            </div>
            <div className="spects2">
              <p className="spectText d-flex justify-content-end">
                Paso Robles, Ca
              </p>
              <div className="icons1 d-flex justify-content-end">
                <span className="nbedbath">2</span>
                <img className="bed" src={bed} />
                <span className="nbedbath">3</span>
                <img className="bath" src={bath} />
              </div>
              <p className="listingNumber d-flex justify-content-end mt-2">
                # 46780
              </p>
            </div>
          </div>
        </div>
        <div className="item1">
          <img
            className="imgPublic"
            src={picture4}
            onClick={() => handleImageClick(picture4)}
          />

          <div className="description d-flex col">
            <div className="spects d-flex flex-column justify-content-center align-items-start">
              <p className="publicPrice">
                $ 6,500 <span className="strong">per month</span>
              </p>
              <p className="spect">
                HOUSE <span className="strong">3,435 SQ. FT.</span>
              </p>
              <p className="spect">
                LOT <span className="strong">13,608 SQ. FT.</span>
              </p>
            </div>
            <div className="spects2">
              <p className="spectText d-flex justify-content-end">
                Paso Robles, Ca
              </p>
              <div className="icons1 d-flex justify-content-end">
                <span className="nbedbath">2</span>
                <img className="bed" src={bed} />
                <span className="nbedbath">3</span>
                <img className="bath" src={bath} />
              </div>
              <p className="listingNumber d-flex justify-content-end mt-2">
                # 46780
              </p>
            </div>
          </div>
        </div>
        <div className="item1">
          <img
            className="imgPublic"
            src={picture5}
            onClick={() => handleImageClick(picture5)}
          />

          <div className="description d-flex col">
            <div className="spects d-flex flex-column justify-content-center align-items-start">
              <p className="publicPrice">
                $ 6,500 <span className="strong">per month</span>
              </p>
              <p className="spect">
                HOUSE <span className="strong">3,435 SQ. FT.</span>
              </p>
              <p className="spect">
                LOT <span className="strong">13,608 SQ. FT.</span>
              </p>
            </div>
            <div className="spects2">
              <p className="spectText d-flex justify-content-end">
                Paso Robles, Ca
              </p>
              <div className="icons1 d-flex justify-content-end">
                <span className="nbedbath">2</span>
                <img className="bed" src={bed} />
                <span className="nbedbath">3</span>
                <img className="bath" src={bath} />
              </div>
              <p className="listingNumber d-flex justify-content-end mt-2">
                # 46780
              </p>
            </div>
          </div>
        </div>
        <div className="item1">
          <img
            className="imgPublic"
            src={picture3}
            onClick={() => handleImageClick(picture3)}
          />

          <div className="description d-flex col">
            <div className="spects d-flex flex-column justify-content-center align-items-start">
              <p className="publicPrice">
                $ 6,500 <span className="strong">per month</span>
              </p>
              <p className="spect">
                HOUSE <span className="strong">3,435 SQ. FT.</span>
              </p>
              <p className="spect">
                LOT <span className="strong">13,608 SQ. FT.</span>
              </p>
            </div>
            <div className="spects2">
              <p className="spectText d-flex justify-content-end">
                Paso Robles, Ca
              </p>
              <div className="icons1 d-flex justify-content-end">
                <span className="nbedbath">2</span>
                <img className="bed" src={bed} />
                <span className="nbedbath">3</span>
                <img className="bath" src={bath} />
              </div>
              <p className="listingNumber d-flex justify-content-end mt-2">
                # 46780
              </p>
            </div>
          </div>
        </div>
        <div className="item1">
          <img
            className="imgPublic"
            src={picture6}
            onClick={() => handleImageClick(picture6)}
          />

          <div className="description d-flex col">
            <div className="spects d-flex flex-column justify-content-center align-items-start">
              <p className="publicPrice">
                $ 6,500 <span className="strong">per month</span>
              </p>
              <p className="spect">
                HOUSE <span className="strong">3,435 SQ. FT.</span>
              </p>
              <p className="spect">
                LOT <span className="strong">13,608 SQ. FT.</span>
              </p>
            </div>
            <div className="spects2">
              <p className="spectText d-flex justify-content-end">
                Paso Robles, Ca
              </p>
              <div className="icons1 d-flex justify-content-end">
                <span className="nbedbath">2</span>
                <img className="bed" src={bed} />
                <span className="nbedbath">3</span>
                <img className="bath" src={bath} />
              </div>
              <p className="listingNumber d-flex justify-content-end mt-2">
                # 46780
              </p>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ModalPublicListings
          selectedImage={selectedImage}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default PublicListings;
