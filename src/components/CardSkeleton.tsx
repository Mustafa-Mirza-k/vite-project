import { Card, CardBody } from "@chakra-ui/card";
import { Skeleton, SkeletonText } from "@chakra-ui/skeleton";

const CardSkeleton = () => {
  return (
    <Card className="Card">
      <CardBody>
        <Skeleton height={230} ></Skeleton>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default CardSkeleton;
