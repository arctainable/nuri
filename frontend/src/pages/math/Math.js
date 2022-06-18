import React from "react";
import AllMathList from '../../components/math/AllMathList'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Math.css'

function Math() {
  const [Alignments, setAlignments] = React.useState('');

  const handleChange = (event) => {
    setAlignments(event.target.value);
  };
  return (
    <div>
      <div className="contents-title">
        <h2>문제 풀러가기 </h2>
        <hr />
      </div>

      <>
      <Box sx={{ minWidth: 20 }}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">정렬</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Alignments}
            defaultValue={Alignments}
            label="Alignments"
            onChange={handleChange}
          >
            <MenuItem value={'newest'}>최신순</MenuItem>
            <MenuItem value={'popular'}>조회순</MenuItem>
          </Select>
        </FormControl>
      </Box>
      </>

      <AllMathList />
    </div>
  )  
}

export default Math