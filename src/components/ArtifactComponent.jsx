import check from "../assets/check.png";
const ArtifactComponent = ({
  itemID,
  balance,
  setBalance,
  levelValue,
  totalValue,
  setTotalValue,
  setValueProgress,
  valueProgress,
  ownedArtifacts,
  setOwnedArtifacts
}) => {
  function handleValueChange(sampleValue) {
    const newTotalValue = Math.round(totalValue + sampleValue);
    const newValueProgress = ((levelValue - newTotalValue) / levelValue) * 100;

    setTotalValue(newTotalValue);
    setValueProgress(newValueProgress);
    document.getElementById("progressBar").style.width = `${newValueProgress}%`;
  }
  const addOwnedArtifact = () => {
    itemID.identifyer = ownedArtifacts.length + 1;
    setOwnedArtifacts((prevOwnedArtifacts) => [
      ...prevOwnedArtifacts,
      { itemID },
    ]);
  };
  function handleBuy() {
    if (balance >= itemID.price) {
      setBalance((prevBalance) => prevBalance - itemID.price);
      document.getElementById(itemID.name).setAttribute("src", check);
      addOwnedArtifact();
      setTimeout(() => {
        document.getElementById(itemID.name).setAttribute("src", itemID.image);
      }, 100);
      handleValueChange(itemID.price);
    }
  }
  return (
    <div className="artifact normal">
      <img src={itemID.image} alt={itemID.name} id={itemID.name} />
      <h2>{itemID.name}</h2>
      <button
        onClick={handleBuy}
        className={balance >= itemID.price ? "canBuy" : "cannotBuy"}
      >
        <h3>
          <i className="fa-solid fa-coins"></i> {itemID.price}
        </h3>
      </button>
    </div>
  );
};
export default ArtifactComponent;
