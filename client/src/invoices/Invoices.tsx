import type { Invoice } from "@/app/types"
import { useAppSelector } from "../app/hooks"
import type { RootState } from "../app/store"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import "./style.css"
import { useState } from "react"
import { InvoiceTableModal } from "./InvoiceTableModal"

export const Invoices = () => {
  const { access_token } = useAppSelector((state: RootState) => {
    return state.user
  })
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice>()

  const { data, isLoading } = useQuery({
    queryKey: ["invoices"],
    queryFn: () => {
      return axios.get(`http://localhost:3000/invoices`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
    },
  })
  if (isLoading) {
    return <div>loading</div>
  }
  const invoices = data.data as Invoice[]
  const date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDay()
  const year = date.getFullYear()
  console.log(invoices)
  return (
    <Table className="justify-center text-slate-300">
      <TableHeader>
        <TableRow>
          <TableHead className="text-slate-300">Date</TableHead>
          <TableHead className="text-slate-300">Payee</TableHead>
          <TableHead className="text-slate-300">Description</TableHead>
          <TableHead className="text-slate-300">Due Date</TableHead>
          <TableHead className="text-slate-300">Amount</TableHead>
          <TableHead className="text-slate-300">Status</TableHead>
        </TableRow>
      </TableHeader>
      <InvoiceTableModal
        table={
          <TableBody>
            {invoices.map((invoice: Invoice) => {
              return (
                <TableRow
                  onClick={() => {
                    setSelectedInvoice(invoice)
                  }}
                >
                  <TableCell>{`${month}/${day}/${year}`}</TableCell>
                  <TableCell>{invoice.vendor_name}</TableCell>
                  <TableCell>{invoice.description}</TableCell>
                  <TableCell>{invoice.due_date}</TableCell>
                  <TableCell>
                    {invoice.amount != 0 ? `$ ${invoice.amount}` : ""}
                  </TableCell>
                  <TableCell>{invoice.paid ? "Paid" : "Open"}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        }
        selectedInvoice={selectedInvoice}
      />
    </Table>
  )
}
