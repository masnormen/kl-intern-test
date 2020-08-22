import {useEffect, useState} from "react";
import Head from "next/head";
import Dropdown from "../components/Dropdown";
import Label from "../components/Label";
import {choose, type, title} from "../components/Data";

const Home = () => {
	const [value1, setValue1] = useState(null);
	const [value2, setValue2] = useState(null);
	const [value3, setValue3] = useState(null);
	
	useEffect(() => {
		setValue3(null);
	}, [value2]);
	
	useEffect(() => {
		setValue2(null);
	}, [value1]);
	
	return (
		<>
			<Head>
				<title>KitaLulus Intern Test - Nourman Hajar</title>
			</Head>
			<div style={{maxWidth: "400px", margin: "70px auto"}}>
				<h1>KitaLulus Intern Test</h1>
				
				<Label>CHOOSE</Label>
				<Dropdown
					value={value1}
					onChange={setValue1}
					options={choose}
				/>
				
				{value1 !== null && (
					<>
						<Label>TYPE</Label>
						<Dropdown
							value={value2}
							onChange={setValue2}
							options={type.filter(x => x.parent === value1.id)}
						/>
					</>
				)}
				
				{value2 !== null && (
					<>
						<Label>TITLE</Label>
						<Dropdown
							value={value3}
							onChange={setValue3}
							options={title.filter(x => x.parent === value2.id)}
						/>
					</>
				)}
				
				<div style={{marginTop: "30px"}}>
					{value1 !== null && <>
						<Label>value1:</Label>
						{JSON.stringify(value1)}
					</>}
					{value2 !== null && <>
						<Label>value2:</Label>
						{JSON.stringify(value2)}
					</>}
					{value3 !== null && <>
						<Label>value3:</Label>
						{JSON.stringify(value3)}
					</>}
				</div>
			</div>
			
			<h4>&copy; 2020</h4>
		</>
	)
}

export default Home;
