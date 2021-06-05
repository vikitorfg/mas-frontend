import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Button } from "../../components/Button";
import { Background, Container, Content, FormContainer, InputContainer, Error } from "./styles";

interface FormData {
    email: string;
    password: string;
}

export function Login(){

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)))

    return(
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faca seu login</h2>
                    <form onSubmit={onSubmit}>
                        <InputContainer>
                            <FiMail size={40}/>
                            <input 
                                type="email" 
                                placeholder="E-mail"
                                {...register("email", {required:true})}
                            />
                        </InputContainer>
                        {errors.email && <Error>O preenchimento do campo e obrigatorio</Error>}
                        <InputContainer>
                            <FiLock size={40}/>
                            <input 
                                type="password" 
                                placeholder="Senha"
                                {...register("password", {required:true})}
                            />
                        </InputContainer>
                        {errors.password && <Error>O preenchimento do campo e obrigatorio</Error>}
                        <Button type="submit">Entrar</Button>
                    </form>
                    <Link to="/register">
                        <FiLogIn size={40}/>
                        Cadastre seu acesso
                    </Link>
                </FormContainer>
            </Content>
            <Background>

            </Background>
        </Container>
    )
}