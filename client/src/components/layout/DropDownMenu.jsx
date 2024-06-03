
import {useState, useEffect} from "react" ;
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const DropDownMenu = ({menu , inputTitle , menuValue , setMenuValue, menuList , setMenuList, newValue , setNewValue ,element}) => {

	const [openMenu , setOpenMenu] = useState(false);
	const [insideMenuValue , setInsideMenuValue] = useState("");
	

	const[blocked, setBlocked] = useState(false);

	const[error, setError] = useState("")

	useEffect(()=> {
		isDuplicated() ? setError('value duplecated') : setError('')
	}, [newValue]);

	useEffect(()=>{
		if(!blocked)
			document.getElementById("title")?.focus()
	},[blocked])
	const isDuplicated = () => {
		let isEqual = false;
		menuList.forEach(category => {
			const title = category.title.toLowerCase()
			const value = newValue.toLowerCase();
			
			console.log(title , value , title.localeCompare(value))
			if(title.localeCompare(value) === 0) 
				isEqual = true
		});

		return isEqual;
	}
	const handleSaveNewValue = () => {
		
		
		if(isDuplicated()) {
			console.log('value duplecated')
			return 
		} else {
			element.title = newValue;
			element.isNew = true;
			if(newValue) {
				setMenuList([...menuList , element ])
				setBlocked(true);
				menuValue
					?	setMenuValue(newValue)
					:   setInsideMenuValue("dd");
					setOpenMenu(false) 
				} else {
				 console.log('can not add empty value');
			}
			
			
			// setNewValue("")
		}
		
	}

	const handleEditNewCategory = () => {
		const newMenuList = menuList.filter(item => (item.title != newValue));
		setMenuList(newMenuList);
		setBlocked(false);
		document.getElementById("title").focus()
		console.log("newValue",newValue);
	}

	return (
		<div className="[position:relative]  flex flex-col justify-start "
			// onMouseLeave={()=>setOpenMenu(state=> false)}
		>
			{/* head */}
			<div className=" btn flex flex-row justify-between [border-radius:5px_5px_0_0] [border:1px_solid_#aaa] pl-1 bg-[#ddd] text-[#555]" 
				onClick={()=>setOpenMenu(state=> !state)}
				
				
			> 

				<span className="[max-height:40px] [overflow:hidden]"> 
				{ menuValue
					? menuValue 
					: insideMenuValue
						?	insideMenuValue
						:   menuList[0]?.title

				
				}
				</span> 
				<KeyboardArrowDownOutlinedIcon />
			</div>

			{/* menu */}
			<div className={openMenu ? "[position:absolute] [top:40px]   [border:1px_solid_#aaa] [z-index:200] [width:100%] " : "hidden"}>
				{
					menuList?.map(item => (
						<div key={item.title} className=" pl-1 bg-[#eee] hover:bg-blue-300 text-[#555] [max-height:40px] [overflow:hidden] flex flex-row justify-between"
			
						> 
							<span className="btn pr-5 [width:70%]"
								onClick={()=>{
								menuValue
								?	setMenuValue(item.title)
								:   setInsideMenuValue("dd");
								setOpenMenu(false)
							}}
							>
								{item.title}
							</span> 
							{item.isNew && 
								<span className="btn text-[#079bcc] pr-1"
								
									onClick={handleEditNewCategory }
								>
									edit
								</span>
							}
						</div>
					))
				}

				{
					! blocked
					&&
				
					<div className="flex flex-row [width:100%] [border:1px_solid_#ddd] ">
					    
					    
						<input className="pl-2 py-1  focus:text-gray-900 text-gray-600 [width:100%] text-[24px]  [outline:none] [border-radius:7px]"
							
							placeholder={inputTitle ? inputTitle : "empty" }
							type="text"
							id="title"
							value={newValue}
							onChange={(e)=> setNewValue(e.target.value) }

						/>
						<span className={error ? "text-[#5abbff] pr-1"  : "btn text-[#079bcc] pr-1"}
							onClick={ handleSaveNewValue}
						
						>
							add
						</span>
								
						
					</div>
				}
				{/* Error */}
				<div className={error? " bg-red-500 text-white text-center" :"hidden"}>
					{error} !
				</div>
			</div>
			
		</div>
	)
}
export default DropDownMenu