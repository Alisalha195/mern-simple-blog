
import {Navigate} from 'react-router-dom'

import {AppBar ,Button ,Card ,CardActions , CardContent, CardMedia , CssBaseline ,Grid , Stack, Box, Toolbar, Typography, Container, Link } from '@mui/material';

import { auth } from '../../../../firebase/firebase';

const NotAuth = ()=> {
  const userID = auth.currentUser?.uid

  return ( 
	<Box>      
		{
		  userID ? <Navigate to='/login' />
		  : <Typography variant="h3">Forbidden</Typography>
		}
	</Box>
  );
}

export default NotAuth