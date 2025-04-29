import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog"

export const InvoiceTableModal = props => {
  const { table, selectedInvoice } = props
  return (
    <Dialog>
      <DialogTrigger asChild>{table}</DialogTrigger>
      <DialogContent className="fixed font-bold border-2 top-9/20 left-1/2 p-5 text-black bg-white">
        Vendor Name: {selectedInvoice?.vendor_name}
        <br></br>
        Description: {selectedInvoice?.description}
        <br></br>
        Due Date: {selectedInvoice?.due_date}
        <br></br>
        Amount: {selectedInvoice?.amount}
        <br></br>
        Status: {selectedInvoice?.paid ? "Paid" : "Open"}
      </DialogContent>
    </Dialog>
  )
}
