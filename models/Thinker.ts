import { ImageSourcePropType } from "react-native"

type Thinker = {
  name: string
  image: ImageSourcePropType
  birthDay: Date
  deathDay?: Date
  formation: string
  nationality: string
  books: string[]
}

export default Thinker