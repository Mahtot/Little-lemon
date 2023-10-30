import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Main from './components/Main';
import Reservations from './components/Reservations';
test('renders learn react link', () => {
  render(<Main />);
  const linkElement = screen.getAllByText('Little Lemon');
  expect(linkElement[0]).toBeInTheDocument();
});

test("The submit button must be disabled unless the date filed is filled",()=>{
  render(<Reservations/>);
  const handleSubmit = jest.fn();
  const submitBtn = screen.getByRole('button');
  const date= screen.getByLabelText('Choose date');
   fireEvent.change(date, {target: {value: ''}});
   fireEvent.click(submitBtn)

   expect(handleSubmit).not.toHaveBeenCalled();
   expect(submitBtn).toBeDisabled();
   
})

test(`Expect the time input field to have a minimum of 1 
      and maximumof 10 value`,()=>{

        render(<Reservations/>)
        const handleSubmit = jest.fn();
        const submitBtn = screen.getByRole('button');
        const time= screen.getByLabelText('Choose time');
        fireEvent.change(time, {target: {value: 20}})
        fireEvent.click(submitBtn)
        expect(handleSubmit).not.toHaveBeenCalled();
})