import React, { Component } from "react";
import fs from "fs";
import {
	render,
	Area,
	Box,
	Button,
	Form,
	Menu,
	TextInput,
	Text
} from "proton-native";

const columnWidth = num => 82/(num*2);

class Diagram extends Component {
	render(){
		return (
		<Area>
			<Area.Rectangle x="0" y="0" width="100%" height="100%" fill="white"/>
			<Area.Group strokeWidth="2" stroke="black" strokeLinecap="square">
				<Area.Line x1="8%" x2="90%" y1="95%" y2="95%"/>
				<Area.Line x1="8%" x2="8%" y1="10%" y2="95%"/>
			</Area.Group>
			<Area.Group>
				{(()=>{
					const x = [];
					const {num} = this.props;
					for(let i = 0; i < num; i++){
						const height1 = - Math.random() * 85;
						const height2 = - Math.random() * 85;
						x.push(
							<Area.Group key={i}>
								<Area.Rectangle fill="#3f51b5" x={`${8+columnWidth(num)*(2*i  )}%`}   y="94.8%" width={`${columnWidth(num)}%`} height={height1}/>
								<Area.Rectangle fill="grey" x={`${8+columnWidth(num)*(2*i+1)}%`}   y="94.8%" width={`${columnWidth(num)}%`} height={height2}/>
								{ (i < num - 1) && <Area.Line stroke="grey" x1={`${8+columnWidth(num)*(2*(i+1))}%`} x2={`${8+columnWidth(num)*(2*(i+1))}%`} y1="10%" y2="95%"/>}
							</Area.Group>
						);
					}
					return x;
				})()}
			</Area.Group>

		</Area>
		)
	}
}

class MainWin extends Component {
	render() {
		return (
			<Box padded>
				<Form padded stretchy={false}>
					<TextInput stretchy={false} label="Batterie Abschaltspannung"/>
					<TextInput stretchy={false} label="Wartezeit nach Sonnenuntergang"/>
					<TextInput stretchy={false} label="Grenzwert für Helligkeit"/>
					<Text stretchy={false} label="Bewässerungslängen:"/>
				</Form>
				<Box vertical={false} padded stretchy={false}>
					<Diagram num={4}/>
					<Diagram num={3}/>
				</Box>
				<Box vertical={false} padded stretchy={false}>
					<Button>Programmieren</Button>
					<Button>Auslesen</Button>
					<Button>Protokoll</Button>
				</Box>
			</Box>
		);
	}
}

export default MainWin;
