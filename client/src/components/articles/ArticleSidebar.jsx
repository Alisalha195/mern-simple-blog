
import ArticleSidebarCard from "./ArticleSidebarCard"

const ArticleSidebar = () => {
	
	const windowHeight = window.innerHeight;
	console.log(windowHeight)

	return (
		<div className="ArticleSidebar sticky top-0 bg-white border-r-gray-300 border-e-2">
			<div className="  "
			     style={{overflowY:"scroll", maxHeight:windowHeight }}>
				<ul>
					<li>
						<ArticleSidebarCard />
					</li>
					<li>
						<ArticleSidebarCard />
					</li>
					<li>
						<ArticleSidebarCard />
					</li>
					<li>
						<ArticleSidebarCard />
					</li>
					<li>
						<ArticleSidebarCard />
					</li>
					<li>
						<ArticleSidebarCard />
					</li>
					<li>
						<ArticleSidebarCard />
					</li>
					<li>
						<ArticleSidebarCard />
					</li>
					<li>
						<ArticleSidebarCard />
					</li>
					<li>
						<ArticleSidebarCard />
					</li>
					<li>
						<ArticleSidebarCard />
					</li>
					<li>
						<ArticleSidebarCard />
					</li>

				</ul>
			</div>

		</div>	
	)
}

export default ArticleSidebar;