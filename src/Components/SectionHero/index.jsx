import React from 'react'
import ImageAppleStore from '../../assets/btn-apple-store.svg'
import ImageGooglePlay from '../../assets/btn-google-play.svg'
import Arrow from '../../assets/arrow-explorer.svg'
import * as S from './styles'

import WomanImage from '../../assets/woman.png'

export default function SectionHero() {
    return (
        <S.Section>
            <S.Container>
                <S.Divleft>
                    <S.H1>Tenha seu Banco na palma da mão</S.H1>
                    <S.P>Todas as oprerações em um só lugar. Simples, completo e feito para você.
                    </S.P>

                    <S.Divbutton>
                        <S.Button>
                            <img src={ImageAppleStore} alt="Apple store" />
                        </S.Button>
                        <S.Button>
                            <img src={ImageGooglePlay} alt="Google play" />
                        </S.Button>
                    </S.Divbutton>
                    <S.ButtonExplore>
                        <img src={Arrow} alt="Arrow down" />
                        <S.Span>Continue Explorando</S.Span>
                    </S.ButtonExplore>
                </S.Divleft>

                <S.ImageWoman src={WomanImage} alt="woman" />
            </S.Container>
        </S.Section>
    )
}