import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import { useState } from 'react';

interface Props {
  image:string[],
  correctImage:string,
  setImages:React.Dispatch<React.SetStateAction<string>>
}


export const  ColorPicker=({image,setImages,correctImage}:Props) =>{

  const ImageColor = [
    {
      id:1,
      value:image[0],
      color: "#000000",
    },
    {
      id:2,
      value:image[1],
      color: "#8f6453;",
    },
    {
      id:3,
      value:image[2],
      color: "#dabca2",
    },
  ]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImages(event.target.value);
  };

  return (
      <RadioGroup
        aria-labelledby="product-color-attribute"
        defaultValue={image[0]}
        sx={{ gap: 2, flexWrap: 'wrap', flexDirection: 'row' }}
      >
        {ImageColor.map(({id,color,value}) => (
          <Sheet
            key={id}
            style={{ backgroundColor: color }}
            sx={{
              position: 'relative',
              width: 30,
              height: 30,
              flexShrink: 0,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Radio
              overlay
              onChange={handleChange}
              value={value}
              checked={ correctImage === value}
            />
          </Sheet>
        ))}
      </RadioGroup>
  );
}

export default ColorPicker;