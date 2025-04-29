import type { RootState } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";
import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "../login/login";
import { useState } from "react";
import { Invoices } from "../invoices/Invoices";

export const App = () =>{ 
  const [testValue, useTestValue] = useState(2);
  const invoices = useAppSelector((state: RootState) => {
    console.log(state.invoice)
    return state.invoice.invoices
  });
  const dispatch = useAppDispatch();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path="/invoices" element={<Invoices/>}/>
      </Routes>
    </BrowserRouter>
)
}