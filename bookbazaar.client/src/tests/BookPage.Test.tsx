//import React from 'react';
//import { render, screen, fireEvent, waitFor } from '@testing-library/react';
//import { MemoryRouter, Route } from 'react-router-dom';
//import '@testing-library/jest-dom';
//import BookPage from '../pages/BookPage';

//test('renders book details correctly', async () => {
//    // Mock the fetch function to return a dummy book object
//    global.fetch = jest.fn().mockResolvedValue({
//        json: () =>
//            Promise.resolve({
//                id: 1,
//                title: 'Sample Book',
//                author: 'Sample Author',
//                description: 'Sample Description',
//                price: 10.99,
//                coverImageUrl: 'sample-cover-image-url.jpg',
//            }),
//    });

//    // Render the BookPage component within a MemoryRouter and with mocked useParams
//    render(
//        <MemoryRouter initialEntries={['/book/1']}>
//            <Route path="/book/:id">
//                <BookPage />
//            </Route>
//        </MemoryRouter>
//    );

//    // Wait for book details to be loaded and rendered
//    await waitFor(() => {
//        expect(screen.getByText('Sample Book')).toBeInTheDocument();
//        expect(screen.getByText('Sample Author')).toBeInTheDocument();
//        expect(screen.getByText('Sample Description')).toBeInTheDocument();
//        expect(screen.getByText('$10.99')).toBeInTheDocument();
//        expect(screen.getByRole('button', { name: 'Add to cart' })).toBeInTheDocument();
//    });
//});

//test('adds item to cart when Add to cart button is clicked', async () => {
//    // Mock the fetch function to return a dummy book object
//    global.fetch = jest.fn().mockResolvedValue({
//        json: () =>
//            Promise.resolve({
//                id: 1,
//                title: 'Sample Book',
//                author: 'Sample Author',
//                description: 'Sample Description',
//                price: 10.99,
//                coverImageUrl: 'sample-cover-image-url.jpg',
//            }),
//    });

//    // Render the BookPage component within a MemoryRouter and with mocked useParams
//    render(
//        <MemoryRouter initialEntries={['/book/1']}>
//            <Route path="/book/:id">
//                <BookPage />
//            </Route>
//        </MemoryRouter>
//    );

//    // Wait for book details to be loaded and rendered
//    await waitFor(() => {
//        expect(screen.getByText('Sample Book')).toBeInTheDocument();
//    });

//    // Click the Add to cart button
//    fireEvent.click(screen.getByRole('button', { name: 'Add to cart' }));

//    // Check that the item has been added to cart
//    expect(localStorage.getItem('cart')).toContain('1');
//});