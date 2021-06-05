import Modal from 'react-modal';
import {useForm} from 'react-hook-form';
import {FiX} from 'react-icons/fi';
import { Container, Error } from './styles';

interface NewActivityModalProps {
    isOpen: boolean;
    onRequestClose: ()=>void;
}

interface NewActivityModalData {
    courseunit: string;
    activity: string;
    date: Date;
}

export function NewActivityModal({isOpen,onRequestClose}:NewActivityModalProps){

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
                <h2>Cadastrar Atividade</h2>
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
                        placeholder="Unidade Curricular"
                        {...register("courseunit", {required:true})}
                        >
                    </input>
                    {errors.courseunit && <Error>O preenchimento do campo e obrigatorio</Error>}
                    <input 
                        type="text"
                        placeholder="Atividade"
                        {...register("activity", {required:true})}
                        >
                    </input>
                    {errors.activity && <Error>O preenchimento do campo e obrigatorio</Error>}
                    <input 
                        type="date"
                        placeholder="Data da atividade"
                        {...register("date", {required:true})}
                    >
                    </input>
                    {errors.date && <Error>O preenchimento do campo e obrigatorio</Error>}
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Container>
        </Modal>
    )
}