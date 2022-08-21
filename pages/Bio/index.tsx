import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { RootStackParams } from '../../navigation'
import { BioPanel, Container, Row, RowName, RowValue } from './styles'

type Props = NativeStackScreenProps<RootStackParams, 'Bio'>

const Bio = ({ route }: Props) => {
  const { thinker } = route.params

  return (
    <Container>
      <BioPanel>
        <Row>
          <RowName>Nome:</RowName>
          <RowValue>{thinker.name}</RowValue>
        </Row>
        <Row>
          <RowName>Nacionalidade:</RowName>
          <RowValue>{thinker.nationality}</RowValue>
        </Row>
        <Row>
          <RowName>Nasceu em:</RowName>
          <RowValue>{thinker.birthDay.toLocaleDateString()}</RowValue>
        </Row>
        {thinker.deathDay &&
          <Row>
            <RowName>Faleceu em:</RowName>
            <RowValue>{thinker.deathDay.toLocaleDateString()}</RowValue>
          </Row>
        }
        <Row>
          <RowName>Formação:</RowName>
          <RowValue>{thinker.formation}</RowValue>
        </Row>
        <Row>
          <RowName>Obras mais conhecidas:</RowName>
          <RowValue>{thinker.books.join(', ')}</RowValue>
        </Row>
      </BioPanel>
    </Container>
  )
}

export default Bio