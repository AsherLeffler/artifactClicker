import ArtifactComponent from "./ArtifactComponent";
import dirt from "../assets/dirt.png";
import limestone from "../assets/limestone.png";
import oceanStone from "../assets/oceanStone.png";
import quartz from "../assets/quartz.png";
import crystal from "../assets/crystal.png";
import obsidian from "../assets/obsidian.png";
import moonRock from "../assets/moonRock.png";
import meteor from "../assets/meteor.png";
import alienRock from "../assets/alienRock.png";
import starCore from "../assets/starCore.png";
import blackHole from "../assets/blackHole.png";
import cosmicEnergy from "../assets/cosmicEnergy.png";
const ShopPage = ({ balance, setBalance, levelValue, totalValue, setTotalValue, setValueProgress, valueProgress}) => {
  const items = [
    {
      image: dirt,
      name: "Dirt Sample",
      price: 5,
    },
    {
      image: limestone,
      name: "Limestone Sample",
      price: 15,
    },
    {
      image: oceanStone,
      name: "Ocean Stone Sample",
      price: 50,
    },
    {
      image: quartz,
      name: "Quartz Sample",
      price: 120,
    },
    {
      image: crystal,
      name: "Crystal Sample",
      price: 300,
    },
    {
      image: obsidian,
      name: "Obsidian Sample",
      price: 1000,
    },
    {
      image: moonRock,
      name: "Moon Rock Sample",
      price: 10000,
    },
    {
      image: meteor,
      name: "Meteor Sample",
      price: 50000,
    },
    {
      image: alienRock,
      name: "Alien Rock Sample",
      price: 150000,
    },
    {
      image: starCore,
      name: "Star Core Sample",
      price: 500000,
    },
    {
      image: blackHole,
      name: "Black Hole Sample",
      price: 2500000,
    },
    {
      image: cosmicEnergy,
      name: "Cosmic Energy Sample",
      price: 30000000,
    },
  ];
  return (
    <div className="rightPage shopPage">
      <ArtifactComponent itemID={items[0]} balance={balance} setBalance={setBalance} levelValue={levelValue} totalValue={totalValue} setTotalValue={setTotalValue} setValueProgress={setValueProgress} valueProgress={valueProgress} />
      <ArtifactComponent itemID={items[1]} balance={balance} setBalance={setBalance} levelValue={levelValue} totalValue={totalValue} setTotalValue={setTotalValue} setValueProgress={setValueProgress} valueProgress={valueProgress}/>
      <ArtifactComponent itemID={items[2]} balance={balance} setBalance={setBalance} levelValue={levelValue} totalValue={totalValue} setTotalValue={setTotalValue} setValueProgress={setValueProgress} valueProgress={valueProgress}/>
      <ArtifactComponent itemID={items[3]} balance={balance} setBalance={setBalance} levelValue={levelValue} totalValue={totalValue} setTotalValue={setTotalValue} setValueProgress={setValueProgress} valueProgress={valueProgress}/>
      <ArtifactComponent itemID={items[4]} balance={balance} setBalance={setBalance} levelValue={levelValue} totalValue={totalValue} setTotalValue={setTotalValue} setValueProgress={setValueProgress} valueProgress={valueProgress}/>
      <ArtifactComponent itemID={items[5]} balance={balance} setBalance={setBalance} levelValue={levelValue} totalValue={totalValue} setTotalValue={setTotalValue} setValueProgress={setValueProgress} valueProgress={valueProgress}/>
      <ArtifactComponent itemID={items[6]} balance={balance} setBalance={setBalance} levelValue={levelValue} totalValue={totalValue} setTotalValue={setTotalValue} setValueProgress={setValueProgress} valueProgress={valueProgress}/>
      <ArtifactComponent itemID={items[7]} balance={balance} setBalance={setBalance} levelValue={levelValue} totalValue={totalValue} setTotalValue={setTotalValue} setValueProgress={setValueProgress} valueProgress={valueProgress}/>
      <ArtifactComponent itemID={items[8]} balance={balance} setBalance={setBalance} levelValue={levelValue} totalValue={totalValue} setTotalValue={setTotalValue} setValueProgress={setValueProgress} valueProgress={valueProgress}/>
      <ArtifactComponent itemID={items[9]} balance={balance} setBalance={setBalance} levelValue={levelValue} totalValue={totalValue} setTotalValue={setTotalValue} setValueProgress={setValueProgress} valueProgress={valueProgress}/>
      <ArtifactComponent itemID={items[10]} balance={balance} setBalance={setBalance} levelValue={levelValue} totalValue={totalValue} setTotalValue={setTotalValue} setValueProgress={setValueProgress} valueProgress={valueProgress}/>
      <ArtifactComponent itemID={items[11]} balance={balance} setBalance={setBalance} levelValue={levelValue} totalValue={totalValue} setTotalValue={setTotalValue} setValueProgress={setValueProgress} valueProgress={valueProgress}/>
    </div>
  );
};
export default ShopPage;
