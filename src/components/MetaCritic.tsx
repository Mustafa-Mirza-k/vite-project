import { Badge } from "@chakra-ui/react";

interface Props {
    metacritic: number
}

const MetaCritic = ({ metacritic }: Props) => {
    let color = metacritic > 75 ? 'green' : metacritic > 60 ? 'yellow' : ""
  return (
    <Badge mr={0} colorScheme={color} fontSize="14px" fontWeight={"bold"}>{metacritic}</Badge>
  )
}

export default MetaCritic