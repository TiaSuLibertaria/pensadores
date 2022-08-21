import Thinker from "./models/Thinker"

export type RootStackParams = {
  Home: undefined
  Bio: { thinker: Thinker }
}