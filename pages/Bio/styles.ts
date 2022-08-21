import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`

export const BioPanel = styled.View`
  background-color: #f5e653;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  margin: 10px auto;
`
export const Row = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`
export const RowName = styled.Text`
   font-size: 20px;
   font-family: 'Lusitana_700Bold';
   margin-right: 10px;
`

export const RowValue = styled.Text`
  font-size: 20px;
  font-family: Lusitana_400Regular;
`