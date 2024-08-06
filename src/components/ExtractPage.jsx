import { useEffect, useState } from "react";
const ExtractPage = ({ balance, setBalance }) => {
  const max = 0.3;
  const min = 0.05;
  const [randomMoney, setRandomMoney] = useState(0);

  function handleGemClick() {
    const newRandomMoney = Math.random() * (max - min) + min;
    setRandomMoney(newRandomMoney);
    setBalance((prevBalance) => {
      const newValue = prevBalance + newRandomMoney;
      const roundedValue = parseFloat(newValue.toFixed(2));
      return roundedValue;
    });
  }
  useEffect(() => {
    if (randomMoney !== 0) {
      const addedMoney = document.createElement("p");
      addedMoney.textContent = randomMoney.toFixed(2);
      addedMoney.classList.add("extractedMoney");
      addedMoney.style.left = `${Math.random() * (63 - 38) + 38}%`;
      addedMoney.style.top = `${Math.random() * (34 - 24) + 24}%`;
      document.querySelector(".extractPage").appendChild(addedMoney);
      addedMoney.classList.add("display");
      setTimeout(() => {
        document.querySelector(".extractedMoney").classList.remove("display");
        setTimeout(() => {
          document
            .querySelector(".extractPage")
            .removeChild(document.querySelector(".extractedMoney"));
        }, 150);
      }, 1000);
    }
  }, [randomMoney]);
  return (
    <div className="rightPage extractPage">
      <i className="fa-regular fa-gem" onClick={handleGemClick}></i>
    </div>
  );
};
export default ExtractPage;
