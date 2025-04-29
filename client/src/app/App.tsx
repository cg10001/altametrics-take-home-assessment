import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "@/login/Login";
import { Invoices } from "../invoices/Invoices";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./style.css"

export const App = () =>{ 
  const queryClient = new QueryClient();
  return (
    <div className='h-screen bg-gray-700 flex justify-center items-center'>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Login/>}/>
            <Route path="/invoices" element={<Invoices/>}/>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
)
}