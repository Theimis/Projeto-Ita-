import ArrowDonw from '../../assets/arrow-down.svg';
import * as S from './styles'

export default function ItemMenu({ name }) {
    return (
        <>
            <S.buttonItemMenu>
                <span>{name}</span>
                <img src={ArrowDonw} alt="seta" />

            </S.buttonItemMenu>
        </>
    );
}