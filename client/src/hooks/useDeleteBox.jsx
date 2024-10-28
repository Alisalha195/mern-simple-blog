
import {useState} from "react"

const useDeleteBox = () => {
	const [openDeleteBox , setOpenDeleteBox] = useState(false)

	const handleOpenDeleteBox = (state) => {
		if(state == "open") 
			setOpenDeleteBox(true)

		else if(state == "close")
			setOpenDeleteBox(false)

		else 
			setOpenDeleteBox(false)
	}

	const DeleteBoxProps = {
		open : openDeleteBox ,
		handleOpenDeleteBox : setOpenDeleteBox
	}

	return DeleteBoxProps
}

export default useDeleteBox

