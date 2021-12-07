import './style.css';

export function Box(props) {
	return (
		<div className="box">
			{props.children}
		</div>	
	);
}
