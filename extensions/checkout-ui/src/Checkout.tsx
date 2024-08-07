import {
  reactExtension,
  Banner,
  BlockStack,
  Checkbox,
  Text,
  useApi,
  useApplyAttributeChange,
  useInstructions,
  useTranslate,
  TextField,
} from "@shopify/ui-extensions-react/checkout";
import { useEffect, useState } from "react";
// 1. Choose an extension target
export default reactExtension("purchase.checkout.contact.render-after", () => (
  <Extension />
));

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();
  const instructions = useInstructions();
  const applyAttributeChange = useApplyAttributeChange();
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (password) {
      console.log("Password changed:", password); // Log to the console to verify changes
      // Display alert with the latest input value
      if (typeof window !== 'undefined') {
        // Safe to access document here
        const element = document.querySelector('[name="email"]') as HTMLInputElement;
        if (element) {
          console.log(element.value);
        }
      }
    }
  }, [password]);

  // 3. Render a UI
  return (
    <BlockStack border={"dotted"} padding={"tight"}>
      {/* <TextField type="password" onChange={(event) => {
          setPassword(event.target.value);
        }} required label="Password" /> */}

      <TextField
        onChange={(event) => {
          console.log(event); // Log the event object
          if (event) {
            console.log(event); // Log the target object
            setPassword(event);
          } else {
            console.error('Event or event.target is undefined');
          }
        }}
        required
        label="Password"
        type="password"
      />
    </BlockStack>
  );

}