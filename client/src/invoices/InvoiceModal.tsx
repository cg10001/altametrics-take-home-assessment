import { DialogHeader } from "@/components/ui/dialog"
import { TableCell } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "@radix-ui/react-dialog"

export const InvoiceModal = (props) => {
    return (
        <Dialog>
            <DialogTrigger>
                {props.text}
            </DialogTrigger>
            <DialogContent className="absolute top-1/2 left-1/2 text-black bg-white">
                test
            </DialogContent>
        </Dialog>
    )
}