import Button from "@mui/material/Button";
import { ping_api } from "../utils";

export default function ApiTest() {
  return (
    <div>
      <Button
        onClick={async () => {
          console.log("clicking button \n");
          console.log('result: ', await ping_api("/test"));
        }}
      >
        click to test proxy
      </Button>
    </div>
  );
}
