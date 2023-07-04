import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

const InputSubscription=()=> {
  const [data, setData] = React.useState<{
    email: string;
    status: 'initial' | 'loading' | 'failure' | 'sent';
  }>({
    email: '',
    status: 'initial',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: 'loading' }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: '', status: 'sent' });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: 'failure' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} id="demo">
      <FormControl>
        <FormLabel
          sx={{
            color: 'text.secondary',
          }}
        >
          just type your email and hit enter
        </FormLabel>
        <Input
          sx={{ '--Input-decoratorChildHeight': '45px' }}
          placeholder="Email"
          type="email"
          required
          value={data.email}
          onChange={(event) =>
            setData({ email: event.target.value, status: 'initial' })
          }
          error={data.status === 'failure'}
          endDecorator={
            <Button
              variant="solid"
              color="primary"
              loading={data.status === 'loading'}
              type="submit"
              sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              Subscribe
            </Button>
          }
        />
        {data.status === 'failure' && (
          <FormHelperText
          sx={{
            color: 'text.secondary',
           }}
          >
            Oops! something went wrong, please try again later.
          </FormHelperText>
        )}
        {data.status === 'sent' && (
          <FormHelperText
           sx={{
            color: 'text.secondary',
           }}
          >
            You are all set!
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
}

export default InputSubscription