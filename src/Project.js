import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactTinyLink } from 'react-tiny-link';
import './App.css';

const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: left;
	align-items: center;
	width: 100%;
	height: auto;
`;
const metascraper = require('metascraper')([
	require('metascraper-author')(),
	require('metascraper-date')(),
	require('metascraper-description')(),
	require('metascraper-image')(),
	require('metascraper-logo')(),
	require('metascraper-clearbit')(),
	require('metascraper-publisher')(),
	require('metascraper-title')(),
	require('metascraper-url')()
]);

const got = require('got');

const targetUrl =
	'http://www.bloomberg.com/news/articles/2016-05-24/as-zenefits-stumbles-gusto-goes-head-on-by-selling-insurance';
(async () => {
	const { body: html, url } = await got(targetUrl);
	const metadata = await metascraper({ html, url });
	console.log(metadata);
})();
function Project(props) {
	return (
		<Container>
			<ReactTinyLink
				style='width: 100%'
				cardSize='large'
				showGraphic={true}
				maxLine={2}
				minLine={1}
				url='https://kevinniemeyer.github.io/portfolio/'
			/>
		</Container>
	);
}

export default Project;
