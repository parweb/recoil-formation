import React from "react";
import { RecoilRoot } from "recoil";

import Todos from "./Todos";

export default function App() {
  return (
    <RecoilRoot>
      <Todos />
    </RecoilRoot>
  );
}
