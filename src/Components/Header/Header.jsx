import React from 'react';

import * as S from './styles'

import ItemMenu from './ItemMenu';
import LogoItau from '../../assets/logo.svg';
import IconUser from '../../assets/icon-user.svg'


export default function Header() {
    return (
        <S.header>
            <S.Container>
                <S.ContainerItens>
                    <div>
                        <S.Img src={LogoItau} alt="logo itau" />
                    </div>

                    <S.ul>
                        <S.li>
                            <ItemMenu name="Para você" />
                        </S.li>
                        <S.li>
                            <ItemMenu name="Para empresas" />
                        </S.li>
                        <S.li>
                            <ItemMenu name="Serviços" />
                        </S.li>
                        <S.li>
                            <ItemMenu name="Ajuda" />
                        </S.li>
                    </S.ul>

                    <S.DivButtonAccess>
                        <S.ButtonAccess>
                            <img src={IconUser} alt="Icon User" />
                            <span>Acessar Conta</span>
                        </S.ButtonAccess>
                    </S.DivButtonAccess>
                </S.ContainerItens>
            </S.Container>
        </S.header>
    )
}