import {render} from '@testing-library/react';
import {GifItem} from '../../components/GifItem';

describe('Pruebas en <GifItem/>', () => { 

    const title = 'Warren Buffet';
    const url = 'https://codigo-buffetologia.com/codigoGraham.jpg';

    test('Debe de hacer match con el snapshop', () => { 

        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();

     });
});