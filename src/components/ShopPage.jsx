import ArtifactComponent from "./ArtifactComponent";
import clay from "../assets/clay.png";
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
import algae from "../assets/artifactImages/algae.png";
import americanFlag from "../assets/artifactImages/americanFlag.png";
import anchor from "../assets/artifactImages/anchor.png";
import ancientArrowhead from "../assets/artifactImages/ancientArrowhead.png";
import ancientMask from "../assets/artifactImages/ancientMask.png";
import ancientJewlery from "../assets/artifactImages/ancientJewlery.png";
import ancientMeteorWeapon from "../assets/artifactImages/ancientMeteorWeapon.png";
import ancientMoonCarving from "../assets/artifactImages/ancientMoonCarving.png";
import ancientStoneStatue from "../assets/artifactImages/ancientStoneStatue.png";
import astronautHelmet from "../assets/artifactImages/astronautHelmet.png";
import bathtub from "../assets/artifactImages/bathtub.png";
import brokenTotem from "../assets/artifactImages/brokenTotem.png";
import cannon from "../assets/artifactImages/cannon.png";
import ceramicTile from "../assets/artifactImages/ceramicTile.png";
import clayFigurine from "../assets/artifactImages/clayFigurine.png";
import coral from "../assets/artifactImages/coral.png";
import crystalBowl from "../assets/artifactImages/crystalBowl.png";
import crystalCandelabra from "../assets/artifactImages/crystalBowl.png";
import crystalCoaster from "../assets/artifactImages/crystalCoaster.png";
import crystalDecanter from "../assets/artifactImages/crystalDecanter.png";
import crystalFigurine from "../assets/artifactImages/crystalFigurine.png";
import crystalClock from "../assets/artifactImages/crystalClock.png";
import crystalJewleryBox from "../assets/artifactImages/crystalJewleryBox.png";
import crystalLamp from "../assets/artifactImages/crystalLamp.png";
import crystalMirror from "../assets/artifactImages/crystalMirror.png";
import crystalNecklace from "../assets/artifactImages/crystalNecklace.png";
import crystalPaperweight from "../assets/artifactImages/crystalPaperweight.png";
import crystalPlate from "../assets/artifactImages/crystalPlate.png";
import crystalPendant from "../assets/artifactImages/crystalPendant.png";
import crystalStatuette from "../assets/artifactImages/crystalStatuette.png";
import crystalTrophy from "../assets/artifactImages/crystalTrophy.png";
import crystalVase from "../assets/artifactImages/crystalVase.png";
import crystalGoblet from "../assets/artifactImages/crystalGoblet.png";
import diamondMeteorOre from "../assets/artifactImages/diamondMeteorOre.png";
import enchantedMeteorArmor from "../assets/artifactImages/enchantedMeteorArmor.png";
import engravedMeteorStone from "../assets/artifactImages/engravedMeteorStone.png";
import engravedSpaceRune from "../assets/artifactImages/engravedSpaceRune.png";
import floatingRock from "../assets/artifactImages/floatingRock.png";
import glowingWand from "../assets/artifactImages/glowingWand.png";
import gravitationalCore from "../assets/artifactImages/gravitationalCore.png";
import healingMeteorite from "../assets/artifactImages/healingMeteorite.png";
import illusionLense from "../assets/artifactImages/illusionLense.png";
import jar from "../assets/artifactImages/jar.png";
import lavaRock from "../assets/artifactImages/lavaRock.png";
import lifeCompass from "../assets/artifactImages/lifeCompass.png";
import maceHead from "../assets/artifactImages/maceHead.png";
import magicalOrb from "../assets/artifactImages/magicalOrb.png";
import memoryStone from "../assets/artifactImages/memoryStone.png";
import meteoriteMap from "../assets/artifactImages/meteoriteMap.png";
import meteoriteSoundstone from "../assets/artifactImages/meteoriteSoundstone.png";
import obsidianCrown from "../assets/artifactImages/obsidianCrown.png";
import obsidianMask from "../assets/artifactImages/obsidianMask.png";
import plasticContainer from "../assets/artifactImages/plasticContainer.png";
import potteryShard from "../assets/artifactImages/potteryShard.png";
import quartzRune from "../assets/artifactImages/quartzRune.png";
import stoneFireStarter from "../assets/artifactImages/stoneFireStarter.png";
import weaponBlade from "../assets/artifactImages/weaponBlade.png";
const ShopPage = ({
  balance,
  setBalance,
  levelValue,
  totalValue,
  setTotalValue,
  setValueProgress,
  valueProgress,
  ownedArtifacts,
  setOwnedArtifacts,
  clayIsFound,
  stoneIsFound,
  oceanIsFound,
  quartzIsFound,
  crystalIsFound,
  obsidianIsFound,
  moonIsFound,
  meteorIsFound,
  alienIsFound,
  starIsFound,
  blackIsFound,
  comsicIsFound
}) => {
  const items = [
    {
      image: clay,
      name: "Clay Sample",
      price: 5,
      artifacts: [
        {
          img: "/src/assets/artifactImages/rock.png",
          name: "Rock",
          value: 0.5,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/stick.png",
          name: "Stick",
          value: 1,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/crumpledPaper.png",
          name: "Crumpled Paper",
          value: 1.2,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/feather.png",
          name: "Feather",
          value: 1.4,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/clumpOfString.png",
          name: "Clump of String",
          value: 1.6,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/wornRope.png",
          name: "Worn Rope",
          value: 1.8,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/tornCloth.png",
          name: "Torn Cloth",
          value: 2,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/brokenHandle.png",
          name: "Broken Handle",
          value: 2.25,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/brick.png",
          name: "Brick",
          value: 2.5,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/wornDoll.png",
          name: "Worn Doll",
          value: 3,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/beads.png",
          name: "Beads",
          value: 4,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/woodTokens.png",
          name: "Wood Tokens",
          value: 4.5,
          rarity: "Uncommon",
        },
        { img: jar, name: "Jar", value: 5, rarity: "Uncommon" },
        {
          img: potteryShard,
          name: "Pottery Shard",
          value: 5.5,
          rarity: "Uncommon",
        },
        { img: clayFigurine, name: "Figurine", value: 6, rarity: "Rare" },
        {
          img: "/src/assets/artifactImages/brokenTool.png",
          name: "Broken Tool",
          value: 6.5,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/lamp.png",
          name: "Lamp",
          value: 7,
          rarity: "Rare",
        },
        {
          img: ancientArrowhead,
          name: "Ancient Arrowhead",
          value: 7.5,
          rarity: "Unique",
        },
        { img: ancientMask, name: "Ancient Mask", value: 8, rarity: "Unique" },
        {
          img: ancientJewlery,
          name: "???",
          hiddenName: "Ancient Jewlery",
          value: 20,
          rarity: "Mythical",
          isFound: clayIsFound,
        },
      ],
    },
    {
      image: limestone,
      name: "Stone Sample",
      price: 15,
      artifacts: [
        {
          img: plasticContainer,
          name: "Broken Container",
          value: 4,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/rustyNeedle.png",
          name: "Rusty Needle",
          value: 4.3,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/screw.png",
          name: "Old Screw",
          value: 5,
          rarity: "Common",
        },
        {
          img: brokenTotem,
          name: "Broken Totem",
          value: 5.4,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/oldShoe.png",
          name: "Old Shoe",
          value: 5.7,
          rarity: "Common",
        },
        {
          img: stoneFireStarter,
          name: "Stone Fire Starter",
          value: 6,
          rarity: "Common",
        },
        {
          img: ceramicTile,
          name: "Ceramic Tile",
          value: 6.5,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/stoneDice.png",
          name: "Stone Dice",
          value: 6.8,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/rustyWeight.png",
          name: "Rusty Weight",
          value: 7.5,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/stoneCarving.png",
          name: "Stone Carving",
          value: 8,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/pipe.png",
          name: "Old Pipe",
          value: 9,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/scissors.png",
          name: "Weathered Scissors",
          value: 9.5,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/pendant.png",
          name: "Pendant",
          value: 12,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/oldScroll.png",
          name: "Old Scroll",
          value: 13,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/weatheredShield.png",
          name: "Weathered Shield",
          value: 18,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/stonePlow.png",
          name: "Stone Plow",
          value: 20,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/goldCoins.png",
          name: "Gold Coins",
          value: 22,
          rarity: "Rare",
        },
        {
          img: weaponBlade,
          name: "Weapon Blade",
          value: 27.1,
          rarity: "Unique",
        },
        { img: maceHead, name: "Mace Head", value: 30, rarity: "Unique" },
        {
          img: "/src/assets/artifactImages/ancientStoneThrone.png",
          name: "???",
          hiddenName: "Ancient Stone Throne",
          value: 40,
          rarity: "Mythical",
          isFound: stoneIsFound,
        },
      ],
    },
    {
      image: oceanStone,
      name: "Ocean Rock Sample",
      price: 50,
      artifacts: [
        { img: algae, name: "Algae", value: 10, rarity: "Common" },
        {
          img: "/src/assets/artifactImages/seaGlass.png",
          name: "Sea Glass",
          value: 12,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/shell.png",
          name: "Shell",
          value: 13.6,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/sandDollar.png",
          name: "Sand Dollar",
          value: 14,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/fishingHook.png",
          name: "Rusty Fishing Hook",
          value: 14.1,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/wood.png",
          name: "Piece of Wood",
          value: 15,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/fabric.png",
          name: "Fabric",
          value: 16.8,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/woodCup.png",
          name: "Wood Cup",
          value: 17,
          rarity: "Common",
        },
        { img: coral, name: "Coral", value: 21, rarity: "Uncommon" },
        {
          img: "/src/assets/artifactImages/cannonball.png",
          name: "Old Cannonball",
          value: 24,
          rarity: "Uncommon",
        },
        { img: bathtub, name: "Old Bathtub", value: 32.4, rarity: "Uncommon" },
        {
          img: "/src/assets/artifactImages/wheel.png",
          name: "Wood Wheel",
          value: 36.7,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/table.png",
          name: "Table",
          value: 40,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/woodPole.png",
          name: "Wood Pole",
          value: 43.2,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/marineFossil.png",
          name: "Marine Fossil",
          value: 51.1,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/whaleBones.png",
          name: "Whale Bones",
          value: 58,
          rarity: "Rare",
        },
        { img: anchor, name: "Iron Anchor", value: 65, rarity: "Rare" },
        { img: cannon, name: "Cannon", value: 83.9, rarity: "Unique" },
        {
          img: ancientStoneStatue,
          name: "Ancient Statue",
          value: 98,
          rarity: "Unique",
        },
        {
          img: "/src/assets/artifactImages/treasureChest.png",
          name: "???",
          hiddenName: "Treasure Chest",
          value: 167.3,
          rarity: "Mythical",
          isFound: oceanIsFound,
        },
      ],
    },
    {
      image: quartz,
      name: "Quartz Sample",
      price: 120,
      artifacts: [
        {
          img: "/src/assets/artifactImages/uncutQuartz.png",
          name: "Uncut Quartz",
          value: 36,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/quartzDoorKnob.png",
          name: "Quartz Door Knob",
          value: 39.2,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/quartzCoaster.png",
          name: "Quartz Coaster",
          value: 43,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/quartzHammer.png",
          name: "Quartz Hammer",
          value: 45.3,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/quartzChessPiece.png",
          name: "Quartz Chess Piece",
          value: 48.9,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/quartzVase.png",
          name: "Quartz Vase",
          value: 50.8,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/quartzTile.png",
          name: "Quartz Tile",
          value: 53.2,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/quartzMagnifyingGlass.png",
          name: "Quartz Magnifying Glass",
          value: 58,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/quartzBowl.png",
          name: "Quartz Bowl",
          value: 62,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/quartzAmulet.png",
          name: "Quartz Amulet",
          value: 67.5,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/quartzLense.png",
          name: "Quartz Lense",
          value: 70.3,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/quartzPrism.png",
          name: "Quartz Prism",
          value: 77,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/quartzMedal.png",
          name: "Quartz Medal",
          value: 86.1,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/quartzWindChime.png",
          name: "Quartz Wind Chime",
          value: 94,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/quartzRing.png",
          name: "Polished Quartz Ring",
          value: 109,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/quartzMural.png",
          name: "Quartz Mural",
          value: 123,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/quartzBlade.png",
          name: "Quartz Knife",
          value: 131,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/quartzSculpture.png",
          name: "Quartz Dragon Sculpture",
          value: 148,
          rarity: "Unique",
        },
        {
          img: "/src/assets/artifactImages/quartzArmor.png",
          name: "Quartz Armor",
          value: 189.6,
          rarity: "Unique",
        },
        {
          img: quartzRune,
          name: "???",
          hiddenName: "Magical Quartz Rune",
          value: 283,
          rarity: "Mythical",
          isFound: quartzIsFound,
        },
      ],
    },
    {
      image: crystal,
      name: "Crystal Sample",
      price: 300,
      artifacts: [
        {
          img: crystalPlate,
          name: "Crystal Plate",
          value: 122,
          rarity: "Common",
        },
        {
          img: crystalLamp,
          name: "Crystal Lamp",
          value: 127.9,
          rarity: "Common",
        },
        {
          img: crystalBowl,
          name: "Crystal Bowl",
          value: 132,
          rarity: "Common",
        },
        {
          img: crystalFigurine,
          name: "Crystal Figurine",
          value: 139.4,
          rarity: "Common",
        },
        {
          img: crystalPaperweight,
          name: "Crystal Paperweight",
          value: 148,
          rarity: "Common",
        },
        {
          img: crystalCoaster,
          name: "Crystal Coaster",
          value: 151,
          rarity: "Common",
        },
        {
          img: crystalDecanter,
          name: "Crystal Decanter",
          value: 153.5,
          rarity: "Common",
        },
        {
          img: crystalVase,
          name: "Crystal Vase",
          value: 159.6,
          rarity: "Common",
        },
        {
          img: crystalTrophy,
          name: "Crystal Trophy",
          value: 164,
          rarity: "Uncommon",
        },
        {
          img: crystalMirror,
          name: "Crystal Mirror",
          value: 172.3,
          rarity: "Uncommon",
        },
        {
          img: crystalGoblet,
          name: "Crystal Goblet",
          value: 178.7,
          rarity: "Uncommon",
        },
        {
          img: crystalCandelabra,
          name: "Crystal Candelabra",
          value: 186,
          rarity: "Uncommon",
        },
        {
          img: crystalJewleryBox,
          name: "Crystal Jewelry Box",
          value: 190.1,
          rarity: "Uncommon",
        },
        {
          img: crystalPendant,
          name: "Crystal Pendant",
          value: 211,
          rarity: "Uncommon",
        },
        {
          img: crystalNecklace,
          name: "Crystal Necklace",
          value: 232,
          rarity: "Rare",
        },
        {
          img: crystalClock,
          name: "Crystal Clock",
          value: 267,
          rarity: "Rare",
        },
        {
          img: crystalStatuette,
          name: "Crystal Statuette",
          value: 289,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/lightCrystal.png",
          name: "Light Crystal",
          value: 384,
          rarity: "Unique",
        },
        {
          img: "/src/assets/artifactImages/shadowCrystal.png",
          name: "Shadow Crystal",
          value: 492,
          rarity: "Unique",
        },
        {
          img: "/src/assets/artifactImages/elementalCrystal.png",
          name: "???",
          hiddenName: "Elemental Crystal",
          value: 728,
          rarity: "Mythical",
          isFound: crystalIsFound,
        },
      ],
    },
    {
      image: obsidian,
      name: "Obsidian Sample",
      price: 1000,
      artifacts: [
        {
          img: "/src/assets/artifactImages/obsidianChip.png",
          name: "Obsidian Chip",
          value: 339,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/obsidianShard.png",
          name: "Obsidian Shard",
          value: 348,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/obsidianChalice.png",
          name: "Obsidian Chalice",
          value: 367,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/obsidianPebble.png",
          name: "Obsidian Pebble",
          value: 391,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/obsidianDust.png",
          name: "Obsidian Dust",
          value: 410,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/obsidianSliver.png",
          name: "Obsidian Sliver",
          value: 457,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/obsidianAmulet.png",
          name: "Obsidian Amulet",
          value: 481,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/obsidianShaft.png",
          name: "Obsidian Shaft",
          value: 499.9,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/obsidianBlock.png",
          name: "Obsidian Block",
          value: 520,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/obsidianTablet.png",
          name: "Obsidian Tablet",
          value: 584,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/obsidianSculpture.png",
          name: "Obsidian Sculpture",
          value: 621,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/obsidianHelm.png",
          name: "Obsidian Helm",
          value: 648,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/obsidianArtifact.png",
          name: "Obsidian Artifact",
          value: 710,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/obsidianObelisk.png",
          name: "Obsidian Obelisk",
          value: 732,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/obsidianSpear.png",
          name: "Obsidian Spear",
          value: 798,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/obsidianSword.png",
          name: "Obsidian Sword",
          value: 883,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/obsidianCage.png",
          name: "Obsidian Cage",
          value: 987,
          rarity: "Rare",
        },
        {
          img: obsidianMask,
          name: "Obsidian Mask",
          value: 1395,
          rarity: "Unique",
        },
        {
          img: obsidianCrown,
          name: "Obsidian Crown",
          value: 1834,
          rarity: "Unique",
        },
        {
          img: "/src/assets/artifactImages/obsidianPortal.png",
          name: "???",
          hiddenName: "Obsidian Portal",
          value: 3586,
          rarity: "Mythical",
          isFound: obsidianIsFound,
        },
      ],
    },
    {
      image: moonRock,
      name: "Moon Rock Sample",
      price: 10000,
      artifacts: [
        {
          img: "/src/assets/artifactImages/penny.png",
          name: "Penny",
          value: 0.01,
          rarity: "Terrible",
        },
        {
          img: floatingRock,
          name: "Floating Rock",
          value: 1520,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/moonDust.png",
          name: "Moon Dust",
          value: 1642,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/spaceDebris.png",
          name: "Space Debris",
          value: 1785,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/manholeCover.png",
          name: "Manhole Cover",
          value: 2093,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/moonTimeCapsule.png",
          name: "Time Capsule",
          value: 2159,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/antenna.png",
          name: "Antenna",
          value: 2228,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/solarPanel.png",
          name: "Solar Panel",
          value: 2482,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/rocketFuel.png",
          name: "Rocket Fuel",
          value: 2674,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/robotRover.png",
          name: "Robot Rover",
          value: 3110,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/telescope.png",
          name: "Telescope",
          value: 3829,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/plaque.png",
          name: "Plaque",
          value: 4341,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/smallMeteorite.png",
          name: "Small Meteorite",
          value: 4894,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/miniatureCrater.png",
          name: "Miniature Crater",
          value: 5126,
          rarity: "Uncommon",
        },
        {
          img: astronautHelmet,
          name: "Astronaut Helmet",
          value: 7290,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/greenScreen.jpg",
          name: "Green Screen",
          value: 8380,
          rarity: "Rare",
        },
        {
          img: ancientMoonCarving,
          name: "Ancient Carving",
          value: 11290,
          rarity: "Rare",
        },
        {
          img: americanFlag,
          name: "American Flag",
          value: 15855,
          rarity: "Unique",
        },
        {
          img: engravedSpaceRune,
          name: "Engraved Space Rune",
          value: 28100,
          rarity: "Unique",
        },
        {
          img: gravitationalCore,
          name: "???",
          hiddenName: "Gravitational Core",
          value: 75000,
          rarity: "Mythical",
          isFound: moonIsFound,
        },
      ],
    },
    {
      image: meteor,
      name: "Meteor Sample",
      price: 50000,
      artifacts: [
        { img: lavaRock, name: "Lava Rock", value: 11342, rarity: "Common" },
        {
          img: "/src/assets/artifactImages/meteorPebble.png",
          name: "Meteor Pebble",
          value: 12903,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/meteoriteCrystalShard.png",
          name: "Meteorite Crystal Shard",
          value: 14785,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/meteoriteInk.png",
          name: "Meteorite Ink",
          value: 15282,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/meteorBell.png",
          name: "Meteor Bell",
          value: 17191,
          rarity: "Common",
        },
        {
          img: engravedMeteorStone,
          name: "Engraved Meteor Stone",
          value: 18700,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/meteorRing.png",
          name: "Meteor Ring",
          value: 21014,
          rarity: "Common",
        },
        {
          img: meteoriteSoundstone,
          name: "Meteorite Soundstone",
          value: 25550,
          rarity: "Common",
        },
        {
          img: lifeCompass,
          name: "Life Compass",
          value: 27401,
          rarity: "Uncommon",
        },
        {
          img: glowingWand,
          name: "Glowing Wand",
          value: 29813,
          rarity: "Uncommon",
        },
        {
          img: illusionLense,
          name: "Illusion Lense",
          value: 31565,
          rarity: "Uncommon",
        },
        {
          img: memoryStone,
          name: "Memory Stone",
          value: 35080,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/meteoriteJewlery.png",
          name: "Meteorite Jewlery",
          value: 38200,
          rarity: "Uncommon",
        },
        {
          img: meteoriteMap,
          name: "Meteor Chunk",
          value: 41982,
          rarity: "Uncommon",
        },
        {
          img: diamondMeteorOre,
          name: "Diamond Meteor Ore",
          value: 43123,
          rarity: "Rare",
        },
        {
          img: healingMeteorite,
          name: "Healing Meteorite",
          value: 48905,
          rarity: "Rare",
        },
        { img: magicalOrb, name: "Magical Orb", value: 52671, rarity: "Rare" },
        {
          img: ancientMeteorWeapon,
          name: "Ancient Meteor Weapon",
          value: 80496,
          rarity: "Unique",
        },
        {
          img: enchantedMeteorArmor,
          name: "Enchanted Meteor Armor",
          value: 98754,
          rarity: "Unique",
        },
        {
          img: "/src/assets/artifactImages/meteorPowerCore.png",
          name: "???",
          hiddenName: "Meteor Power Core",
          value: 148380,
          rarity: "Mythical",
          isFound: meteorIsFound,
        },
      ],
    },
    {
      image: alienRock,
      name: "Alien Rock Sample",
      price: 150000,
      artifacts: [
        {
          img: "/src/assets/artifactImages/water.png",
          name: "Water",
          value: 0.5,
          rarity: "Terrible",
        },
        {
          img: "/src/assets/artifactImages/alienRations.png",
          name: "Alien Rations",
          value: 52100,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/alienTrash.png",
          name: "Alien Trash",
          value: 55800,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/alienShoes.png",
          name: "Alien Shoes",
          value: 61900,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/alienClothing.png",
          name: "Alien Clothing",
          value: 64012,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/breathingDevice.png",
          name: "Enhanced Breathing Device",
          value: 67792,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/alienOre.png",
          name: "Alien Ore",
          value: 70120,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/alienBlueprints.png",
          name: "Alien Blueprints",
          value: 73231,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/alienBook.png",
          name: "Alien Book",
          value: 78009,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/performanceSubstances.png",
          name: "Performance Substances",
          value: 82190,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/visionRepairDevice.png",
          name: "Vision Repair Device",
          value: 83111,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/hoverDevice.png",
          name: "Hover Device",
          value: 91300,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/alienPhone.png",
          name: "Alien Phone",
          value: 98204,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/languageTranslator.png",
          name: "Language Translator",
          value: 111370,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/transportShip.png",
          name: "Transport Ship",
          value: 142300,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/perpetualMotionMachine.png",
          name: "Perpetual Motion Machine",
          value: 152842,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/instantHealingDevice.png",
          name: "Instant Healing Device",
          value: 163908,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/alienEnergyCore.png",
          name: "Alien Energy Core",
          value: 213600,
          rarity: "Unique",
        },
        {
          img: "/src/assets/artifactImages/alienBlaster.png",
          name: "Alien Blaster",
          value: 283070,
          rarity: "Unique",
        },
        {
          img: "/src/assets/artifactImages/teleportationDevice.png",
          name: "???",
          hiddenName: "Teleportation Device",
          value: 501020,
          rarity: "Mythical",
          isFound: alienIsFound,
        },
      ],
    },
    {
      image: starCore,
      name: "Star Core Sample",
      price: 500000,
      artifacts: [
        {
          img: "/src/assets/artifactImages/starPlasma.png",
          name: "Star Plasma",
          value: 120300,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/starGem.png",
          name: "Star Gem",
          value: 128900,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/starEnergy.png",
          name: "Solar Energy",
          value: 135809,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/condensedSolarFlare.png",
          name: "Condensed Solar Flare",
          value: 156702,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/solarEmber.png",
          name: "Solar Ember",
          value: 165000,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/starCoreSpark.png",
          name: "Core Spark",
          value: 172300,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/starPrism.png",
          name: "Star Prism",
          value: 193403,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/starGas.png",
          name: "Condensed Star Gas",
          value: 204800,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/starMetal.png",
          name: "Star Metal",
          value: 218080,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/solarFragment.png",
          name: "Solar Fragment",
          value: 233000,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/starAmulet.png",
          name: "Star Amulet",
          value: 258900,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/solarInfusedFlask.png",
          name: "Solar Infused Flask",
          value: 278190,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/starCoreShard.jpg",
          name: "Core Shard",
          value: 304899,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/solarGlove.png",
          name: "Solar Glove",
          value: 352888,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/starBlade.png",
          name: "Star Blade",
          value: 438009,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/solarBeacon.png",
          name: "Solar Beacon",
          value: 508042,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/heatOrb.png",
          name: "Heat Orb",
          value: 580237,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/starArmor.png",
          name: "Star Armor",
          value: 823900,
          rarity: "Unique",
        },
        {
          img: "/src/assets/artifactImages/nebulaOrb.png",
          name: "Nebula Orb",
          value: 1207560,
          rarity: "Unique",
        },
        {
          img: "/src/assets/artifactImages/celestialCore.png",
          name: "???",
          hiddenName: "Celestial Core",
          value: 1623023,
          rarity: "Mythical",
          isFound: starIsFound,
        },
      ],
    },
    {
      image: blackHole,
      name: "Black Hole Sample",
      price: 2500000,
      artifacts: [
        {
          img: "/src/assets/artifactImages/blackHoleDebris.png",
          name: "Debris",
          value: 250,
          rarity: "Terrible",
        },
        {
          img: "/src/assets/artifactImages/swallowedRefridgerator.png",
          name: "Swallowed Refridgerator",
          value: 520000,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/darkMatterBoulder.png",
          name: "Dark Matter Boulder",
          value: 547000,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/swallowedSatellite.png",
          name: "Swallowed Satellite",
          value: 639000,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/quantumCrystal.png",
          name: "Quantum Crystal",
          value: 683421,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/voidPearl.png",
          name: "Void Pearl",
          value: 730023,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/gravitonCoil.png",
          name: "Graviton Coil",
          value: 894320,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/dimensionalRelic.png",
          name: "Dimensional Relic",
          value: 1055550,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/energyVortex.jpg",
          name: "Energy Vortex",
          value: 1473283,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/blackholeTimeCapsule.png",
          name: "Time Capsule",
          value: 1512834,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/stellarRemnants.png",
          name: "Stellar Remnants",
          value: 1643282,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/astronaut.png",
          name: "Stuck Astronaut",
          value: 1723489,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/ancientCar.png",
          name: "Ancient Car",
          value: 1883209,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/alienHome.png",
          name: "Alien Home",
          value: 1923040,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/swallowedShip.png",
          name: "Swallowed Ship",
          value: 2254501,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/swallowedMeteorite.png",
          name: "Swallowed Meteorite",
          value: 2630210,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/swallowedPlanet.png",
          name: "Swallowed Planet",
          value: 2834234,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/swallowedStar.png",
          name: "Swallowed Star",
          value: 3400328,
          rarity: "Unique",
        },
        {
          img: "/src/assets/artifactImages/darkEnergyManipulator.png",
          name: "Dark Energy Manipulator",
          value: 4546871,
          rarity: "Unique",
        },
        {
          img: "/src/assets/artifactImages/vileOfAntimatter.png",
          name: "???",
          hiddenName: "Vile of Anti-Matter",
          value: 8354000,
          rarity: "Mythical",
          isFound: blackIsFound,
        },
      ],
    },
    {
      image: cosmicEnergy,
      name: "Cosmic Energy Sample",
      price: 30000000,
      artifacts: [
        {
          img: "/src/assets/artifactImages/cosmicDust.png",
          name: "Cosmic Dust",
          value: 8435730,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/timeShard.png",
          name: "Time Shard",
          value: 9457863,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/gravityWave.png",
          name: "Gravity Wave",
          value: 1137420,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/spectralPrism.png",
          name: "Spectral Prism",
          value: 1247253,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/aetherPulse.png",
          name: "Aether Pulse",
          value: 13278564,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/lightParticle.png",
          name: "Lightwave Particle",
          value: 14000000.01,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/novaFragment.jpg",
          name: "Nova Fragment",
          value: 15128459,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/nebularEcho.png",
          name: "Nebular Echo",
          value: 16290743,
          rarity: "Common",
        },
        {
          img: "/src/assets/artifactImages/darkMatterCore.png",
          name: "Dark Matter Core",
          value: 16725464,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/cosmicGauntlet.png",
          name: "Cosmic Gauntlet",
          value: 17502396,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/antimatterFlare.png",
          name: "Antimatter Flare",
          value: 18342656,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/cosmicNode.jpg",
          name: "Cosmic Node",
          value: 19826572,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/celestialMirror.png",
          name: "Celestial Mirror",
          value: 20370245,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/wormhole.png",
          name: "Wormhole",
          value: 23383874,
          rarity: "Uncommon",
        },
        {
          img: "/src/assets/artifactImages/astralWeb.png",
          name: "Astral Web",
          value: 26234925,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/dimensionalPortal.jpg",
          name: "Dimensional Portal",
          value: 30121434,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/eternalFlame.png",
          name: "Eternal Flame",
          value: 34586547,
          rarity: "Rare",
        },
        {
          img: "/src/assets/artifactImages/galacticCrown.png",
          name: "Galactic Crown",
          value: 58234872,
          rarity: "Unique",
        },
        {
          img: "/src/assets/artifactImages/creationOrb.png",
          name: "Creation Orb",
          value: 69398245,
          rarity: "Unique",
        },
        {
          img: "/src/assets/artifactImages/timeItself.png",
          name: "???",
          hiddenName: "Time Itself",
          value: 140201078,
          rarity: "Godly",
          isFound: comsicIsFound,
        },
      ],
    },
  ];
  return (
    <div className="rightPage shopPage">
      <ArtifactComponent
        itemID={items[0]}
        balance={balance}
        setBalance={setBalance}
        levelValue={levelValue}
        totalValue={totalValue}
        setTotalValue={setTotalValue}
        setValueProgress={setValueProgress}
        valueProgress={valueProgress}
        ownedArtifacts={ownedArtifacts}
        setOwnedArtifacts={setOwnedArtifacts}
      />
      <ArtifactComponent
        itemID={items[1]}
        balance={balance}
        setBalance={setBalance}
        levelValue={levelValue}
        totalValue={totalValue}
        setTotalValue={setTotalValue}
        setValueProgress={setValueProgress}
        valueProgress={valueProgress}
        ownedArtifacts={ownedArtifacts}
        setOwnedArtifacts={setOwnedArtifacts}
      />
      <ArtifactComponent
        itemID={items[2]}
        balance={balance}
        setBalance={setBalance}
        levelValue={levelValue}
        totalValue={totalValue}
        setTotalValue={setTotalValue}
        setValueProgress={setValueProgress}
        valueProgress={valueProgress}
        ownedArtifacts={ownedArtifacts}
        setOwnedArtifacts={setOwnedArtifacts}
      />
      <ArtifactComponent
        itemID={items[3]}
        balance={balance}
        setBalance={setBalance}
        levelValue={levelValue}
        totalValue={totalValue}
        setTotalValue={setTotalValue}
        setValueProgress={setValueProgress}
        valueProgress={valueProgress}
        ownedArtifacts={ownedArtifacts}
        setOwnedArtifacts={setOwnedArtifacts}
      />
      <ArtifactComponent
        itemID={items[4]}
        balance={balance}
        setBalance={setBalance}
        levelValue={levelValue}
        totalValue={totalValue}
        setTotalValue={setTotalValue}
        setValueProgress={setValueProgress}
        valueProgress={valueProgress}
        ownedArtifacts={ownedArtifacts}
        setOwnedArtifacts={setOwnedArtifacts}
      />
      <ArtifactComponent
        itemID={items[5]}
        balance={balance}
        setBalance={setBalance}
        levelValue={levelValue}
        totalValue={totalValue}
        setTotalValue={setTotalValue}
        setValueProgress={setValueProgress}
        valueProgress={valueProgress}
        ownedArtifacts={ownedArtifacts}
        setOwnedArtifacts={setOwnedArtifacts}
      />
      <ArtifactComponent
        itemID={items[6]}
        balance={balance}
        setBalance={setBalance}
        levelValue={levelValue}
        totalValue={totalValue}
        setTotalValue={setTotalValue}
        setValueProgress={setValueProgress}
        valueProgress={valueProgress}
        ownedArtifacts={ownedArtifacts}
        setOwnedArtifacts={setOwnedArtifacts}
      />
      <ArtifactComponent
        itemID={items[7]}
        balance={balance}
        setBalance={setBalance}
        levelValue={levelValue}
        totalValue={totalValue}
        setTotalValue={setTotalValue}
        setValueProgress={setValueProgress}
        valueProgress={valueProgress}
        ownedArtifacts={ownedArtifacts}
        setOwnedArtifacts={setOwnedArtifacts}
      />
      <ArtifactComponent
        itemID={items[8]}
        balance={balance}
        setBalance={setBalance}
        levelValue={levelValue}
        totalValue={totalValue}
        setTotalValue={setTotalValue}
        setValueProgress={setValueProgress}
        valueProgress={valueProgress}
        ownedArtifacts={ownedArtifacts}
        setOwnedArtifacts={setOwnedArtifacts}
      />
      <ArtifactComponent
        itemID={items[9]}
        balance={balance}
        setBalance={setBalance}
        levelValue={levelValue}
        totalValue={totalValue}
        setTotalValue={setTotalValue}
        setValueProgress={setValueProgress}
        valueProgress={valueProgress}
        ownedArtifacts={ownedArtifacts}
        setOwnedArtifacts={setOwnedArtifacts}
      />
      <ArtifactComponent
        itemID={items[10]}
        balance={balance}
        setBalance={setBalance}
        levelValue={levelValue}
        totalValue={totalValue}
        setTotalValue={setTotalValue}
        setValueProgress={setValueProgress}
        valueProgress={valueProgress}
        ownedArtifacts={ownedArtifacts}
        setOwnedArtifacts={setOwnedArtifacts}
      />
      <ArtifactComponent
        itemID={items[11]}
        balance={balance}
        setBalance={setBalance}
        levelValue={levelValue}
        totalValue={totalValue}
        setTotalValue={setTotalValue}
        setValueProgress={setValueProgress}
        valueProgress={valueProgress}
        ownedArtifacts={ownedArtifacts}
        setOwnedArtifacts={setOwnedArtifacts}
      />
    </div>
  );
};
export default ShopPage;
