import { useState, useEffect, useRef } from "react";
import "./App.css";
import ExtractPage from "./components/ExtractPage";
import InventoryPage from "./components/InventoryPage";
import ShopPage from "./components/ShopPage";
import UpgradesPage from "./components/UpgradesPage";
import EnhancePage from "./components/EnhancePage";

function App() {
  const [activeButton, setActiveButton] = useState("extractBtn");
  const [currentPage, setCurrentPage] = useState("extractBtn");
  const [totalValue, setTotalValue] = useState(0);
  const [valueProgress, setValueProgress] = useState(100);
  const [levelValue, setLevelValue] = useState(100);
  const [balance, setBalance] = useState(0);
  const [levelID, setLevelID] = useState(2);
  const [moreValueNeeded, setMoreValueNeeded] = useState(100);
  const [ownedArtifacts, setOwnedArtifacts] = useState([]);
  const [clayIsFound, setClayIsFound] = useState(false);
  const [stoneIsFound, setStoneIsFound] = useState(false);
  const [oceanIsFound, setOceanIsFound] = useState(false);
  const [quartzIsFound, setQuartzIsFound] = useState(false);
  const [crystalIsFound, setCrystalIsFound] = useState(false);
  const [obsidianIsFound, setObsidianIsFound] = useState(false);
  const [moonIsFound, setMoonIsFound] = useState(false);
  const [meteorIsFound, setMeteorIsFound] = useState(false);
  const [alienIsFound, setAlienIsFound] = useState(false);
  const [starIsFound, setStarIsFound] = useState(true);
  const [blackIsFound, setBlackIsFound] = useState(false);
  const [cosmicIsFound, setCosmicIsFound] = useState(false);
  const [certifiedMax, setCertifiedMax] = useState(8);
  const [luck, setLuck] = useState(0);
  const [currentCertifiedPrice, setCurrentCertifiedPrice] = useState(200);
  const [currentLuckPrice, setCurrentLuckPrice] = useState(500);
  const [currentCoinsPrice, setCurrentCoinsPrice] = useState(50);
  const [currentEnhancePrice, setCurrentEnhancePrice] = useState(500);
  const [upgradeAtMax0, setUpgradeAtMax0] = useState(false);
  const [upgradeAtMax1, setUpgradeAtMax1] = useState(false);
  const [upgradeAtMax2, setUpgradeAtMax2] = useState(false);
  const [upgradeAtMax3, setUpgradeAtMax3] = useState(false);
  const [max, setMax] = useState(0.3);
  const [min, setMin] = useState(0.05);
  const [enhancingEfficiency, setEnhancingEfficiency] = useState(200);
  const [leftIsHidden, setLeftIsHidden] = useState(false);

  useEffect(() => {
    const storedOwnedArtifacts = localStorage.getItem("ownedArtifacts");
    const storedBalance = localStorage.getItem("balance");
    const storedTotalValue = localStorage.getItem("totalValue");
    const storedLevelID = localStorage.getItem("levelID");
    const storedCertifiedMax = localStorage.getItem("certifiedMax");
    const storedLuck = localStorage.getItem("luck");
    const storedCurrentCertifiedPrice = localStorage.getItem(
      "currentCertifiedPrice"
    );
    const storedCurrentLuckPrice = localStorage.getItem("currentLuckPrice");
    const storedCurrentCoinsPrice = localStorage.getItem("currentCoinsPrice");
    const storedCurrentEnhancePrice = localStorage.getItem(
      "currentEnhancePrice"
    );
    const storedUpgradeAtMax0 = localStorage.getItem("upgradeAtMax0");
    const storedUpgradeAtMax1 = localStorage.getItem("upgradeAtMax1");
    const storedUpgradeAtMax2 = localStorage.getItem("upgradeAtMax2");
    const storedUpgradeAtMax3 = localStorage.getItem("upgradeAtMax3");
    const storedMax = localStorage.getItem("max");
    const storedMin = localStorage.getItem("min");
    const storedEnhancingEfficiency = localStorage.getItem(
      "enhancingEfficiency"
    );

    if (storedOwnedArtifacts)
      setOwnedArtifacts(JSON.parse(storedOwnedArtifacts));
    if (storedBalance) setBalance(Number(storedBalance));
    if (storedTotalValue) {
      const newValueProgress =
        ((levelValue - Number(storedTotalValue)) / levelValue) * 100;
      setValueProgress(newValueProgress);

      const progressBar = document.getElementById("progressBar");
      if (progressBar) {
        progressBar.style.width = `${newValueProgress}%`;
      }

      setTotalValue(Number(storedTotalValue));
    }
    if (storedLevelID) setLevelID(Number(storedLevelID));
    if (storedCertifiedMax) setCertifiedMax(storedCertifiedMax);
    if (storedLuck) setLuck(Number(storedLuck));
    if (storedCurrentCertifiedPrice === "Max") {
      setCurrentCertifiedPrice(storedCurrentCertifiedPrice);
    } else if (storedCurrentCertifiedPrice) {
      setCurrentCertifiedPrice(Number(storedCurrentCertifiedPrice));
    }
    if (storedCurrentLuckPrice === "Max") {
      setCurrentLuckPrice(storedCurrentLuckPrice);
    } else if (storedCurrentLuckPrice) {
      setCurrentLuckPrice(Number(storedCurrentLuckPrice));
    }
    if (storedCurrentCoinsPrice === "Max") {
      setCurrentCoinsPrice(storedCurrentCoinsPrice);
    } else if (storedCurrentCoinsPrice) {
      setCurrentCoinsPrice(Number(storedCurrentCoinsPrice));
    }
    if (storedCurrentEnhancePrice === "Max") {
      setCurrentEnhancePrice(storedCurrentEnhancePrice);
    } else if (storedCurrentEnhancePrice) {
      setCurrentEnhancePrice(Number(storedCurrentEnhancePrice));
    }
    if (storedUpgradeAtMax0) setUpgradeAtMax0(JSON.parse(storedUpgradeAtMax0));
    if (storedUpgradeAtMax1) setUpgradeAtMax1(JSON.parse(storedUpgradeAtMax1));
    if (storedUpgradeAtMax2) setUpgradeAtMax2(JSON.parse(storedUpgradeAtMax2));
    if (storedUpgradeAtMax3) setUpgradeAtMax3(JSON.parse(storedUpgradeAtMax3));
    if (storedMax) setMax(Number(storedMax));
    if (storedMin) setMin(Number(storedMin));
    if (storedEnhancingEfficiency)
      setEnhancingEfficiency(storedEnhancingEfficiency);
  }, []);

  useEffect(() => {
    localStorage.setItem("ownedArtifacts", JSON.stringify(ownedArtifacts));
    localStorage.setItem("balance", balance);
    localStorage.setItem("totalValue", totalValue);
    localStorage.setItem("levelID", levelID);
    localStorage.setItem("certifiedMax", certifiedMax);
    localStorage.setItem("luck", luck);
    localStorage.setItem("currentCertifiedPrice", currentCertifiedPrice);
    localStorage.setItem("currentLuckPrice", currentLuckPrice);
    localStorage.setItem("currentCoinsPrice", currentCoinsPrice);
    localStorage.setItem("currentEnhancePrice", currentEnhancePrice);
    localStorage.setItem("upgradeAtMax0", upgradeAtMax0);
    localStorage.setItem("upgradeAtMax1", upgradeAtMax1);
    localStorage.setItem("upgradeAtMax2", upgradeAtMax2);
    localStorage.setItem("upgradeAtMax3", upgradeAtMax3);
    localStorage.setItem("max", max);
    localStorage.setItem("min", min);
    localStorage.setItem("enhancingEfficiency", enhancingEfficiency);
  }, [ownedArtifacts, balance, totalValue]);

  useEffect(() => {
    if (totalValue >= levelValue) {
      function newLevelValue() {
        switch (levelID) {
          case 2:
            return 500;
          case 3:
            return 2500;
          case 4:
            return 10000;
          case 5:
            return 30000;
          case 6:
            return 100000;
          case 7:
            return 1000000;
          case 8:
            return 1000000000;
          case 9:
            return 100000000000;
        }
      }
      document.getElementById("progressBar").style.width = `${
        newLevelValue() - totalValue
      }%`;
      setLevelValue(newLevelValue());
      setValueProgress(newLevelValue() - totalValue);
      if (levelID == 9) {
      } else {
        setLevelID((prevLevelID) => prevLevelID + 1);
      }
    } else {
      setValueProgress(((levelValue - totalValue) / levelValue) * 100);
    }
    if (levelID == 9) {
      setMoreValueNeeded(0);
    } else {
      setMoreValueNeeded(levelValue - totalValue);
    }
  }, [totalValue, levelValue, levelID]);

  function handleClick(e) {
    setActiveButton(e.target.id);
    setCurrentPage(e.target.id);
  }

  function renderCurrentPage() {
    switch (currentPage) {
      case "extractBtn":
        return (
          <ExtractPage
            balance={balance}
            setBalance={setBalance}
            max={max}
            min={min}
          />
        );
      case "inventoryBtn":
        return (
          <InventoryPage
            ownedArtifacts={ownedArtifacts}
            setOwnedArtifacts={setOwnedArtifacts}
            balance={balance}
            setBalance={setBalance}
            levelValue={levelValue}
            totalValue={totalValue}
            setTotalValue={setTotalValue}
            setValueProgress={setValueProgress}
            valueProgress={valueProgress}
            setClayIsFound={setClayIsFound}
            setStoneIsFound={setStoneIsFound}
            setOceanIsFound={setOceanIsFound}
            setQuartzIsFound={setQuartzIsFound}
            setCrystalIsFound={setCrystalIsFound}
            setObsidianIsFound={setObsidianIsFound}
            setMoonIsFound={setMoonIsFound}
            setMeteorIsFound={setMeteorIsFound}
            setAlienIsFound={setAlienIsFound}
            setStarIsFound={setStarIsFound}
            setBlackIsFound={setBlackIsFound}
            setCosmicIsFound={setCosmicIsFound}
            certifiedMax={certifiedMax}
            luck={luck}
          />
        );
      case "shopBtn":
        return (
          <ShopPage
            balance={balance}
            setBalance={setBalance}
            levelValue={levelValue}
            totalValue={totalValue}
            setTotalValue={setTotalValue}
            setValueProgress={setValueProgress}
            valueProgress={valueProgress}
            ownedArtifacts={ownedArtifacts}
            setOwnedArtifacts={setOwnedArtifacts}
            clayIsFound={clayIsFound}
            stoneIsFound={stoneIsFound}
            oceanIsFound={oceanIsFound}
            quartzIsFound={quartzIsFound}
            crystalIsFound={crystalIsFound}
            obsidianIsFound={obsidianIsFound}
            moonIsFound={moonIsFound}
            meteorIsFound={meteorIsFound}
            alienIsFound={alienIsFound}
            starIsFound={starIsFound}
            blackIsFound={blackIsFound}
            cosmicIsFound={cosmicIsFound}
          />
        );
      case "upgradesBtn":
        return (
          <UpgradesPage
            setCertifiedMax={setCertifiedMax}
            balance={balance}
            setBalance={setBalance}
            setLuck={setLuck}
            setCurrentCertifiedPrice={setCurrentCertifiedPrice}
            setCurrentLuckPrice={setCurrentLuckPrice}
            setCurrentCoinsPrice={setCurrentCoinsPrice}
            setCurrentEnhancePrice={setCurrentEnhancePrice}
            currentCoinsPrice={currentCoinsPrice}
            currentLuckPrice={currentLuckPrice}
            currentCertifiedPrice={currentCertifiedPrice}
            currentEnhancePrice={currentEnhancePrice}
            upgradeAtMax0={upgradeAtMax0}
            upgradeAtMax1={upgradeAtMax1}
            upgradeAtMax2={upgradeAtMax2}
            upgradeAtMax3={upgradeAtMax3}
            setUpgradeAtMax0={setUpgradeAtMax0}
            setUpgradeAtMax1={setUpgradeAtMax1}
            setUpgradeAtMax2={setUpgradeAtMax2}
            setUpgradeAtMax3={setUpgradeAtMax3}
            setMax={setMax}
            setMin={setMin}
            setEnhancingEfficiency={setEnhancingEfficiency}
          />
        );
      case "enhanceBtn":
        return (
          <EnhancePage
            ownedArtifacts={ownedArtifacts}
            setOwnedArtifacts={setOwnedArtifacts}
            levelValue={levelValue}
            totalValue={totalValue}
            setTotalValue={setTotalValue}
            setValueProgress={setValueProgress}
            valueProgress={valueProgress}
            enhancingEfficiency={enhancingEfficiency}
            setLeftIsHidden={setLeftIsHidden}
          />
        );
      default:
        return (
          <ExtractPage
            balance={balance}
            setBalance={setBalance}
            max={max}
            min={min}
          />
        );
    }
  }
  function checkBalance() {
    if (balance > 9999999999.99) {
      return 9999999999.99;
    } else {
      return balance.toFixed(2);
    }
  }
  return (
    <>
      <div id="mainBody">
        <div
          id="leftMenu"
          className={leftIsHidden ? "leftIsHidden" : "leftIsNotHidden"}
        >
          <div id="balanceBox">
            <h2>
              <i className="fa-solid fa-coins"></i> {checkBalance()}
            </h2>
            <div id="progressBarContainer">
              <div id="progressBar"></div>
            </div>
            <h4 className="one">
              Total Value: <i className="fa-solid fa-coins"></i> {totalValue}
            </h4>
            <h4 className="two">
              Earn <i className="fa-solid fa-coins"></i> {moreValueNeeded} more
            </h4>
          </div>
          <button
            id="extractBtn"
            className={activeButton == "extractBtn" ? "activeBtn btn" : "btn"}
            onClick={handleClick}
          >
            <i className="fa-regular fa-gem"></i> Extract
          </button>
          <button
            id="inventoryBtn"
            className={activeButton == "inventoryBtn" ? "activeBtn btn" : "btn"}
            onClick={handleClick}
          >
            <i className="fa-solid fa-warehouse"></i> Inventory
          </button>
          <button
            id="shopBtn"
            className={activeButton == "shopBtn" ? "activeBtn btn" : "btn"}
            onClick={handleClick}
          >
            <i className="fa-solid fa-shop"></i> Shop
          </button>
          <button
            id="upgradesBtn"
            className={activeButton == "upgradesBtn" ? "activeBtn btn" : "btn"}
            onClick={handleClick}
          >
            <i className="fa-solid fa-circle-up"></i> Upgrades
          </button>
          <button
            id="enhanceBtn"
            className={activeButton == "enhanceBtn" ? "activeBtn btn" : "btn"}
            onClick={handleClick}
          >
            <i className="fa-solid fa-bolt"></i> Enhance
          </button>
        </div>
        {renderCurrentPage()}
      </div>
    </>
  );
}

export default App;
