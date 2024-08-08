import { useEffect, useState } from "react";

const InventoryPage = ({
  ownedArtifacts,
  setOwnedArtifacts,
  balance,
  setBalance,
  levelValue,
  totalValue,
  setTotalValue,
  setValueProgress,
}) => {
  const [activePage, setActivePage] = useState("inventoryMenu");
  const [activeItem, setActiveItem] = useState(null);
  const [openActiveItem, setOpenActiveItem] = useState(null);
  return (
    <>
      {activePage === "inventoryMenu" && (
        <div className="rightPage inventoryPage">
          {ownedArtifacts.map((ownedArtifact, index) => (
            <OwnedSample
              key={`${ownedArtifact.itemID.name}-${index}`}
              itemID={ownedArtifact.itemID}
              sampleImg={ownedArtifact.itemID.image}
              sampleName={ownedArtifact.itemID.name}
              setOwnedArtifacts={setOwnedArtifacts}
              ownedArtifacts={ownedArtifacts}
              balance={balance}
              setBalance={setBalance}
              levelValue={levelValue}
              totalValue={totalValue}
              setTotalValue={setTotalValue}
              setValueProgress={setValueProgress}
              activePage={activePage}
              setActivePage={setActivePage}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              openActiveItem={openActiveItem}
              setOpenActiveItem={setOpenActiveItem}
            />
          ))}
        </div>
      )}
      {activePage === "itemMenu" && activeItem}
      {activePage === "openSample" && openActiveItem}
    </>
  );
};
const CreateArtifact = ({ artifact }) => {
  return (
    <div className={`artifactCont ${artifact.rarity}`}>
      {artifact.isFound !== false && (
        <img src={artifact.img} alt={`${artifact.name} Image`} />
      )}
      <h2>{artifact.name}</h2>
    </div>
  );
};
const OwnedSample = ({
  itemID,
  sampleName,
  sampleImg,
  setOwnedArtifacts,
  ownedArtifacts,
  balance,
  setBalance,
  levelValue,
  totalValue,
  setTotalValue,
  setValueProgress,
  activePage,
  setActivePage,
  activeItem,
  setActiveItem,
  openActiveItem,
  setOpenActiveItem,
}) => {
  function handleSell() {
    setBalance((prevBalance) => prevBalance + Math.floor(itemID.price * 0.6));
    setOwnedArtifacts((prevOwnedArtifacts) =>
      prevOwnedArtifacts.filter(
        (ownedArtifact) => ownedArtifact.itemID !== itemID
      )
    );
    const newTotalValue = totalValue - itemID.price;
    const newValueProgress = ((levelValue - newTotalValue) / levelValue) * 100;
    setTotalValue(newTotalValue);
    setValueProgress(newValueProgress);
    document.getElementById("progressBar").style.width = `${newValueProgress}%`;
  }
  const setPage = (page) => {
    setActivePage(page);
  };

  function createItemComponent(image, name, artifacts, sampleAmount) {
    let nameCounts = {};

    ownedArtifacts.forEach((element) => {
      if (nameCounts[element.itemID.name]) {
        nameCounts[element.itemID.name]++;
      } else {
        nameCounts[element.itemID.name] = 1;
      }
    });
    const checkSampleAmount = () => {
      const sampleAmount = nameCounts[name] || 0;
      return sampleAmount;
    };
    const checkHandleOpenSample = (num) => {
      if (checkSampleAmount() >= num) {
        handleOpenSample(num);
      }
    };

    return (
      <div className="rightPage itemMenu">
        <div className="openMenu">
          <img src={image} alt={`${name} image`} className="openedItemImg" />
          <h1>{name}</h1>
          <div className="buttonsWrapper">
            <button
              className={`openAmount ${
                checkSampleAmount() >= 1 ? "canOpen" : "cannotOpen"
              }`}
              onClick={() => checkHandleOpenSample(1)}
            >
              Open x1
            </button>
            <button
              className={`openAmount ${
                checkSampleAmount() >= 2 ? "canOpen" : "cannotOpen"
              }`}
              onClick={() => checkHandleOpenSample(2)}
            >
              Open x2
            </button>
            <button
              className={`openAmount ${
                checkSampleAmount() >= 3 ? "canOpen" : "cannotOpen"
              }`}
              onClick={() => checkHandleOpenSample(3)}
            >
              Open x3
            </button>
            <button
              className={`openAmount ${
                checkSampleAmount() >= 4 ? "canOpen" : "cannotOpen"
              }`}
              onClick={() => checkHandleOpenSample(4)}
            >
              Open x4
            </button>
            <button
              className={`openAmount ${
                checkSampleAmount() >= 5 ? "canOpen" : "cannotOpen"
              }`}
              onClick={() => checkHandleOpenSample(5)}
            >
              Open x5
            </button>
          </div>
          <button className="exit" onClick={() => setPage("inventoryMenu")}>
            Exit
          </button>
          <div className="artifactsShowcase">
            {artifacts.map((artifact) => (
              <CreateArtifact artifact={artifact} key={artifact.name} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  const openScene = (amountToOpen) => {
    return (
      <div className="rightPage openingScene">
        {amountToOpen == 1 && <div>This Is One Object</div>}
        {amountToOpen == 2 && (
          <>
            <div>These Are Two Objects</div>
            <div>These Are Two Objects</div>
          </>
        )}
        {amountToOpen == 3 && (
          <>
            <div>These Are Three Objects</div>
            <div>These Are Three Objects</div>
            <div>These Are Three Objects</div>
          </>
        )}
        {amountToOpen == 4 && (
          <>
            <div>These Are Four Objects</div>
            <div>These Are Four Objects</div>
            <div>These Are Four Objects</div>
            <div>These Are Four Objects</div>
          </>
        )}
        {amountToOpen == 5 && (
          <>
            <div>These Are Five Objects</div>
            <div>These Are Five Objects</div>
            <div>These Are Five Objects</div>
            <div>These Are Five Objects</div>
            <div>These Are Five Objects</div>
          </>
        )}
      </div>
    );
  };
  const handleOpenSample = (amountToOpen) => {
    setOpenActiveItem(openScene(amountToOpen));
    setPage("openSample");

    setOwnedArtifacts((prevOwnedArtifacts) => {
      let count = amountToOpen;
      return prevOwnedArtifacts.filter((artifact) => {
        if (count <= 0) {
          return true;
        }
  
        if (artifact.itemID === itemID) {
          count--;
          return false;
        }
  
        return true;
      });
    });
    const newTotalValue = totalValue - itemID.price;
    const newValueProgress = ((levelValue - newTotalValue) / levelValue) * 100;
    setTotalValue(newTotalValue);
    setValueProgress(newValueProgress);
    document.getElementById("progressBar").style.width = `${newValueProgress}%`;
  };
  const handleOpen = () => {
    setActiveItem(
      createItemComponent(itemID.image, itemID.name, itemID.artifacts)
    );
    setActivePage("itemMenu");
  };
  const sellValue = Math.floor(itemID.price * 0.6);
  return (
    <div className="artifact">
      <img src={sampleImg} alt={sampleName} />
      <h2>{sampleName}</h2>
      <div className="buttonCont">
        <button onClick={handleSell} className="sell">
          <h3>
            <i className="fa-solid fa-coins"></i> {sellValue}
          </h3>
        </button>
        <button onClick={handleOpen} className="open">
          <h3>Open</h3>
        </button>
      </div>
    </div>
  );
};

export default InventoryPage;
