import React, { useEffect } from "react";
import { useState } from "react";
import { getBillersArray } from "../../../services/BudgetAppFunctions";
import { getBudgetAppUSer } from "../../../services/BudgetAppFunctions";
import {
  getBankAccounts,
  getBankAccountName,
} from "../../../services/LocalStorage";
import {
  NameDataListGenerator,
  AccntNumDataListGenerator,
} from "../../General/Helpers/Datalist";
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
import netflix from "../../../assets/images/Company logos/netflix.png";
import starbucks from "../../../assets/images/Company logos/starbucks.png";
import chinabank from "../../../assets/images/Company logos/chinabank.jpg";
import col from "../../../assets/images/Company logos/col.jpg";
import pi from "../../../assets/images/Company logos/pi.png";
import etoro from "../../../assets/images/Company logos/etoro.png";
import gcash from "../../../assets/images/Company logos/gcash.jpg";
import btc from "../../../assets/images/Company logos/btc.png";
import doge from "../../../assets/images/Company logos/doge.png";
import add from "../../../assets/images/placeholder.jpg";
import styles from "../AddBillers/AddBillers.module.scss";
import { findAllInRenderedTree } from "react-dom/test-utils";

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
  const [localPeersArray, SetLocalPeersArray] = useState(getUsersArray());
  const [chosenAcctNum, setChosenAcctNum] = useState("");
  let logoArray = [
    { link: bdo, name: "BDO" },
    { link: chinabank, name: "CHINABANK" },
    { link: gcash, name: "GCASH" },
    { link: col, name: "COL FINANCIAL" },
    { link: pi, name: "PI NETWORK" },
    { link: etoro, name: "ETORO" },
    { link: doge, name: "MY DOGECOIN" },
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
    { link: add, name: "DIGIBANK" },
  ];
  function getUsersArray() {
    let peersObject = {};
    let peersArray = [];
    let bankAccounts = getBankAccounts();
    for (let i = 0; i < bankAccounts.length; i++) {
      peersObject.name = bankAccounts[i].name;
      peersObject.accountNumber = bankAccounts[i].accountNumber;
      peersArray.unshift(peersObject);
    }
    return peersArray;
  }

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
    if (!billerAccountName || !billerAccountNumber || !billerNickname) {
      alert("Please don't leave blank fields");
    } else {
      if (billerName === "DIGIBANK") {
        let accountobject = getBankAccountName(billerAccountName);
        if (!accountobject) {
          alert("no account registered in this name");
          return;
        } else if (accountobject.accountName === billerAccountName) {
          setChosenAcctNum(accountobject.accountNumber);
          if (billerAccountNumber !== chosenAcctNum) {
            alert("account name and number doesnt match");
            return;
          }
        }
      }
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
    }
  };

  return (
    <>
      <h1>My Saved Billers</h1>
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
      <h1>Registered Billers</h1>
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
                      type="number"
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
                      maxlength="5"
                    />
                  </div>
                  <button
                    type="submit"
                    className={styles.confirmBtn}
                    onClick={confirmAdd}
                  >
                    Confirm add
                  </button>
                </div>
              </div>
            </div>
          }
        />
      )}
      {isOpen & (billerName === "DIGIBANK") && (
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
                      list="namelist"
                      placeholder="Account Name"
                      onChange={(e) => {
                        setBillerAccountName(e.target.value);
                      }}
                      value={billerAccountName}
                    />
                    <datalist id="namelist">
                      <NameDataListGenerator accounts={getBankAccounts()} />
                    </datalist>
                    <br></br>
                    <br></br>
                    <input
                      className={styles.inputPassword}
                      type="number"
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
                      maxlength="5"
                    />
                  </div>
                  <button
                    type="submit"
                    className={styles.confirmBtn}
                    onClick={confirmAdd}
                  >
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
                      required
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
                      required
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
                      required
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
