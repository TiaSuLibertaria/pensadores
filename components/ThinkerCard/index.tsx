import Thinker from "../../models/Thinker"
import { Container, Image, Name } from "./styles"

type Props = {
  thinker: Thinker
}

const ThinkerCard = ({ thinker }: Props) => {
  return (
    <Container>
      <Image source={thinker.image} />
      <Name>{thinker.name}</Name>
    </Container>
  )
}

export default ThinkerCard