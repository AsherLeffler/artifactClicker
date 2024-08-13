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
  setClayIsFound,
  setStoneIsFound,
  setOceanIsFound,
  setQuartzIsFound,
  setCrystalIsFound,
  setObsidianIsFound,
  setMoonIsFound,
  setMeteorIsFound,
  setAlienIsFound,
  setStarIsFound,
  setBlackIsFound,
  setCosmicIsFound,
  certifiedMax,
  luck,
}) => {
  const [activePage, setActivePage] = useState("inventoryMenu");
  const [activeItem, setActiveItem] = useState(null);
  const [openActiveItem, setOpenActiveItem] = useState(null);
  const [sortedArtifacts, setSortedArtifacts] = useState([]);

  const getArtifactValue = (artifact) => {
    return artifact.itemID?.price || artifact.newArtifact?.value || 0;
  };

  useEffect(() => {
    const sorted = [...ownedArtifacts].sort(
      (a, b) => getArtifactValue(b) - getArtifactValue(a)
    );
    setSortedArtifacts(sorted);
    if (ownedArtifacts.length === 0) {
      const newTotalValue = 0;
      const newValueProgress =
        ((levelValue - newTotalValue) / levelValue) * 100;
      setTotalValue(newTotalValue);
      setValueProgress(newValueProgress);
      document.getElementById(
        "progressBar"
      ).style.width = `${newValueProgress}%`;
    }
  }, [ownedArtifacts]);

  return (
    <>
      {activePage === "inventoryMenu" && (
        <div className="rightPage inventoryPage">
          {sortedArtifacts.map((ownedArtifact, index) => (
            <OwnedSample
              key={`${
                ownedArtifact.itemID
                  ? `${ownedArtifact.itemID?.name}-${index}`
                  : `${ownedArtifact?.name}-${index}`
              }`}
              itemID={
                ownedArtifact.itemID
                  ? ownedArtifact?.itemID
                  : ownedArtifact?.newArtifact
              }
              sampleImg={
                ownedArtifact.itemID
                  ? ownedArtifact.itemID?.image
                  : ownedArtifact.newArtifact?.img
              }
              sampleName={
                ownedArtifact.itemID
                  ? ownedArtifact.itemID?.name
                  : ownedArtifact.newArtifact?.name
              }
              setOwnedArtifacts={setOwnedArtifacts}
              ownedArtifacts={sortedArtifacts}
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
      <h2>{artifact?.isFound ? artifact.hiddenName : artifact.name}</h2>
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
  setClayIsFound,
  setStoneIsFound,
  setOceanIsFound,
  setQuartzIsFound,
  setCrystalIsFound,
  setObsidianIsFound,
  setMoonIsFound,
  setMeteorIsFound,
  setAlienIsFound,
  setStarIsFound,
  setBlackIsFound,
  setCosmicIsFound,
  certifiedMax,
  luck,
}) => {
  const [isShaking, setIsShaking] = useState(false);
  const [canCollect, setCanCollect] = useState(false);
  function test() {
    setIsShaking(true);
    setCanCollect(true);
  }

  useEffect(() => {
    test();
  }, [OwnedSample]);
  function handleSell() {
    const sellAmount = itemID.price
      ? Math.floor(itemID.price * 0.6)
      : itemID.value;
    setBalance((prevBalance) => prevBalance + sellAmount);
    setOwnedArtifacts((prevOwnedArtifacts) =>
      prevOwnedArtifacts.filter(
        (ownedArtifact) =>
          (ownedArtifact.itemID
            ? ownedArtifact.itemID
            : ownedArtifact.newArtifact) !== itemID
      )
    );
    const newTotalValue = Math.round(
      totalValue - (itemID.price ? itemID.price : itemID.value)
    );
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
    const ownedSamples = ownedArtifacts.filter(
      (ownedArtifact) => !ownedArtifact.newArtifact
    );
    ownedSamples.forEach((element) => {
      if (nameCounts[element.itemID?.name]) {
        nameCounts[element.itemID?.name]++;
      } else {
        nameCounts[element.itemID?.name] = 1;
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
              <CreateArtifact artifact={artifact} key={artifact?.name} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  let done = false;
  const openScene = (amountToOpen) => {
    const handleCollect = () => {
      const image = document.querySelector(".indentifyer");
      if (done) {
        setPage("inventoryMenu");
      }
    };
    return (
      <div className="rightPage openingScene">
        {amountToOpen === 1 && (
          <>
            <div className="openDropCont">
              <img
                className={`openImg1 indentifyer ${isShaking ? "shake" : ""}`}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`hiddenImg5 itemIdentifyer`}
                style={{ left: "50%", transform: "translateX(-50%)" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
            </div>
            {canCollect && (
              <div className="openDropCont appear">
                <button onClick={handleCollect} className="collectButton">
                  Collect
                </button>
              </div>
            )}
          </>
        )}
        {amountToOpen === 2 && (
          <>
            <div className="openDropCont">
              <img
                className={`openImg2 indentifyer ${isShaking ? "shake" : ""}`}
                style={{ left: "28%" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`openImg2 indentifyer ${isShaking ? "shake" : ""}`}
                style={{ right: "28%" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`hiddenImg5 itemIdentifyer`}
                style={{ left: "32%", transform: "translateX(-32%)" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`hiddenImg5 itemIdentifyer`}
                style={{ right: "32%", transform: "translateX(32%)" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
            </div>
            {canCollect && (
              <div className="openDropCont appear">
                <button onClick={handleCollect} className="collectButton">
                  Collect
                </button>
              </div>
            )}
          </>
        )}
        {amountToOpen === 3 && (
          <>
            <div className="openDropCont">
              <img
                className={`openImg3 indentifyer ${isShaking ? "shake" : ""}`}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`hiddenImg5 itemIdentifyer`}
                style={{ left: "50%", transform: "translateX(-50%)" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
            </div>
            <div className="openDropCont openBottom">
              <img
                style={{ left: "27%" }}
                className={`openImg3 indentifyer ${isShaking ? "shake" : ""}`}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                style={{ right: "27%" }}
                className={`openImg3 indentifyer ${isShaking ? "shake" : ""}`}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`hiddenImg5 itemIdentifyer`}
                style={{ left: "32%", transform: "translateX(-32%)" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`hiddenImg5 itemIdentifyer`}
                style={{ right: "32%", transform: "translateX(32%)" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
            </div>
            {canCollect && (
              <div className="openDropCont appear">
                <button onClick={handleCollect} className="collectButton">
                  Collect
                </button>
              </div>
            )}
          </>
        )}
        {amountToOpen === 4 && (
          <>
            <div className="openDropCont">
              <img
                className={`openImg4 indentifyer ${isShaking ? "shake" : ""}`}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`hiddenImg5 itemIdentifyer`}
                style={{ left: "50%", transform: "translateX(-50%)" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
            </div>
            <div className="openDropCont">
              <img
                className={`openImg4 indentifyer ${isShaking ? "shake" : ""}`}
                src={itemID?.image}
                alt={itemID?.name}
                style={{ marginRight: "90px" }}
              />
              <img
                className={`openImg4 indentifyer ${isShaking ? "shake" : ""}`}
                src={itemID?.image}
                alt={itemID?.name}
                style={{ marginLeft: "90px" }}
              />
              <img
                className={`hiddenImg5 itemIdentifyer`}
                style={{ left: "25%", transform: "translateX(-25%)" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`hiddenImg5 itemIdentifyer`}
                style={{ right: "25%", transform: "translateX(25%)" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
            </div>
            <div className="openDropCont openBottom">
              <img
                className={`openImg4 indentifyer ${isShaking ? "shake" : ""}`}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`hiddenImg5 itemIdentifyer`}
                style={{ left: "50%", transform: "translateX(-50%)" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
            </div>
            {canCollect && (
              <div className="openDropCont appear">
                <button onClick={handleCollect} className="collectButton">
                  Collect
                </button>
              </div>
            )}
          </>
        )}
        {amountToOpen === 5 && (
          <>
            <div className="openDropCont">
              <img
                className={`openImg5 indentifyer ${isShaking ? "shake" : ""}`}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`hiddenImg5 itemIdentifyer`}
                style={{ left: "50%", transform: "translateX(-50%)" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
            </div>
            <div className="openDropCont">
              <img
                className={`openImg5 indentifyer ${isShaking ? "shake" : ""}`}
                style={{ left: "30%" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`openImg5 indentifyer ${isShaking ? "shake" : ""}`}
                style={{ right: "30%" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`hiddenImg5 itemIdentifyer`}
                style={{ left: "25%", transform: "translateX(-25%)" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`hiddenImg5 itemIdentifyer`}
                style={{ right: "25%", transform: "translateX(25%)" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
            </div>
            <div
              className="openDropCont openBottom"
              style={{ marginTop: "20px" }}
            >
              <img
                className={`openImg5 indentifyer ${isShaking ? "shake" : ""}`}
                style={{ left: "20%" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`openImg5 indentifyer ${isShaking ? "shake" : ""}`}
                style={{ right: "20%" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`hiddenImg5 itemIdentifyer`}
                style={{ left: "37%", transform: "translateX(-37%)" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
              <img
                className={`hiddenImg5 itemIdentifyer`}
                style={{ right: "37%", transform: "translateX(37%)" }}
                src={itemID?.image}
                alt={itemID?.name}
              />
            </div>
            {canCollect && (
              <div className="openDropCont appear">
                <button onClick={handleCollect} className="collectButton">
                  Collect
                </button>
              </div>
            )}
          </>
        )}
      </div>
    );
  };
  function findRarity() {
    const randomNumber = Math.round(Math.random() * 19);
    const hasTerrible =
      itemID?.artifacts[0].rarity === "Terrible" ? true : false;
    const hasGodly = itemID?.artifacts[19].rarity === "Godly" ? true : false;
    if (luck === 0) {
      if (randomNumber <= 7) {
        if (hasTerrible &&  randomNumber === 0) {
          return "Terrible";
        } else {
          return "Common";
        }
      }
      if (7 < randomNumber && randomNumber <= 13) {
        return "Uncommon";
      }
      if (13 < randomNumber && randomNumber <= 16) {
        return "Rare";
      }
      if (16 < randomNumber && randomNumber <= 18) {
        return "Unique";
      }
      if (18 < randomNumber) {
        if (hasGodly && randomNumber === 19) {
          return "Godly";
        } else {
          return "Mythic";
        }
      }
    }
    if (luck === 1) {
      if (randomNumber <= 5) {
        if (hasTerrible && randomNumber === 0) {
          return "Terrible";
        } else {
          return "Common";
        }
      }
      if (5 < randomNumber && randomNumber <= 12) {
        return "Uncommon";
      }
      if (12 < randomNumber && randomNumber <= 16) {
        return "Rare";
      }
      if (16 < randomNumber && randomNumber <= 18) {
        return "Unique";
      }
      if (18 < randomNumber) {
        if (hasGodly && randomNumber === 18) {
          return "Godly";
        } else {
          return "Mythic";
        }
      }
    }
    if (luck === 2) {
      if (randomNumber <= 4) {
        if (hasTerrible &&  randomNumber === 0) {
          return "Terrible";
        } else {
          return "Common";
        }
      }
      if (4 < randomNumber && randomNumber <= 10) {
        return "Uncommon";
      }
      if (10 < randomNumber && randomNumber <= 15) {
        return "Rare";
      }
      if (15 < randomNumber && randomNumber <= 18) {
        return "Unique";
      }
      if (18 < randomNumber) {
        if (hasGodly && randomNumber === 19) {
          return "Godly";
        } else {
          return "Mythic";
        }
      }
    }
    if (luck === 3) {
      if (randomNumber <= 4) {
        if (hasTerrible &&  randomNumber === 0) {
          return "Terrible";
        } else {
          return "Common";
        }
      }
      if (4 < randomNumber && randomNumber <= 9) {
        return "Uncommon";
      }
      if (9 < randomNumber && randomNumber <= 14) {
        return "Rare";
      }
      if (14 < randomNumber && randomNumber <= 17) {
        return "Unique";
      }
      if (17 < randomNumber) {
        if (hasGodly && randomNumber === 19) {
          return "Godly";
        } else {
          return "Mythic";
        }
      }
    }
    if (luck === 4) {
      if (randomNumber <= 3) {
        if (hasTerrible &&  randomNumber === 0) {
          return "Terrible";
        } else {
          return "Common";
        }
      }
      if (3 < randomNumber && randomNumber <= 6) {
        return "Uncommon";
      }
      if (6 < randomNumber && randomNumber <= 11) {
        return "Rare";
      }
      if (11 < randomNumber && randomNumber <= 15) {
        return "Unique";
      }
      if (15 < randomNumber) {
        if (hasGodly && randomNumber === 19) {
          return "Godly";
        } else {
          return "Mythic";
        }
      }
    }
  }
  function findRarityArtifact(rarity) {
    switch (rarity) {
      case "Terrible":
        return itemID?.artifacts[0];
        break;
      case "Common":
        const commonRandomNum = Math.round(Math.random() * 7)
        return itemID?.artifacts[commonRandomNum];
        break;
      case "Uncommon":
        const uncommonRandomNum = Math.round(Math.random() * (13 - 8) + 8)
        return itemID?.artifacts[uncommonRandomNum];
        break;
      case "Rare":
        const rareRandomNum = Math.round(Math.random() * (16 - 14) + 14)
        return itemID?.artifacts[rareRandomNum];
        break;
      case "Unique":
        const uniqueRandomNum = Math.round(Math.random() * (18 - 17) + 17)
        return itemID?.artifacts[uniqueRandomNum];
        break;
      case "Mythic":
        return itemID?.artifacts[19];
        break;
      case "Godly":
        return itemID?.artifacts[19];
        break;
    }
  }
  const generateNewArtifact = (amountToOpen, valueAfterDropReduced) => {
    let valueToAdd = 0;
    const switchRandom = document.querySelectorAll(".indentifyer");
    for (let i = 0; i < amountToOpen; i++) {
      setTimeout(
        ((i) => {
          return () => {
            const rarity = findRarity();
            const isCertified = Math.round(
              Math.random() * (certifiedMax - 1) + 1
            );
            const newArtifact = findRarityArtifact(rarity);
            const hiddenItem = document.querySelector(".itemIdentifyer");
            if (isCertified === 1) {
              newArtifact.value = newArtifact.value * 2;
              newArtifact.isCertified = true;
              hiddenItem.classList.add("certified");
            }
            valueToAdd += newArtifact.value;
            setOwnedArtifacts((prevOwnedArtifacts) => [
              ...prevOwnedArtifacts,
              { newArtifact },
            ]);
            switchRandom[i].classList.add("invisible");
            hiddenItem.setAttribute("src", newArtifact?.img);
            hiddenItem.setAttribute("alt", "Not Rendering");
            hiddenItem.style.visibility = "visible";
            hiddenItem.classList.replace(
              "itemIdentifyer",
              `${newArtifact?.rarity}Glow`
            );
            if (
              newArtifact?.rarity === "Mythical" ||
              newArtifact?.rarity === "Godly"
            ) {
              switch (itemID?.name) {
                case "Clay Sample":
                  setClayIsFound(true);
                  break;
                case "Stone Sample":
                  setStoneIsFound(true);
                  break;
                case "Ocean Rock Sample":
                  setOceanIsFound(true);
                  break;
                case "Quartz Sample":
                  setQuartzIsFound(true);
                  break;
                case "Crystal Sample":
                  setCrystalIsFound(true);
                  break;
                case "Obsidian Sample":
                  setObsidianIsFound(true);
                  break;
                case "Moon Rock Sample":
                  setMoonIsFound(true);
                  break;
                case "Meteor Sample":
                  setMeteorIsFound(true);
                  break;
                case "Alien Rock Sample":
                  setAlienIsFound(true);
                  break;
                case "Star Core Sample":
                  setStarIsFound(true);
                  break;
                case "Black Hole Sample":
                  setBlackIsFound(true);
                  break;
                case "Cosmic Energy Sample":
                  setCosmicIsFound(true);
                  break;
              }
            }
            const newTotalValue = Math.round(
              valueAfterDropReduced + valueToAdd
            );
            const newValueProgress =
              ((levelValue - newTotalValue) / levelValue) * 100;
            setTotalValue(newTotalValue);
            setValueProgress(newValueProgress);
            document.getElementById(
              "progressBar"
            ).style.width = `${newValueProgress}%`;
            if (i === amountToOpen - 1) {
              done = true;
              const collectButtons =
                document.querySelectorAll(".collectButton");
              for (let i = 0; i < collectButtons.length; i++) {
                collectButtons[i].classList.add("canPressCollect");
              }
            }
          };
        })(i),
        i * 100
      );
    }
  };
  const handleOpenSample = (amountToOpen) => {
    setOpenActiveItem(openScene(amountToOpen));
    setPage("openSample");
    setOwnedArtifacts((prevOwnedArtifacts) => {
      let count = amountToOpen;
      return prevOwnedArtifacts.filter((artifact) => {
        if (artifact.itemID?.name === itemID?.name && count > 0) {
          count--;
          return false; // Remove this item
        }
        return true; // Keep this item
      });
    });
    const newTotalValue = Math.round(totalValue - itemID?.price * amountToOpen);
    const newValueProgress = ((levelValue - newTotalValue) / levelValue) * 100;
    setTotalValue(newTotalValue);
    setValueProgress(newValueProgress);
    document.getElementById("progressBar").style.width = `${newValueProgress}%`;
    setTimeout(() => {
      setIsShaking(false);
      generateNewArtifact(amountToOpen, newTotalValue);
    }, 3000);
  };
  const handleOpen = () => {
    setActiveItem(
      createItemComponent(itemID?.image, itemID?.name, itemID?.artifacts)
    );
    setActivePage("itemMenu");
  };
  const calcSellValue = () => {
    if (itemID?.price) {
      return Math.floor(itemID?.price * 0.6);
    } else if (itemID?.value) {
      return itemID?.value;
    }
  };
  return (
    <div className={`artifact ${itemID?.price ? "normal" : itemID?.rarity}`}>
      <img src={sampleImg} alt={sampleName} />
      <h2>
        {itemID?.rarity === "Mythical" || itemID?.rarity === "Godly"
          ? `${itemID?.hiddenName} `
          : `${sampleName} `}
        {itemID?.isCertified ? (
          <i className="fa-solid fa-star" style={{ color: "yellow" }}></i>
        ) : (
          ""
        )}
      </h2>
      <div className="buttonCont">
        <button onClick={handleSell} className="sell">
          <h3>
            <i className="fa-solid fa-coins"></i> {`${calcSellValue()}`}
          </h3>
        </button>
        {itemID?.price && (
          <button onClick={handleOpen} className="open">
            <h3>Open</h3>
          </button>
        )}
      </div>
    </div>
  );
};

export default InventoryPage;
