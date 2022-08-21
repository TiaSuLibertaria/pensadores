import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useState } from 'react'
import Thinker from '../../models/thinker'
import { RootStackParams } from '../../navigation'
import hayek from '../../assets/img/Hayek.png'
import hoppe from '../../assets/img/Hoppe.png'
import mises from '../../assets/img/Mises.png'
import murray from '../../assets/img/Murray.png'
import { Container } from './styles'
import { TouchableOpacity } from 'react-native'
import ThinkerCard from '../../components/ThinkerCard'



type Props = NativeStackScreenProps<RootStackParams, 'Home'>

const Home = ({ navigation }: Props) => {
  const [thinker, setThinker] = useState<Thinker[]>([
    {
      image: hayek,
      books: ['O caminho da Servidão', 'Direito, Legislação e Liberdade,', 'Individualismo e order economica'],
      formation: 'Escola Austríaca',
      nationality: 'Austríaco',
      name: 'Friedrich August von Hayek',
      birthDay: new Date('1889-05-08T00:00:00'),
      deathDay: new Date('1992-03-23T00:00:00'),
    },
    {
      image: hoppe,
      books: ['Democracia o Deus que falhou', 'O que deve ser feito', 'Uma teoria sobre socialismo e capitalismo'],
      formation: 'Escola Austríaca',
      nationality: 'Alemã',
      name: 'Hans-Hermann Hoppe',
      birthDay: new Date('1949-09-02T00:00:00'),
    },
    {
      image: mises,
      books: ['Ação Humana', 'As seis lições', 'O calculo econômico sob o socialismo'],
      formation: 'Escola Austríaca',
      nationality: 'Austríaco',
      name: 'Ludwig Heinrich Edler von Mises',
      birthDay: new Date('1881-09-29T00:00:00'),
      deathDay: new Date('1973-10-10T00:00:00'),
    },
    {
      image: murray,
      books: ['A ética da liberdade', 'Anatomia do estado', 'O que deve ser feito'],
      formation: 'Escola Austríaca',
      nationality: 'Norte Americano',
      name: 'Murray Newton Rothbard',
      birthDay: new Date('1926-03-02T00:00:00'),
      deathDay: new Date('1995-01-07T00:00:00'),
    },
  ])

  return (
    <Container>
      {thinker.map((t, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.push('Bio', { thinker: t })}>
          <ThinkerCard thinker={t} />
        </TouchableOpacity>
      ))}
    </Container>
  )
}

export default Home 