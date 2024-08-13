import { useState } from "react";

const UpgradesPage = ({
  setCertifiedMax,
  balance,
  setBalance,
  setLuck,
  currentCertifiedPrice,
  currentLuckPrice,
  currentCoinsPrice,
  upgradeAtMax0,
  upgradeAtMax1,
  upgradeAtMax2,
  setUpgradeAtMax0,
  setUpgradeAtMax1,
  setUpgradeAtMax2,
  setCurrentCertifiedPrice,
  setCurrentLuckPrice,
  setCurrentCoinsPrice,
  setMax,
  setMin,
}) => {
  const [coinsCantBuy, setCoinsCantBuy] = useState(false);
  const [luckCantBuy, setLuckCantBuy] = useState(false);
  const [certifiedCantBuy, setCertifiedCantBuy] = useState(false);
  const buyCoins = () => {
    if (currentCoinsPrice !== "Max") {
      if (balance >= currentCoinsPrice) {
        setBalance((prevBalance) => prevBalance - currentCoinsPrice);
        switch (currentCoinsPrice) {
          case 50: {
            setCurrentCoinsPrice(100);
            setMax(0.6);
            setMin(0.2);
            break;
          }
          case 100: {
            setCurrentCoinsPrice(500);
            setMax(0.9);
            setMin(0.5);
            break;
          }
          case 500: {
            setCurrentCoinsPrice(1500);
            setMax(1.2);
            setMin(0.8);
            break;
          }
          case 1500: {
            setCurrentCoinsPrice(5000);
            setMax(1.5);
            setMin(1);
            break;
          }
          case 5000: {
            setCurrentCoinsPrice(30000);
            setMax(1.6);
            setMin(1.4);
            break;
          }
          case 30000: {
            setCurrentCoinsPrice("Max");
            setMax(3.05);
            setMin(2.95);
            setUpgradeAtMax0(true);
            break;
          }
        }
      } else {
        setCoinsCantBuy(true);
        setTimeout(() => {
          setCoinsCantBuy(false);
        }, 500);
      }
    }
  };
  const buyCertified = () => {
    if (currentCertifiedPrice !== "Max") {
      if (balance >= currentCertifiedPrice) {
        setBalance((prevBalance) => prevBalance - currentCertifiedPrice);
        switch (currentCertifiedPrice) {
          case 200: {
            setCurrentCertifiedPrice(800);
            setCertifiedMax(7);
            break;
          }
          case 800: {
            setCurrentCertifiedPrice(2500);
            setCertifiedMax(6);
            break;
          }
          case 2500: {
            setCurrentCertifiedPrice(10000);
            setCertifiedMax(5);
            break;
          }
          case 10000: {
            setCurrentCertifiedPrice(80000);
            setCertifiedMax(4);
            break;
          }
          case 80000: {
            setCurrentCertifiedPrice(250000);
            setCertifiedMax(3);
            break;
          }
          case 250000: {
            setCurrentCertifiedPrice("Max");
            setCertifiedMax(2);
            setUpgradeAtMax1(true);
            break;
          }
        }
      } else if (balance < currentCertifiedPrice) {
        setCertifiedCantBuy(true);
        setTimeout(() => {
          setCertifiedCantBuy(false);
        }, 500);
      }
    }
  };
  const buyLuck = () => {
    if (currentLuckPrice !== "Max") {
      if (balance >= currentLuckPrice) {
        setBalance((prevBalance) => prevBalance - currentLuckPrice);
        switch (currentLuckPrice) {
          case 500: {
            setCurrentLuckPrice(5000);
            setLuck(1);
            break;
          }
          case 5000: {
            setCurrentLuckPrice(100000);
            setLuck(2);
            break;
          }
          case 100000: {
            setCurrentLuckPrice(10000000);
            setLuck(3);
            break;
          }
          case 10000000: {
            setCurrentLuckPrice("Max");
            setLuck(4);
            setUpgradeAtMax2(true);
            break;
          }
        }
      } else {
        setLuckCantBuy(true);
        setTimeout(() => {
          setLuckCantBuy(false);
        }, 500);
      }
    }
  };
  const findMaxCoins = () => {
    switch (currentCoinsPrice) {
      case 50:
        return 0;
      case 100:
        return 1;
      case 500:
        return 2;
      case 1500:
        return 3;
      case 5000:
        return 4;
      case 30000:
        return 5;
      case "Max":
        return 6;
    }
  };
  const findLuckPrice = () => {
    switch (currentLuckPrice) {
      case 500:
        return 0;
      case 5000:
        return 1;
      case 100000:
        return 2;
      case 10000000:
        return 3;
      case "Max":
        return 4;
    }
  };
  const findCertifiedPrice = () => {
    switch (currentCertifiedPrice) {
      case 200:
        return "12.5%";
      case 800:
        return "14.3%";
      case 2500:
        return "16.7%";
      case 10000:
        return "20%";
      case 80000:
        return "25%";
      case 250000:
        return "33.3%";
      case "Max":
        return "50%";
    }
  };
  return (
    <div className="rightPage upgrades">
      <div className="upgradesWrapper">
        <div className="upgradeCont">
          <p>{`Extract Level: ${findMaxCoins()}`}</p>
          <button
            onClick={buyCoins}
            className={`${upgradeAtMax0 ? "max" : "notMax"} ${
              coinsCantBuy ? "red" : (upgradeAtMax0 ? "" : "blue")
            }`}
          >
            {currentCoinsPrice}
          </button>
        </div>
        <div className="upgradeCont">
          <p>{`Rarity Luck: ${findLuckPrice()}`}</p>
          <button
            onClick={buyLuck}
            className={`${upgradeAtMax2 ? "max" : "notMax"} ${
              luckCantBuy ? "red" : (upgradeAtMax2 ? "" : "blue")
            }`}
          >
            {currentLuckPrice}
          </button>
        </div>
        <div className="upgradeCont">
          <p>{`Certified Luck: ${findCertifiedPrice()}`}</p>
          <button
            onClick={buyCertified}
            className={`${upgradeAtMax1 ? "max" : "notMax"} ${
              certifiedCantBuy ? "red" : (upgradeAtMax1 ? "" : "blue")
            }`}
          >
            {currentCertifiedPrice}
          </button>
        </div>
      </div>
    </div>
  );
};
export default UpgradesPage;
