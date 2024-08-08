import { useState, useRef } from "react";
import heads from "../assets/coinFlip.png";
import tails from "../assets/tails.png";
import roulette from "../assets/roulette.png";
import slots from "../assets/slots.png";

const BettingPage = ({ setBalance, balance }) => {
  const [activeGame, setActiveGame] = useState(null);
  const [rotationClass, setRotationClass] = useState("");
  const [coinKey, setCoinKey] = useState(0);
  const betInputRef = useRef(null);
  const selectRef = useRef(null);

  const displayGame = (game) => {
    setActiveGame(game);
  };

  const flipTheCoin = (amountBet) => {
    const headsOrTails = Math.random() < 0.5 ? "heads" : "tails";
    const resultClass = headsOrTails === "heads" ? "flipped-heads" : "flipped-tails";

    setRotationClass(resultClass);
    setCoinKey(prevKey => prevKey + 1);
    if (headsOrTails === selectRef.current.value) {
      setBalance(prevBalance => prevBalance + amountBet * 2);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const amountBet = parseFloat(betInputRef.current.value);
      if (!amountBet || amountBet <= 0) {
        window.alert("Please enter a valid amount greater than 0");
      } else if (balance >= amountBet) {
        setBalance(prevBalance => prevBalance - amountBet);
        betInputRef.current.value = "";
        flipTheCoin(amountBet);
      } else {
        window.alert("Not enough balance");
      }
    }
  };

  return (
    <div className="rightPage bettingPage">
      {activeGame === "coin" && (
        <div className="coinDiv">
          <div className="coin-container">
            <div key={coinKey} className={`coin ${rotationClass}`}>
              <img src={heads} alt="Heads" className="heads" />
              <img src={tails} alt="Tails" className="tails" />
            </div>
          </div>
          <input
            type="number"
            onKeyDown={handleKeyDown}
            placeholder="Amount"
            ref={betInputRef}
          />
          <select ref={selectRef} onKeyDown={handleKeyDown}>
            <option value="heads">heads</option>
            <option value="tails">tails</option>
          </select>
          <button onClick={() => displayGame(null)}>Exit</button>
        </div>
      )}
      {activeGame === "roulette" && <div className="rouletteDiv"></div>}
      {activeGame === "slots" && <div className="slotsDiv"></div>}
      {activeGame === null && (
        <div className="bettingCont">
          <div className="betGameContTop">
            <img src={heads} alt="Coin Flip Image" onClick={() => displayGame("coin")} />
            <button onClick={() => displayGame("coin")}>
              <h1>Coin Flip</h1>
            </button>
          </div>
          <hr />
          <div className="betGameCont">
            <img src={roulette} alt="Roulette Image" onClick={() => displayGame("roulette")} />
            <button onClick={() => displayGame("roulette")}>
              <h1>Roulette</h1>
            </button>
          </div>
          <hr />
          <div className="betGameContBottom">
            <img src={slots} alt="Slots Image" onClick={() => displayGame("slots")} />
            <button onClick={() => displayGame("slots")}>
              <h1>Slots</h1>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BettingPage;
