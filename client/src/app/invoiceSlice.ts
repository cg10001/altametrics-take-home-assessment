import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit"
import type { Invoice } from "./types"

export type InvoiceState = {
    invoices: Invoice[]
  }

const initialState: InvoiceState = {
    invoices: []
}

export const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        setInvoices: (state : InvoiceState, action : PayloadAction<Invoice[]>) => {
            state.invoices = action.payload
        }
    }
})

export const { setInvoices } = invoiceSlice.actions

export default invoiceSlice.reducer