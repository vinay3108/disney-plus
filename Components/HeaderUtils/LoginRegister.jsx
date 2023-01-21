import  react,{useState,useEffect} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function LoginRegister(props) {
  const [open, setOpen] = useState(true);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handleClose = () => {
    setOpen(false);
    props.setOpen(false);
  };

  const submitHandler=async(e)=>{
    e.preventDefault();
   const res=await axios.post("http://localhost:4000/api/v1/login",{email,password});
   if(res.status===200){
    sessionStorage.setItem('user',JSON.stringify(res.data.user));
    props.setUser(res.data.user);
    handleClose();
   }
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitHandler}>Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}