import React from 'react';

import * as S from './styles';

import ItemList from './ItemList';

import PhoneIcon from '../../assets/icon-phone.svg';
import SoluctionIcon from '../../assets/icon-solutions.svg';
import OptionIcon from '../../assets/icon-options.svg';
import CardIcon from '../../assets/icon-card.svg';

import ImagePhone from '../../assets/phone.png'

export default function ServiceSection() {
    return (
        <S.Section>
            <S.Container>
                <S.DivLeft>
                    <S.Span>Serviços exclusivos</S.Span>
                    <S.H2>Gerencie suas finanças sem sair de casa</S.H2>
                    <S.P>Veja como voçê pode cuidar das suas finanças pelo app dop Itau de forma segura, rapida e o melhor , no conforto da sua casa
                    </S.P>


                    <S.Ul>
                        <S.Li>
                            <ItemList img={PhoneIcon} alt="soluction icon" p="Acompanhar sua conta, fazer transferencias e pagamentos de onde estiver " />
                        </S.Li>

                        <S.Li>
                            <ItemList img={SoluctionIcon} alt="soluction icon" p="Soluções de emprestimo e negociação para organizar suas finanças" />
                        </S.Li>

                        <S.Li>
                            <ItemList img={OptionIcon} alt="soluction icon" p="Diversas opções de investimento de acordo com seu perfil de investidor" />
                        </S.Li>
                        <S.Li>
                            <ItemList img={CardIcon} alt="soluction icon" p="Acompanhe a fartura do seu cartão de credito e faça compras online com seu cartão virtual" />
                        </S.Li>
                    </S.Ul>
                </S.DivLeft>
            </S.Container>
            <S.DivRight>
                <S.Img src={ImagePhone} alt="phone" />
            </S.DivRight>
        </S.Section>
    )
}