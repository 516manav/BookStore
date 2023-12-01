import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { BsFilterSquare } from "react-icons/bs";
import "../css/card.css";
import HoverRating from "./Rating";
import SelectSmall from "./SelectGenre";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function FilterDialogs({ filterBooks, RemoveFilter }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(5);
  const [Genre, setGenre] = React.useState("All");
  const [price, setPrice] = React.useState(0);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button
        className=" font-semibold border-solid py-1 text-lg border-gray-300 border-2 rounded-md"
        onClick={handleClickOpen}
      >
        <span className=" flex justify-center items-center py-1 text-xl">
          {" "}
          <BsFilterSquare className="mx-1 text-2xl" /> Filters
        </span>
      </button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="flex w-full items-end justify-end">
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <div className="flex items-center justify-center flex-col">
          {" "}
          <span
            className=" w-full flex justify-center text-3xl font-bold border-solid border-gray-300 border-b-2 "
            id="customized-dialog-title"
          >
            Filters
          </span>
          <section className="w-full flex flex-col p-4 ">
            <span className="text-xl font-semibold">Maximum Price</span>
            <input
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              className="outline-none rounded-lg p-1 w-1/2 sm:w-[95%] my-2  font-medium text-lg border-slate-300 border-solid border-2 "
              placeholder="Price"
              type="number"
            ></input>
            <span className="text-xl font-semibold my-2">Minimum Rating</span>
            <HoverRating setValue={setValue} value={value}></HoverRating>
            <span className="text-xl font-semibold my-4">Select Genre</span>
            <SelectSmall
              Genre={Genre}
              setGenre={setGenre}
              GenreList={["Thriller", "Comedey", "Romantic", "Drama", "All"]}
            />
          </section>
          <div className="mt-6 mb-4 flex w-full justify-end px-2">
            <button
              className="bg-blue-600 px-2 py-1 rounded-lg font-semibold text-white mx-2"
              onClick={() => {
                filterBooks(Genre, price, 5);
              }}
            >
              Apply Filter
            </button>
            {(price > 0 || value < 5 || Genre != "All") && (
              <button
                className="bg-red-600 px-2 py-1 rounded-lg font-semibold text-white"
                onClick={() => {
                  setGenre("All")
                  setPrice(0)
                  setValue(5);
                  RemoveFilter();
                }}
              >
                Remove Filters
              </button>
            )}
          </div>
        </div>

        <article className="w-96"></article>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Save changes
          </Button> */}
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
