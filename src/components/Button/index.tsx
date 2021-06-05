import {ButtonHTMLAttributes} from 'react';
import {Container} from './styles';

interface Buttonprops extends ButtonHTMLAttributes<HTMLButtonElement>{}

export function Button({children, ...rest}:Buttonprops){
    return(
        <Container type="button" {...rest}>
            {children}
        </Container>
    )
}