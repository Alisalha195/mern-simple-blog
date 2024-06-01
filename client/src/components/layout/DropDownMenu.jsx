
import {useState} from "react" 

const DropDownMenu = () => {

	const [openMenu , setOpenMenu] = useState(false);
	const [menuValue , setMenuValue] = useState("")
	const [menuList , setMenuList] = useState([
		{title: 'sport'},
		{title: 'family'},
		{title: 'technology'},
		{title: 'science'},
	]);

	return (
		<div className="[position:relative] btn flex flex-col justify-start ">
			{/* head */}
			<div className="[border-radius:5px_5px_0_0] pl-1 bg-red-400"
				onClick={()=>setOpenMenu(state=> !state)}
			>

				{ menuValue? menuValue : menuList[0]?.title} 
			</div>

			{/* menu */}
			<div className={openMenu ? "[position:absolute] [top:45px]   [border:1px_solid_#555] [z-index:200] [width:100%] " : "hidden"}>
				{
					menuList.map(item => (
						<div key={item.title} className="pl-1 bg-blue-400 hover:bg-red-400"
							onClick={()=>{setMenuValue(item.title); setOpenMenu(false)}}
						> 
							{item.title}
						</div>
					))
				}
			</div>
		</div>
	)
}
export default DropDownMenu