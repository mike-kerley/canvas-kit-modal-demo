import React from "react";

import { Modal } from "@workday/canvas-kit-react/modal";
import { PrimaryButton } from "@workday/canvas-kit-react/button";
import { Flex, Box } from "@workday/canvas-kit-react/layout";

const App = () => {
  const handleOk = () => {
    console.log("OK clicked");
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
  };

  return (
    <Modal>
      <Modal.Target as={PrimaryButton}>Show Modal</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Sample Modal</Modal.Heading>
          <Modal.Body>
            <Box as="p" marginY="zero">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Box>
          </Modal.Body>
          <Flex gap="s" padding="xxs" marginTop="xxs">
            <Modal.CloseButton as={PrimaryButton} onClick={handleOk}>
              OK
            </Modal.CloseButton>
            <Modal.CloseButton onClick={handleCancel}>Cancel</Modal.CloseButton>
          </Flex>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};

export default App;
