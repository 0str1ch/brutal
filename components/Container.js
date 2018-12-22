export default ({
	col_1,
	col_2,
	col_2_1,
	row_1,
	grid,
	center,
	vCenter,
	dark,
	gray,
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
	<section className="grid-container" {...props}>
		<style jsx>
			{`
        section {
          width: 100%;
          margin: 0 auto;
					display: ${grid ? "grid" : ""};
          grid-template-columns: ${col_1 ? "1fr" : ""} ${col_2 ? "1fr 1fr" : ""} ${col_2_1 ? "2fr 1fr" : ""};
					grid-template-rows: ${row_1 ? "1fr" : "auto"};
					${row_1 ? "border-bottom: 4px solid #000;" : ""}
          ${wide && !small ? "" : "max-width: 100%;"}
          ${small ? "max-width: 700px;" : ""}
          ${center ? "text-align: center;" : ""}
          ${
						dark
							? "background-image: linear-gradient(to bottom, #121212 0%, #323232 100%);"
							: ""
					}
          ${dark ? "color: #f1f1f1;" : ""}
          ${gray ? "background-color: #f6f6f6;" : ""}
          ${wide && !overflow ? "overflow: hidden;" : ""}
          ${minHeight ? `min-height: ${minHeight}px;` : ""}
          ${vCenter ? "display: flex; align-items: center;" : ""}
          ${
						dotBackground
							? `
            background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
            background-size: 28px 28px;
          `
							: ""
					}
        }

				${col_2_1 ? "section > div:first-of-type {border-right: 4px solid #000;}" : ""}

				section ~ div {
					padding: 1rem;
				}


        :after {
          content: '';
          display: table;
          clear: both;
        }

        @media screen and (max-width: 960px) {
          section {
            padding: ${padding ? "0rem" : "0"} ${wide ? "0" : "0rem"};
						display: flex;
						flex-direction: column;
          }
        }

        @media screen and (max-width: 640px) {
          section {
            padding: ${padding ? "0rem" : "0"} ${wide ? "0" : "0rem"};
          }
				}


      `}
		</style>
		{children}
	</section>
);
