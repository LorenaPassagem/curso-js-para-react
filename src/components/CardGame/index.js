import './style.css';

window.handleClick = () => {
    console.log('foi!');
}

function CardGame() {        
 return`
    <article onclick='handleClick()' class="card-game">
        <img src="./imagens/alura-pixel.png"
    </article>
 `;
}
export default CardGame
