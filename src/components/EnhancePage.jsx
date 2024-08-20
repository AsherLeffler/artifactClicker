import { useEffect, useState } from "react";

const EnhancePage = ({
  ownedArtifacts,
  setOwnedArtifacts,
  levelValue,
  totalValue,
  setTotalValue,
  setValueProgress,
  valueProgress,
  enhancingEfficiency,
  setLeftIsHidden,
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
  const [enhanceProgress, setEnhanceProgress] = useState(0);
  let timeIntervalID;
  let enhanceProgressInterval = null;

  useEffect(() => {
    if (currentPage === "main") {
      setEnhanceProgress(0);
      setActiveEnhanceItem(null);
    }
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === "beamEnhance") {
      let moveInterval;
      let randomMovementInterval = setInterval(() => {
        const player = document.querySelector(".redPlayer");
        const playbox = document.querySelector(".playBoxContainer");
        const playerWidth = player.offsetWidth;
        const playboxWidth = playbox.offsetWidth;
        const beam = document.querySelector(".beams");
        const newLeft = player.offsetLeft - findRandomNum();
        if (newLeft > 10 && newLeft < playboxWidth - playerWidth) {
          player.style.left = newLeft + "px";
        }
        rotateBeam();
        if (
          player.offsetLeft > playboxWidth / 2 - 30 &&
          player.offsetLeft < playboxWidth / 2 + 30
        ) {
          beam.style.animation = "tractorBeamHit 0.7s infinite forwards";
          if (!enhanceProgressInterval) {
            enhanceProgressInterval = setInterval(() => {
              if (enhanceProgress >= 100) {
                const newTotalValue = (
                  Number(totalValue) + activeEnhanceItem.value
                ).toFixed(2);
                const newValueProgress =
                  ((levelValue - newTotalValue) / levelValue) * 100;
                setTotalValue(newTotalValue);
                setValueProgress(newValueProgress);
                document.getElementById(
                  "progressBar"
                ).style.width = `${newValueProgress}%`;
                clearInterval(enhanceProgressInterval);
                enhanceProgressInterval = null;
                clearInterval(randomMovementInterval);
                randomMovementInterval = null;
                window.removeEventListener("keydown", handleKeyDown);
                window.removeEventListener("keyup", handleKeyUp);
                clearInterval(moveInterval);
                clearInterval(timeIntervalID);
                player.style.left = playboxWidth / 2 + "px";
                rotateBeam();
                activeEnhanceItem.value *= 2;
                activeEnhanceItem.enhanced = true;
                setTimeout(() => {
                  setCurrentPage("main");
                  setLeftIsHidden(false);
                }, 1000);
              } else {
                setEnhanceProgress((prevProgress) => prevProgress + 1);
              }
            }, enhancingEfficiency);
          }
        } else {
          if (enhanceProgressInterval) {
            clearInterval(enhanceProgressInterval);
            enhanceProgressInterval = null;
          }
          beam.style.animation = "tractorBeamMiss 1s infinite forwards";
        }
      }, 100);

      const handleKeyDown = (event) => {
        if (currentPage === "beamEnhance") {
          if (enhanceProgress < 100) {
            const player = document.querySelector(".redPlayer");
            const playbox = document.querySelector(".playBoxContainer");
            const playboxWidth = playbox.offsetWidth;
            const playerWidth = player.offsetWidth;
            const beam = document.querySelector(".beams");

            if (!moveInterval) {
              moveInterval = setInterval(() => {
                switch (event.key) {
                  case "ArrowLeft":
                    if (player.offsetLeft > 10) {
                      player.style.left = player.offsetLeft - 10 + "px";
                      rotateBeam();
                      if (
                        player.offsetLeft > playboxWidth / 2 - 30 &&
                        player.offsetLeft < playboxWidth / 2 + 30
                      ) {
                        beam.style.animation =
                          "tractorBeamHit 0.7s infinite forwards";
                        if (!enhanceProgressInterval) {
                          enhanceProgressInterval = setInterval(() => {
                            setEnhanceProgress((prevProgress) => {
                              const newProgress = prevProgress + 1;
                              if (newProgress >= 100) {
                                const newTotalValue = (
                                  Number(totalValue) + activeEnhanceItem.value
                                ).toFixed(2);
                                const newValueProgress =
                                  ((levelValue - newTotalValue) / levelValue) *
                                  100;
                                setTotalValue(newTotalValue);
                                setValueProgress(newValueProgress);
                                document.getElementById(
                                  "progressBar"
                                ).style.width = `${newValueProgress}%`;
                                clearInterval(enhanceProgressInterval);
                                clearInterval(randomMovementInterval);
                                clearInterval(timeIntervalID);
                                window.removeEventListener(
                                  "keydown",
                                  handleKeyDown
                                );
                                window.removeEventListener(
                                  "keyup",
                                  handleKeyUp
                                );
                                clearInterval(moveInterval);
                                randomMovementInterval = null;
                                enhanceProgressInterval = null;
                                player.style.left = playboxWidth / 2 + "px";
                                rotateBeam();
                                activeEnhanceItem.value *= 2;
                                activeEnhanceItem.enhanced = true;
                                setTimeout(() => {
                                  setCurrentPage("main");
                                  setLeftIsHidden(false);
                                }, 1000);
                                return 100;
                              } else {
                                return newProgress;
                              }
                            });
                          }, enhancingEfficiency);
                        }
                      } else {
                        if (enhanceProgressInterval) {
                          clearInterval(enhanceProgressInterval);
                          enhanceProgressInterval = null;
                        }
                        beam.style.animation =
                          "tractorBeamMiss 1s infinite forwards";
                      }
                    }
                    break;
                  case "ArrowRight":
                    if (player.offsetLeft < playboxWidth - playerWidth) {
                      player.style.left = player.offsetLeft + 10 + "px";
                      rotateBeam();
                      if (
                        player.offsetLeft > playboxWidth / 2 - 30 &&
                        player.offsetLeft < playboxWidth / 2 + 30
                      ) {
                        beam.style.animation =
                          "tractorBeamHit 0.7s infinite forwards";
                        if (!enhanceProgressInterval) {
                          enhanceProgressInterval = setInterval(() => {
                            setEnhanceProgress((prevProgress) => {
                              const newProgress = prevProgress + 1;
                              if (newProgress >= 100) {
                                const newTotalValue = (
                                  Number(totalValue) + activeEnhanceItem.value
                                ).toFixed(2);
                                const newValueProgress =
                                  ((levelValue - newTotalValue) / levelValue) *
                                  100;
                                setTotalValue(newTotalValue);
                                setValueProgress(newValueProgress);
                                document.getElementById(
                                  "progressBar"
                                ).style.width = `${newValueProgress}%`;
                                window.removeEventListener(
                                  "keydown",
                                  handleKeyDown
                                );
                                window.removeEventListener(
                                  "keyup",
                                  handleKeyUp
                                );
                                clearInterval(moveInterval);
                                clearInterval(randomMovementInterval);
                                clearInterval(enhanceProgressInterval);
                                clearInterval(timeIntervalID);
                                enhanceProgressInterval = null;
                                randomMovementInterval = null;
                                activeEnhanceItem.value *= 2;
                                activeEnhanceItem.enhanced = true;
                                player.style.left = playboxWidth / 2 + "px";
                                rotateBeam();
                                setTimeout(() => {
                                  setCurrentPage("main");
                                  setLeftIsHidden(false);
                                }, 1000);
                                return 100;
                              } else {
                                return newProgress;
                              }
                            });
                          }, enhancingEfficiency);
                        }
                      } else {
                        if (enhanceProgressInterval) {
                          clearInterval(enhanceProgressInterval);
                          enhanceProgressInterval = null;
                        }
                        beam.style.animation =
                          "tractorBeamMiss 1s infinite forwards";
                      }
                    }
                    break;
                }
              }, 10);
            }
          }
        }
      };

      const findRandomNum = () => {
        const player = document.querySelector(".redPlayer");
        const playboxWidth = document.querySelector(".playBoxContainer");
        if (player.offsetLeft <= playboxWidth.offsetWidth / 2) {
          return Math.random() * (25 + 10) - 10;
        } else if (player.offsetLeft > playboxWidth.offsetWidth / 2) {
          return Math.random() * (-25 - 10) + 10;
        } else {
          return Math.random() * (-25 + 10) - 10;
        }
      };

      const rotateBeam = () => {
        const beam = document.querySelector(".beamCont");
        const beamX = beam.offsetLeft + beam.offsetWidth / 2;
        const playbox = document.querySelector(".playBoxContainer");
        const playboxCenterX = playbox?.offsetWidth / 2;

        const player = document.querySelector(".redPlayer");
        const playerX = player.offsetLeft + player.offsetWidth / 2;

        const deltaX = playerX - playboxCenterX;
        const deltaY = beamX;

        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) - 90;

        beam.style.transform = `rotate(${angle}deg)`;
      };

      const handleKeyUp = () => {
        clearInterval(moveInterval);
        moveInterval = null;
      };
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
        clearInterval(moveInterval);
        clearInterval(randomMovementInterval);
        clearInterval(enhanceProgressInterval);
      };
    }
  }, [currentPage]);
  const [time, setTime] = useState(100);
  useEffect(() => {
    if (currentPage === "beamEnhance") {
      const imgCont = document.querySelector(".imgCont");
      const image = document.querySelector(".enhancingItemImage");
      timeIntervalID = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            const newTotalValue = (
              totalValue - activeEnhanceItem.value
            ).toFixed(2);
            const newValueProgress =
              ((levelValue - newTotalValue) / levelValue) * 100;
            setTotalValue(newTotalValue);
            setValueProgress(newValueProgress);
            document.getElementById(
              "progressBar"
            ).style.width = `${newValueProgress}%`;
            clearInterval(timeIntervalID);
            setCurrentPage("main");
            setLeftIsHidden(false);
            setOwnedArtifacts((prevArtifacts) =>
              prevArtifacts.filter(
                (ownedArtifact) =>
                  ownedArtifact.newArtifact !== activeEnhanceItem
              )
            );
            return 100;
          } else {
            imgCont.style.bottom = prevTime + "px";
            return prevTime - 1;
          }
        });
      }, 1000);
    }
    return () => {
      clearInterval(timeIntervalID);
    };
  }, [currentPage]);
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
                <h3>Inventory</h3>
                {ownedArtifacts
                  .filter(
                    (ownedArtifact) =>
                      ownedArtifact?.newArtifact?.name &&
                      ownedArtifact?.newArtifact?.img &&
                      !ownedArtifact?.newArtifact?.enhanced
                  )
                  .sort((a, b) => b.newArtifact.value - a.newArtifact.value)
                  .map((ownedArtifact, index) => (
                    <ItemToBeSelected
                      key={`${ownedArtifact?.name}-${index}`}
                      itemID={ownedArtifact?.newArtifact}
                      sampleImg={ownedArtifact.newArtifact?.img}
                      sampleName={
                        ownedArtifact.newArtifact?.hiddenName
                          ? ownedArtifact.newArtifact?.hiddenName
                          : ownedArtifact.newArtifact?.name
                      }
                      setOwnedArtifacts={setOwnedArtifacts}
                      ownedArtifacts={ownedArtifacts}
                      levelValue={levelValue}
                      totalValue={totalValue}
                      setTotalValue={setTotalValue}
                      setValueProgress={setValueProgress}
                      activeEnhanceItem={activeEnhanceItem}
                      setActiveEnhanceItem={setActiveEnhanceItem}
                      setCurrentPage={setCurrentPage}
                      setLeftIsHidden={setLeftIsHidden}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
      {currentPage === "beamEnhance" && (
        <div className="rightPage enhanceScene">
          <div className="beamCont">
            <div className="beamBase"></div>
            <div className="beams"></div>
          </div>
          <div className="playBoxContainer">
            <div className="notGood1"></div>
            <div className="good"></div>
            <div className="notGood2"></div>
            <div className="redPlayer"></div>
          </div>
          {enhanceProgress >= 0 && (
            <div className="displayEnhanceProgress">
              {enhanceProgress >= 100 ? 100 : enhanceProgress}%
            </div>
          )}
          <div className="imgCont">
            <img
              src={activeEnhanceItem.img}
              alt={activeEnhanceItem.name}
              className="enhancingItemImage"
            />
            <div className="chain"></div>
          </div>
          <div className="bottomContainer">
            <div className="lava"></div>
          </div>
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
  setLeftIsHidden,
}) => {
  const handleSelectItem = () => {
    setActiveEnhanceItem(itemID);
    setCurrentPage("beamEnhance");
    setLeftIsHidden(true);
  };
  return (
    <div className={`itemCont ${itemID.rarity}`}>
      <img src={sampleImg} alt={`${sampleName} image`} />
      <h1>
        {sampleName}{" "}
        {itemID?.isCertified ? (
          <i className="fa-solid fa-star" style={{ color: "yellow" }}></i>
        ) : (
          ""
        )}
      </h1>
      <button className="selectBtn" onClick={handleSelectItem}>
        Select
      </button>
    </div>
  );
};
export default EnhancePage;
