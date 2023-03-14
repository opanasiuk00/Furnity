	export const handleScroll = (id: string) => {
		window.scrollTo({
			top: document.getElementById(id)!.offsetTop,
			behavior: 'smooth'
		});
	};