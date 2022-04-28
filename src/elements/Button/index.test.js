import {render } from '@testing-library/react';
import Button from "./index";
import {BrowserRouter} from 'react-router-dom';

describe('Button', () => {
test("Should not allowed click button if isDisabled is present", () => {
    const {container} = render(<Button isDisabled></Button>);

    // eslint-disable-next-line testing-library/no-container
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.querySelector('span.disabled')).toBeInTheDocument();
})

test('Should render loading or spinner', () => {
    const {container, getByText} = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument();

    expect(container.querySelector('span')).toBeInTheDocument();
})

test('Should render <a> tag' , () => {
    const {container} = render(<Button isExternal type='link'></Button>)

    expect(container.querySelector('a')).toBeInTheDocument();
})

test('Should render <Link> component', () => {
    const {container} = render(<BrowserRouter><Button type='link' href=''></Button></BrowserRouter>)

    expect(container.querySelector("a")).toBeInTheDocument();
})

})