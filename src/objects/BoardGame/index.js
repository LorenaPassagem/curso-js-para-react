import CardGame from "../../components/CardGame"

function BoardGame(a){
   const $htmlCardGame = CardGame()
   const $htmlBoardGame = $htmlCardGame.repeat(a)
  return $htmlBoardGame 
   
}
export default BoardGame