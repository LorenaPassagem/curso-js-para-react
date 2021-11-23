import Player from "./src/components/Player";
import BoardGame from "./src/objects/BoardGame";

import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';
import './src/styles/generic/reset.css';


const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6)
const $htmlPlayer = Player(1)

$root.insertAdjacentHTML("afterbegin", $htmlBoardGame)
$root.insertAdjacentHTML("afterbegin", $htmlPlayer)

//$root.addEventListener("click", ()=>{
   // $htmlCardGame
//})
