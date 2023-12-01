import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from "@mui/icons-material/Star";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { FcContacts } from "react-icons/fc";
import "../css/card.css"
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({image,title,description,price,by,contact,address,page,rating}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //   const content={
  //   title: "Atomic Habit",
  //   dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nesciunt nemo quaerat earum repellat expedita blanditiis eaque nobis exercitationem quos alias iusto culpa ullam vel explicabo impedit, nisi suscipit eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequuntur reiciendis eaque quia aliquid blanditiis aspernatur repudiandae, dolorum ratione, mollitia autem eligendi dolor magnam commodi ad eveniet non perferendis possimus!",
  //   img: "https://th.bing.com/th/id/OIP.hnClNwesqw4d2kUL9x4PggHaHa?pid=ImgDet&rs=1",
  //   owner: "Shiv",
  //   add: "raigad dfdffssdfsdfssf",
  //   contact: "964504244",
  // }
  const home = "card-button";
  const map="mapCardbtn";
  return (
    <React.Fragment>
      <button
        className={(page == "home" && home) || (page == "map" && map)}
        onClick={handleClickOpen}
      >
        More info
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        ></DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <article className="body scale-in-ver-top ">
          <section className="top ">
            <section className="img-sec">
              <img src={image} alt="title" />
            </section>
            <div className="px-7 font-semibold text-lg my-2">
              Price:{price}Rs
            </div>
            <div className="claim-gicft-sec">
              <button className="cart">Claim a gift</button>
            </div>
          </section>
          <section className="bottom">
            <section className="basic-details">
              <div className="sig-title">{title}</div>
              <div className="text-xl mb-2">author</div>
              <div className="my-2 font-semibold text-lg flex items-center">
                Rating: 5<StarIcon className="text-yellow-500 mx-1" />
              </div>
              <div className="sig-author mb-4">
                <span className="font-semibold text-lg ">Description:</span>
                <div className="max-h-[12rem]  overflow-y-scroll pr-3">
                  {description}
                </div>
              </div>
            </section>

            <div className="owner-details">
              <section className="owner">
                <span className="icon">
                  <BsFillPersonLinesFill />
                </span>
                <div className="box">
                  <div className="up">Owner</div>
                  <div className="down">{by}</div>
                </div>
              </section>
              <section className="contact">
                <span className="icon">
                  <FcContacts />
                </span>
                <div className="box">
                  <div className="up">contact</div>
                  <div className="down">{contact}</div>
                </div>
              </section>
              <section className="add">
                <span className="icon">
                  <ImLocation />
                </span>
                <div className="box">
                  <div className="up">Address</div>
                  <div className="down">{address}</div>
                </div>
              </section>
            </div>
          </section>
        </article>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Save changes
          </Button> */}
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}