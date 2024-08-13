import { useEffect, useState } from "react";

const EnhancePage = ({
  ownedArtifacts,
  setOwnedArtifacts,
  levelValue,
  totalValue,
  setTotalValue,
  setValueProgress,
  valueProgress,
}) => {
  const [selectItemActive, setSelectItemActive] = useState(false);
  const [activeEnhanceItem, setActiveEnhanceItem] = useState(null);
  const [currentPage, setCurrentPage] = useState("main");
  const handleBtnClick = () => {
    setSelectItemActive(true);
    setTimeout(() => {
      const hiddenDiv = document.querySelector(".selectItem");
      if (hiddenDiv) {
        hiddenDiv.classList.replace("despandDiv", "expandDiv");
      }
    }, 0);
  };

  const handleExitBtnClick = () => {
    const hiddenDiv = document.querySelector(".selectItem");
    if (hiddenDiv) {
      hiddenDiv.classList.replace("expandDiv", "despandDiv");
    }
    setTimeout(() => {
      setSelectItemActive(false);
    }, 300);
  };
  return (
    <>
      {currentPage === "main" && (
        <div className="enhancePage">
          <div className="enhanceCont">
            <h1 className="bolt">
              <i className="fa-solid fa-bolt" onClick={handleBtnClick}></i>
            </h1>
            {selectItemActive && (
              <div className="selectItem despandDiv">
                <button className="exitBtn" onClick={handleExitBtnClick}>
                  <i className="fa-regular fa-circle-xmark"></i>
                </button>
                {ownedArtifacts
                  .filter(
                    (ownedArtifact) =>
                      ownedArtifact?.newArtifact?.name &&
                      ownedArtifact?.newArtifact?.img
                  )
                  .map((ownedArtifact, index) => (
                    <ItemToBeSelected
                      key={`${ownedArtifact?.name}-${index}`}
                      itemID={ownedArtifact?.newArtifact}
                      sampleImg={ownedArtifact.newArtifact?.img}
                      sampleName={ownedArtifact.newArtifact?.name}
                      setOwnedArtifacts={setOwnedArtifacts}
                      ownedArtifacts={ownedArtifacts}
                      levelValue={levelValue}
                      totalValue={totalValue}
                      setTotalValue={setTotalValue}
                      setValueProgress={setValueProgress}
                      activeEnhanceItem={activeEnhanceItem}
                      setActiveEnhanceItem={setActiveEnhanceItem}
                      setCurrentPage={setCurrentPage}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
      {currentPage === "beamEnhance" && (
        <div className="rightPage enhanceScene">
          <img
            src={activeEnhanceItem.img}
            alt={activeEnhanceItem.name}
            className="enhancingItemImage"
          />
        </div>
      )}
    </>
  );
};
const ItemToBeSelected = ({
  itemID,
  sampleImg,
  sampleName,
  setOwnedArtifacts,
  ownedArtifacts,
  levelValue,
  totalValue,
  setTotalValue,
  setValueProgress,
  activeEnhanceItem,
  setActiveEnhanceItem,
  setCurrentPage,
}) => {
  const handleSelectItem = () => {
    setActiveEnhanceItem(itemID);
    setCurrentPage("beamEnhance");
  };
  return (
    <div className={`itemCont ${itemID.rarity}`}>
      <img src={sampleImg} alt={`${sampleName} image`} />
      <h1>{sampleName}</h1>
      <button className="selectBtn" onClick={handleSelectItem}>
        Select
      </button>
    </div>
  );
};
export default EnhancePage;
