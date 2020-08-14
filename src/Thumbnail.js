import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

const Thumb = styled.img`
	width: ${(props) => props.width};
	padding: ${(props) => props.padding};
`;

function Thumbnail(props) {
	return (
		<div className='project'>
			<Link to={props.link}>
				<div className='project-image'>
					<Thumb src={props.link} alt='Project Image' width={props.width} padding={props.padding} />
				</div>
				<div className='project-title'>{props.title}</div>
				<div className='project-category'>{props.category}</div>
			</Link>
		</div>
	);
}

export default Thumbnail;
