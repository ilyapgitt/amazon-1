import '@/styles/app.css'
import { BiSolidMap } from 'react-icons/bi';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/Components/ui/alert-dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/Components/ui/table"
import { Input } from "@/Components/ui/input"
import { Separator } from './ui/separator';
import { Button } from './ui/button';



export const BuySection = () => {
  return (
    <div>
      <div className="border border-gray-300 rounded-md p-4">
        <h4 className="font-bold">Buy new:</h4>
        <div className="flex gap-1 text-[29px]">
          <span className="price">1,649</span>
        </div>
        <p className='my-4 text-md text-red-600 font-semibold leading-tight'>
          This item cannot be shipped to your selected delivery location. Please choose a different delivery location.
        </p>

        <AlertDialog>
          <AlertDialogTrigger>
            <span className='text-sm text-colorLink flex gap-1 items-center'>
              <BiSolidMap /> Deliver to Ukraine
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Choose your location
              </AlertDialogTitle>
              <Separator />
              <AlertDialogDescription>
                Delivery options and delivery speeds may vary for different locations
              </AlertDialogDescription>
              <Button>Sign in to see your address</Button>
              <div className="flex items-center justify-center mt-4">
                <div className="w-20 border-b border-gray-400"></div>
                <div className="text-sm px-1">or inter a US zip code</div>
                <div className="w-20 border-b border-gray-400"></div>
              </div>
              <div className='flex gap-2'>
                <Input />
                <Button>Apply</Button>
              </div>
              <div className="flex items-center justify-center mt-4">
                <div className="w-full border-b border-gray-400"></div>
                <div className="text-sm px-1">or</div>
                <div className="w-full border-b border-gray-400"></div>
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Ukraine</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                  <SelectItem value="Italy">Italy</SelectItem>
                </SelectContent>
              </Select>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Done</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <p className='mt-2 text-lg font-semibold text-green-600'>In Stock</p>

        <div className='mt-2'>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Quantity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <button className='w-full border rounded-full bg-yellow-100 mt-3 py-1'>Add to Cart</button>
        <div className="my-4 text-[13px]">
          <Table>
            <TableBody>
              <TableRow >
                <TableCell>Ships from</TableCell>
                <TableCell>Amazon.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sold by</TableCell>
                <TableCell>Amazon.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Returns</TableCell>
                <TableCell>
                  <a href="" className='text-colorLink'>
                    Eligible for Return, Refund or Replacement within 30 days of receipt
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Payment</TableCell>
                <TableCell><a href="" className='text-colorLink'>Secure transaction</a></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <Button className='w-full mt-4 bg-white text-gray-400 border'>Add to List</Button>
    </div>
  )
}