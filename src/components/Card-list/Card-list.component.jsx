
import Card from "./Card.component";
import './Card-list.styles.css'


const CardList = ({ monsters }) => (
		<div className="card-list">
			{monsters.map((monster) => {
				return (
					<Card monster={monster}/>
				)
			})}
		</div>
	)



export default CardList; 
