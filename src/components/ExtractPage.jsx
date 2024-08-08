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
      const currency = document.createElement('i');
      const container = document.createElement('div');
      addedMoney.textContent = randomMoney.toFixed(2);
      currency.classList.add('fa-solid', 'fa-coins');
      addedMoney.classList.add("extractedMoney");
      container.classList.add('extractedMoneyCont');
      container.style.left = `${Math.random() * (62 - 32) + 32}%`;
      container.style.top = `${Math.random() * (34 - 24) + 24}%`;
      document.querySelector(".extractPage").appendChild(container);
      container.appendChild(currency);
      container.appendChild(addedMoney);
      container.classList.add("display");
      setTimeout(() => {
        document.querySelector(".extractedMoneyCont").classList.remove("display");
        setTimeout(() => {
          document
            .querySelector(".extractPage")
            .removeChild(document.querySelector(".extractedMoneyCont"));
        }, 150);
      }, 1000);
    }
  }, [randomMoney]);
  return (
    <div className="rightPage extractPage">
      <i className="fa-regular fa-gem icon" onClick={handleGemClick}></i>
    </div>
  );
};
export default ExtractPage;
