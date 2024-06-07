

export const getCategoryByTitle = (list , title)=> {

	let categoryId = ""
	list?.map(category => {
				if(category.title === title)
					categoryId = category._id;
	});
	return categoryId;
}

export const getUserByUsername = (list , username)=> {

	let userId = ""
	list?.map(user => {
				if(user.username === username)
					userId = user._id;
	});
	return userId;
}

// export const isValid = (value , type)=> {
// 	let valid = false
// 	if(type == "searchText") {
// 		value
// 	}
// 	return valid;
// }