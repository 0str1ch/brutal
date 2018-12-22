export default ({
	center,
	vCenter,
	dark,
	gray,
	grid,
	wide,
	small,
	padding,
	overflow,
	minHeight,
	dotBackground,
	children,
	mobileStyle,
	...props
}) => (
	<section {...props}>
		<style jsx>
			{`
			{
				width: 100%;
				height: 500px;
				margin: 0 auto;
				padding: ${padding ? '0 0 2rem 0' : '0'};
				${wide && !small ? '' : 'max-width: 1440px;'}
				${grid ? 'display: grid;' : ''}
				${grid ? 'grid-template-columns: 1fr 1fr;' : ''}
				${grid ? 'grid-gap: 2rem;' : ''}
				${
					dark
						? 'background-image: linear-gradient(to bottom, #121212 0%, #323232 100%);'
						: ''
				}
				${dark ? 'color: #f1f1f1;' : ''}
				${gray ? 'background-color: #f6f6f6;' : ''}
				${wide && !overflow ? 'overflow: hidden;' : ''}
				${minHeight ? `min-height: ${minHeight}px;` : ''}
				${vCenter ? 'display: flex; align-items: center;' : ''}
				${
					dotBackground
						? `
					background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
					background-size: 28px 28px;
				`
						: ''
				}
			}

			// CSS only media query for tablet
			@media screen and (max-width: 960px) {
				section {
					padding: ${padding ? '0 0 2rem 0' : '0'};
				}
			}
			// CSS only media query for mobile
			@media screen and (max-width: 640px) {
				section {
					${mobileStyle || ''};
					${grid ? 'display: flex;' : ''}
					${grid ? 'flex-direction: column;' : ''}
				}
			}
		`}
		</style>
		{children}
	</section>
);
