import React from 'react'
import StarBorderTwoToneIcon from '@mui/icons-material/StarBorderTwoTone';
import StarHalfTwoToneIcon from '@mui/icons-material/StarHalfTwoTone';
import StarIcon from '@mui/icons-material/Star';
import { Wrap } from '@chakra-ui/react';

const Star = ({reviews}) => {
    console.log(reviews)
 
  const ratingStar=Array.from({length:5},(elem,index)=>{
        let number=index+0.5

        return <span key={index}>
            { reviews >=index+1?(StarIcon):reviews>=number?(StarHalfTwoToneIcon):( StarBorderTwoToneIcon )}
        </span>


    })
    return (
        <Wrap>
        <div >
            {ratingStar}
        </div>
        </Wrap>
   
  )
}

export default Star