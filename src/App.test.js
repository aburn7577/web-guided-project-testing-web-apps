import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

// describe('login test', () => {
//     it('This is test 2', () => {
//         console.log('Doing the test')
//     })
//     test('This is test 3', () => {
//         console.log('Doing the test')
//     })
// })
test('Renders without errors', () => {
    render(<App />)
})
test('when app mounts, add animal header exists on screen', () => {
    //Arrange: render out component
    render(<App />)
    //Act: Find our header
    //get - finds a single element and if not found, fails test 
    // const header = screen.getByText("Add New Animal");
    // console.log(header);

    //query - finds a single element and if not found, returns null
    // const header = screen.queryByText("Add New Animal");
    const header = screen.queryByText(/add new animal/i);
    // console.log(header);

    //find - finds a single element and if not found, returns null
    // const header = screen.findByText("Add New Animal");
    // console.log(header);

    //Assert: Verify that header is on screen
    expect(header).toBeInTheDocument()
    expect(header).toBeTruthy()
    expect(header).toHaveTextContent(/add new animal/i)

})
