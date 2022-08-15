import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 
    const category = 'Warren Buffet';
    
    test('debe de mostrar el loading inicialmente', () => {  
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category={ category } />);
        expect( screen.getByText( 'Cargando...'));
        expect( screen.getByText( category ));
    });
    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title:'Warren Buffet',
                url: 'https://local.buffet.jpg'
            },
            {
                id: '123',
                title:'Pytter Lynch',
                url: 'https://local.lynch.jpg'
            },
            {
                id: '123ABC',
                title:'Bemhamin Graham',
                url: 'https://local.graham.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category }/>);
        expect( screen.getAllByRole('img').length ).toBe(3);
    });
});