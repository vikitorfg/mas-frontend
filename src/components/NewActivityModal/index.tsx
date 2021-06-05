import Modal from 'react-modal';
import {useForm} from 'react-hook-form';
import {FiX} from 'react-icons/fi';
import { Container, Error } from './styles';

interface NewCourseUnitProps {
    isOpen: boolean;
    onRequestClose: ()=>void;
}

interface NewActivityModalData {
    name: string;
    description: string;
}

export function NewCourseUnitModal({isOpen,onRequestClose}:NewCourseUnitProps){

    const {register, handleSubmit, formState:{errors}} = useForm<NewActivityModalData>()
    
    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)))
    
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar Unidade Curricular</h2>
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <FiX size={20}/>
                </button>
                <form onSubmit={onSubmit}>
                    <input 
                        type="text"
                        placeholder="Nome"
                        {...register("name", {required:true})}
                        >
                    </input>
                    {errors.name && <Error>O preenchimento do campo e obrigatorio</Error>}
                    <input 
                        type="text"
                        placeholder="Descricao"
                        {...register("description", {required:true})}
                        >
                    </input>
                    {errors.description && <Error>O preenchimento do campo e obrigatorio</Error>}
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Container>
        </Modal>
    )
}