import multer from 'multer';
import fs from "fs";
// define storage
const storage = multer.diskStorage({
	destination: (req , file, cb) => {
		let id = req.params.id;
		console.log('id in upload is :',id)
		let path = `uploads/user/${id}`;
		console.log('path is :',path)

		fs.mkdir(path, (err) => {
		  if (err) {
		    console.error("err :", err);
		    return;
		  }
		  console.log('Directory created successfully.');
		});

		cb(null, `${path}`);
		// cb(null, "uploads/user");
	},
	filename : (req , file , cb) => {
		// cb(
		// 	null,
		// 	 new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
		// );
		cb(
			null,
			 file.fieldname+"_"+ Date.now()+ "_" + file.originalname
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

// export const upload = multer({storage , fileFilter});
export const upload = multer({storage });

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


