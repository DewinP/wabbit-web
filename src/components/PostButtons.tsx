import { Button, ButtonGroup, Flex } from "@chakra-ui/core";
import React from "react";

interface PostButtonsProps {
  commentsAmmount: number | undefined;
}

export const PostButtons: React.FC<PostButtonsProps> = ({
  commentsAmmount,
}) => {
  return (
    <Flex mt="5px" mb="5px">
      <ButtonGroup spacing={3} variant="ghost" size="sm" color="grey">
        <Button leftIcon="chat" p="5px">
          {commentsAmmount ? commentsAmmount : 0} comments
        </Button>
        <Button leftIcon="attachment">share</Button>
        <Button leftIcon="plus-square">save</Button>
        <Button leftIcon="info-outline">report</Button>
      </ButtonGroup>
    </Flex>
  );
};
