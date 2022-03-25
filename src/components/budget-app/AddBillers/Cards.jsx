import React, { useEffect } from "react";
import { useState } from "react";
import { getBillersArray } from "../../../services/BudgetAppFunctions";
import { getBudgetAppUSer } from "../../../services/BudgetAppFunctions";
import { getBankAccounts } from "../../../services/LocalStorage";
import Popup from "../../General/Helpers/ConfirmExpense";
import Logo from "../../General/Logo/Logo";
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
import netflix from "../../../assets/images/Company logos/netflix.png";
import starbucks from "../../../assets/images/Company logos/starbucks.png";
import chinabank from "../../../assets/images/Company logos/chinabank.jpg";
import add from "../../../assets/images/Company logos/add.png";
import styles from "../AddBillers/AddBillers.module.scss";

function Cards() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSaved, setIsOpenSaved] = useState(false);
  const [billerName, setBillerName] = useState("");
  const [billerLogoDetails, setbillerLogoDetails] = useState();
  const [billerAccountName, setBillerAccountName] = useState("");
  const [billerAccountNumber, setBillerAccountNumber] = useState("");
  const [billerNickname, setBillerNickname] = useState("");
  const [billerDetails, setbillerDetails] = useState([]);
  const [savedBillers, setSavedBillers] = useState(getBillersArray);
  const [billersArrayLogos, setBillersArrayLogos] = useState(savedBillers);
  const [currentAppUser, setCurrentAppUser] = useState(getBudgetAppUSer);
  const [localBankAccounts, getLocalBankAccounts] = useState(getBankAccounts);
  const [indexofUser, setIndexofUser] = useState(
    currentAppUser.accountNumber - 1
  );
  const [saveToLocal, setSaveToLocal] = useState("");
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
    { link: netflix, name: "NEFLIX" },
    { link: starbucks, name: "STARBUCKS" },
  ];
  let handleClick = (i) => {
    setBillerName(logoArray[i].name);
    setbillerLogoDetails({ link: logoArray[i].link, name: logoArray[i].name });
    setIsOpen(true);
  };
  let handleClickSavedLogo = (i) => {
    setBillerName(savedBillers[i].name);
    setbillerLogoDetails({
      link: savedBillers[i].link,
      name: savedBillers[i].name,
    });
    setBillerAccountName(savedBillers[i].billeraccountname);
    setBillerAccountNumber(savedBillers[i].billeraccountnum);
    setBillerNickname(savedBillers[i].billernickname);
    setIsOpenSaved(true);
  };
  function togglePopup(e) {
    e.preventDefault();
    setIsOpen(false);
    setIsOpenSaved(false);
    setBillerAccountName("");
    setBillerAccountNumber("");
    setBillerNickname("");
  }
  function saveBillerData() {
    setSavedBillers([
      ...savedBillers,
      {
        bankname: billerName,
        billeraccountname: billerAccountName,
        billeraccountnum: billerAccountNumber,
        billernickname: billerNickname,
      },
    ]);
  }

  let confirmAdd = (e) => {
    e.preventDefault();
    setBillersArrayLogos([
      ...billersArrayLogos,
      {
        link: billerLogoDetails.link,
        name: billerLogoDetails.name,
        billeraccountname: billerAccountName,
        billeraccountnumber: billerAccountNumber,
        billernickname: billerNickname,
      },
    ]);
    setbillerDetails([
      ...billerDetails,
      {
        bankname: billerName,
        billeraccountname: billerAccountName,
        billeraccountnum: billerAccountNumber,
      },
    ]);
    saveBillerData();
    setBillerAccountName("");
    setBillerAccountNumber("");
    setBillerNickname("");
    setbillerLogoDetails([]);
    setIsOpen(false);
    currentAppUser.billersArray = billersArrayLogos;
    localBankAccounts[indexofUser] = currentAppUser;
    localStorage.setItem("bankAccounts", JSON.stringify(localBankAccounts));
  };

  return (
    <>
      <div className={styles.mybillers}>
        {billersArrayLogos.map((element, index) => (
          <button onClick={(e) => handleClickSavedLogo(index, e)}>
            <Logo
              link={element.link}
              name={element.billernickname}
              className={styles.logoContainer}
            />
          </button>
        ))}
      </div>
      <div className={styles.cardContainer}>
        {logoArray.map((element, index) => (
          <button onClick={(e) => handleClick(index, e)}>
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
                  <div className={styles.popupHeader}>
                    <h1>Add {billerName} account to billers</h1>
                  </div>
                  <div className={styles.inputContainer}>
                    <input
                      className={styles.inputPassword}
                      type="text"
                      placeholder="Account Name"
                      onChange={(e) => setBillerAccountName(e.target.value)}
                      value={billerAccountName}
                    />
                    <br></br>
                    <br></br>
                    <input
                      className={styles.inputPassword}
                      type="text"
                      placeholder="Account Number"
                      onChange={(e) => setBillerAccountNumber(e.target.value)}
                      value={billerAccountNumber}
                    />

                    <br></br>
                    <br></br>
                    <input
                      className={styles.inputPassword}
                      type="text"
                      placeholder="
                      Nickname"
                      onChange={(e) => setBillerNickname(e.target.value)}
                      value={billerNickname}
                    />
                  </div>
                  <button className={styles.confirmBtn} onClick={confirmAdd}>
                    Confirm add
                  </button>
                </div>
              </div>
            </div>
          }
        />
      )}

      {isOpenSaved && (
        <Popup
          content={
            <div className={styles.popupBox}>
              <div className={styles.box}>
                <div className={styles.popupContainer}>
                  <span className={styles.closeIcon} onClick={togglePopup}>
                    X
                  </span>
                  <div className={styles.popupHeader}>
                    <h1>Biller Details</h1>
                  </div>
                  <div className={styles.inputContainer}>
                    <input
                      className={styles.inputPassword}
                      type="text"
                      placeholder="Account Name"
                      onChange={(e) => setBillerAccountName(e.target.value)}
                      value={billerAccountName}
                      disabled={true}
                    />
                    <br></br>
                    <br></br>
                    <input
                      className={styles.inputPassword}
                      type="text"
                      placeholder="Account Number"
                      onChange={(e) => setBillerAccountNumber(e.target.value)}
                      value={billerAccountNumber}
                      disabled={true}
                    />

                    <br></br>
                    <br></br>
                    <input
                      className={styles.inputPassword}
                      type="text"
                      placeholder="
                      Nickname"
                      onChange={(e) => setBillerNickname(e.target.value)}
                      value={billerNickname}
                      disabled={true}
                    />
                  </div>
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
