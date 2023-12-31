import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { FcHome } from 'react-icons/fc';
import { useRouter } from 'next/router';



interface Props {
  isProduct?: boolean;
}

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;

const CustomizedBreadcrumbs= ({isProduct}:Props) =>{
    const router = useRouter();
    const slug = router.asPath.split('/').slice(1);

      

  return (
    <div role="presentation" onClick={()=>router.push("/")}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          className='cursor-pointer'
          component="a"
          href="/"
          label="Home"
          icon={<FcHome />}
        />
        <StyledBreadcrumb
          className='text-black font-bold'
          label={isProduct? "products" : router.query.slug}
          component="b"
          onDelete={()=>router.push("/")}
        />
      </Breadcrumbs>
    </div>
  );
};

export default CustomizedBreadcrumbs;