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
            />
          ))}
        </div>
      )}
      {activePage === "itemMenu" && activeItem}
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
  const setPage = () => {
    setActivePage("inventoryMenu");
  };
  function createItemComponent(image, name, artifacts) {
    return (
      <div className="rightPage itemMenu">
        <div className="openMenu">
          <img src={image} alt={`${name} image`} className="openedItemImg" />
          <h1>{name}</h1>
          <button onClick={setPage}>Exit</button>
          <div className="artifactsShowcase">
            {artifacts.map((artifact) => (
              <CreateArtifact artifact={artifact} key={artifact.name} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  const handleOpen = () => {
    // setOwnedArtifacts((prevOwnedArtifacts) =>
    //   prevOwnedArtifacts.filter(
    //     (ownedArtifact) => ownedArtifact.itemID !== itemID
    //   )
    // );
    // const newTotalValue = totalValue - itemID.price;
    // const newValueProgress = ((levelValue - newTotalValue) / levelValue) * 100;
    setActiveItem(
      createItemComponent(itemID.image, itemID.name, itemID.artifacts)
    );
    setActivePage("itemMenu");
    // setTotalValue(newTotalValue);
    // setValueProgress(newValueProgress);
    // document.getElementById("progressBar").style.width = `${newValueProgress}%`;
  };
  useEffect(() => {}, [activeItem]);
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
