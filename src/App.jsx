import { useState, useEffect, useRef } from "react";
import "./App.css";
import ExtractPage from "./components/ExtractPage";
import InventoryPage from "./components/InventoryPage";
import ShopPage from "./components/ShopPage";
import UpgradesPage from "./components/UpgradesPage";
import BettingPage from "./components/BettingPage";

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
  const [starIsFound, setStarIsFound] = useState(false);
  const [blackIsFound, setBlackIsFound] = useState(false);
  const [cosmicIsFound, setCosmicIsFound] = useState(false);

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
        return <ExtractPage balance={balance} setBalance={setBalance} />;
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
        return <UpgradesPage />;
      case "bettingBtn":
        return <BettingPage setBalance={setBalance} balance={balance}/>;
      default:
        return <ExtractPage />;
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
        <div id="leftMenu">
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
            id="bettingBtn"
            className={activeButton == "bettingBtn" ? "activeBtn btn" : "btn"}
            onClick={handleClick}
          >
            <i className="fa-solid fa-dice"></i> Betting
          </button>
        </div>
        {renderCurrentPage()}
      </div>
    </>
  );
}

export default App;
