
import {useState} from "react"

// import SearchOpenBox from "./SearchOpenBox"

const useSearchBox = () => {
	const [openSearchBox , setOpenSearchBox] = useState(false)

	const handleOpenSearchBox = (state) => {
		if(state == "open") 
			setOpenSearchBox(true)

		else if(state == "close")
			setOpenSearchBox(false)

		else 
			setOpenSearchBox(false)
	}

	const searchBoxProps = {
		open : openSearchBox ,
		handleOpenSearchBox : handleOpenSearchBox
	}

	return searchBoxProps
}

export default useSearchBox

