import React,{useState} from 'react';
import Color from '@/components/shared/colorPicker';
import {FaOpencart} from 'react-icons/fa';
import {LiaEyeSolid} from 'react-icons/lia'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
const CardIcons = [
 {
    id:1,
    icon: <FaOpencart className='w-4 h-4'/>,
    poper:'Select Option'
 },
 {
    id:2,
    icon: <LiaEyeSolid className="w-4 h-4"/>,
    poper:'Quick View'
 }
]


const Card = ({}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [id, setId] = useState<number | null>(null);
  console.log(anchorEl)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>,id:number) => {
    setAnchorEl(event.currentTarget);
    setId(id)
  };

  const popper = CardIcons.find((item)=>item.id === id)?.poper

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setId(null)
  };

  const open = Boolean(anchorEl);

    return (
        <div className='w-[350px] h-[600px] p-4 flex flex-col justify-between overflow-hidden bg-textHv cursor-pointer'>
            <div className="flex justify-between">
                <div className='text-sm rounded-xl border-[1px] border-white drop-shadow-lg
                 p-2 h-8 flex items-center justify-center bg-white'>sale!</div>
                <div className='flex flex-col gap-4 items-center justify-center'>
                   {CardIcons.map(({id,icon,poper})=>(
                    <>
                      <div
                        key={id}
                        className='p-2 rounded-full bg-white drop-shadow-lg'
                        onMouseEnter={(event)=>{
                            handlePopoverOpen(event,id)
                        }}
                        onMouseLeave={handlePopoverClose}
                        >
                            {icon}
                      </div>
                      </>
                   )) }
                   <Popover
                           id="mouse-over-popover"
                           sx={{
                             pointerEvents: 'none',
                           }}
                           open={open}
                           anchorEl={anchorEl}
                           anchorOrigin={{
                             vertical: 'center',
                             horizontal: 'left',
                           }}
                           transformOrigin={{
                             vertical:"top",
                             horizontal: 'right',
                           }}
                           onClose={handlePopoverClose}
                           disableRestoreFocus
                         >
                           <Typography sx={{ p: 1 }}>{popper}</Typography>
                      </Popover>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div>products name</div>
                <div>$85-$100</div>
                <div className='flex gap-2'>
                  <Color/>  
                </div>
            </div>
            </div>
    );
};

export default Card;