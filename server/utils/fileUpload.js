import multer from 'multer';

// define storage
const storage = multer.diskStorage({
	detination: (req , file, cb) => {
		cb(null, "uploads/user");
	},
	filename : (req , file , cb) => {
		cb(
			null,
			 new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
		);
	},
});

// accepted file format to save
const fileFilter = (req , file , cb) => {
	if(
		file.mimetype === "image/png" ||
		file.mimetype === "image/jpg" ||
		file.mimetype === "image/jpeg" 
	) {
		cb(null , true)
	} else {
		cb(null , false)
	}
}

export const upload = multer({storage , fileFilter});

export const fileSizeFormatter = (bytes , decimal) => {
	if(bytes === 0)
		return "0 Bytes";
	const dm = decimal || 2 ;
	const sizes = ["Bytes" , "KB" , "MB", "Gb" , "TB" , "PB", "EB" , "YB", "ZB"];
	const index = Math.floor(Math.log(bytes) / Math.log(1000));

	return (
		parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
	);
}


