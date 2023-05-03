import React, { useEffect, useState } from 'react';


import HomeHero from '../components/hero/home-hero';
import Footer from '../components/sections/footer/footer';
import PageGeneric from '../components/sections/page/page-generic';
import PageHoverImage from '../components/sections/page/page-hover-image';
import PageImageCols from '../components/sections/page/page-image-columns';
import PageIntro from '../components/sections/page/page-intro';
import PageLocation from '../components/sections/page/page-location';
import PageVGallery from '../components/sections/page/page-vertical-gallery';
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import { allHome } from '../utils/api';

const Index = () => {
	Splitting({ target: document.querySelector(['data-splitting']), by: 'chars', whitespace: true });
	ScrollOut({
		targets: '[data-splitting],.fadeinup',
		once: true
	});

	const [data, setData] = useState([]);
	useEffect(() => {
		const func = async () => {
			try {
				const res = await allHome();
				setData(res.acf);
			} catch (error) {
				console.log("ERROR DURING GET HOME DATA");
			}
		};
		func();
	}, []);
	useEffect(() => {
		if (typeof data !== "undefined") {
			if (Object.keys(data).length > 0) {
				const pageLists = Object.keys(data);
				console.log("pagelist", pageLists);
				console.log("data", data);
				const removedata = [];
				for (let i = 0; i < pageLists.length; i++) {
					if (pageLists[i] !== "fieldGroupName") {
						if (pageLists[i] !== "header_section") {
							if (pageLists[i] !== "timeline_section") {
								const ab = {
									id: pageLists[i],
									data: data[pageLists[i]],
								};
								removedata.push(ab);
							}
						}
					}
				}
			}
		}
	}, [data]);
	return (
		<>
			{data != undefined ? <>
				<HomeHero data={data} />
				<PageIntro data={data} />
				<PageImageCols data={data} />
				<PageHoverImage />
				<PageGeneric />
				<PageLocation />
				<PageVGallery />
				<Footer />
			</> : null}
		</>
	)
}

export default Index

export function Head() {
	return (
		<title>Verdala</title>
	)
}