import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<App/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('4');
    
  });

  it('should add 1 and 4 to get 5', () => {
    const button1 = container.getByTestId('number1');
    const buttonAdd = container.getByTestId('add');
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('5'); 
  
  });
  
  it ('should subtract 4 from 7 and get 3', () => {
      const button7 = container.getByTestId('number7');
      const buttonSubtract = container.getByTestId('subtract');
      const button4 = container.getByTestId('number4');
      const buttonEquals = container.getByTestId('equals');
      const runningTotal = container.getByTestId('running-total');
      fireEvent.click(button7);
      fireEvent.click(buttonSubtract);
      fireEvent.click(button4);
      fireEvent.click(buttonEquals);
      expect(runningTotal).toHaveTextContent('3');
  
    
  });

  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('multiply');
    const button5 = container.getByTestId('number5');
    const buttonEquals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('15');

  });

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const buttonDivide = container.getByTestId('divide');
    const button7 = container.getByTestId('number7');
    const buttonEquals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('3');


  });
  
  it('should concatenate multiple number button clicks', () => {
    const button5 = container.getByTestId('number5');
    const button9 = container.getByTestId('number9');
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button5);
    fireEvent.click(button9);
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('594');


  });

  it('should chain multiple operations together', () => {
    const button9 = container.getByTestId('number9');
    const buttonAdd = container.getByTestId('add');
    const button1 = container.getByTestId('number1');
    const buttonDivide = container.getByTestId('divide');
    const button5 = container.getByTestId('number5');
    const buttonEquals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button9);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('2');

});

  it('should clear the running total without affecting the calculation', () => {
   const button9 = container.getByTestId('number9')
   const buttonDivide = container.getByTestId('divide');
   const buttonAdd = container.getByTestId('add');
   const buttonEquals = container.getByTestId('equals');
   const buttonClear = container.getByTestId('clear');
   const runningTotal = container.getByTestId('running-total');
   fireEvent.click(button9);
   fireEvent.click(buttonDivide);
   fireEvent.click(buttonAdd);
   fireEvent.click(buttonEquals);
   fireEvent.click(buttonClear);
   expect(runningTotal).toHaveTextContent('0');

 

 });


})
