import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SearchIcon from "@mui/icons-material/Search";
export default function Main() {
  const [invest, setinvest] = React.useState([]);

  const [write, setwrite] = React.useState("");

  const [show, setshow] = React.useState();

  //Love
  //computer
  //social

  //const [show2, setshow2] = React.useState();

  React.useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${write}`)
      .then((res) => res.json())

      .then((data) => setinvest(data));
  }, [write]);

  function Change(e) {
    setwrite(e.target.value);
  }

  function Click() {
    const vision = invest.map((pre) =>
      pre.meanings.map((pre1) =>
        pre1.definitions.map((pre2) => (
          <div key={pre2.definition}>
            <h4>{pre2.definition}</h4>
          </div>
        )),
      ),
    );

    setshow(vision);
  }

  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit">
            <LibraryBooksIcon />
          </IconButton>

          <Typography className="text" sx={{ marginLeft: 10 }} variant="h6">
            Dictionary
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="render">
        <div className="render1">
          <TextField
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="standard"
            label="Type word"
            onChange={Change}
          />
          <IconButton onClick={Click} color="red" sx={{ color: "black" }}>
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      <div></div>
      <div className="show1">
        <p className="">{show}</p>
      </div>
    </div>
  );
}
