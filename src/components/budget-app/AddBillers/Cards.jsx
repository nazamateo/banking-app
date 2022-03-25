import React from "react";
import { useState } from "react";
import Popup from "../../General/Helpers/ConfirmExpense";
import Logo from "../../Logo";
import bdo from "../../../assets/images/Company logos/bdo.png";
import ust from "../../../assets/images/Company logos/ust.png";
import globe from "../../../assets/images/Company logos/globe.png";
import pldt from "../../../assets/images/Company logos/pldt.png";
import smart from "../../../assets/images/Company logos/smart.png";
import meralco from "../../../assets/images/Company logos/meralco.png";
import sunlife from "../../../assets/images/Company logos/sunlife.png";
import pru from "../../../assets/images/Company logos/pru.png";
import lasal from "../../../assets/images/Company logos/lasal.png";
import ateneo from "../../../assets/images/Company logos/ateneo.png";
import avion from "../../../assets/images/Company logos/avion.png";
import dfa from "../../../assets/images/Company logos/dfa.png";
import psa from "../../../assets/images/Company logos/psa.png";
import megaworld from "../../../assets/images/Company logos/megaworld.jpg";
import smdc from "../../../assets/images/Company logos/smdc.jpg";
import joll from "../../../assets/images/Company logos/joll.jpg";
import starbucks from "../../../assets/images/Company logos/starbucks.png";
import chinabank from "../../../assets/images/Company logos/chinabank.jpg";
import add from "../../../assets/images/Company logos/add.png";
import styles from "../AddBillers/AddBillers.module.scss";

function Cards() {
  const [billersArrayLogos, setBillersArrayLogos] = useState([
    { link: add, name: "ADD", add: "Add a biller" },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [billerName, setBillerName] = useState("");
  let logoArray = [
    { link: bdo, name: "BDO" },
    { link: chinabank, name: "CHINABANK" },
    { link: globe, name: "GLOBE" },
    { link: pldt, name: "PLDT" },
    { link: smart, name: "SMART" },
    { link: meralco, name: "MERALCO" },
    { link: pru, name: "PRU" },
    { link: sunlife, name: "SUNLIFE" },
    { link: avion, name: "AVION" },
    { link: ust, name: "UST" },
    { link: lasal, name: "DE LA SALLE" },
    { link: ateneo, name: "ATENEO" },
    { link: dfa, name: "DFA" },
    { link: psa, name: "PSA" },
    { link: megaworld, name: "MEGAWORLD" },
    { link: smdc, name: "SMDC" },
    { link: joll, name: "JOLLIBEE" },
    { link: starbucks, name: "STARBUCKS" },
  ];
  let handleClick = i => {
    setBillersArrayLogos([
      ...billersArrayLogos,
      { link: logoArray[i].link, name: logoArray[i].name },
    ]);
    setBillerName(logoArray[i].name);
    setIsOpen(true);
  };
  function togglePopup(e) {
    e.preventDefault();
    setIsOpen(false);
  }
  return (
    <>
      <div className={styles.mybillers}>
        {billersArrayLogos.map(element => (
          <button>
            <Logo
              link={element.link}
              name={element.add}
              className={styles.logoContainer}
            />
          </button>
        ))}
      </div>
      <div className={styles.cardContainer}>
        {logoArray.map((element, index) => (
          <button onClick={e => handleClick(index, e)}>
            <Logo link={element.link} className={styles.logoContainer} />
          </button>
        ))}
      </div>
      {isOpen && (
        <Popup
          content={
            <div className={styles.popupBox}>
              <div className={styles.box}>
                <div className={styles.popupContainer}>
                  <span className={styles.closeIcon} onClick={togglePopup}>
                    X
                  </span>
                  <p className={styles.popupHeader}>
                    <h1>Add {billerName} </h1>
                  </p>
                  <div className={styles.inputContainer}>
                    <input
                      className={styles.inputPassword}
                      type="text"
                      placeholder="Account Name"
                      //onChange={(e) => setInputAdminPassword(e.target.value)}
                      //value={inputAdminPassword}
                    />
                    <br></br>
                    <br></br>
                    <input
                      className={styles.inputPassword}
                      type="text"
                      placeholder="Account Number"
                      //onChange={(e) => setInputAdminPassword(e.target.value)}
                      //value={inputAdminPassword}
                    />
                  </div>
                  <button
                    className={
                      styles.confirmBtn
                    } /*onClick={confirmDelete} add funtion to save to billers*/
                  >
                    Confirm add
                  </button>
                </div>
              </div>
            </div>
          }
        />
      )}
    </>
  );
}

export default Cards;
