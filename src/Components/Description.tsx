import { Separator } from "@/Components/ui/separator"
import { Badge } from "@/Components/ui/badge"
import { ExternalLinkIcon } from "@radix-ui/react-icons"
import { CustomLink } from "./CustomLink"
import '@/styles/app.css'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/Components/ui/hover-card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/Components/ui/table"

export const Description = () => {

  return (
    <div className='w-full'>
      <div>
        <h1 className="text-2xl">
          Alienware m15 R7 15.6" Gaming Laptop - QHD (2560x1440) 240Hz, AMD Ryzen 9 6900HX, 32GB DDR5, 1TB SSD, RTX 3070Ti, HDMI, Wifi, Webcam, Windows 11, 1-Year Premium + 6-Months Migrate Services - Black
        </h1>
        <span className="">
          <a
            className='text-colorLink hover:text-red-500 hover:border-b hover:border-red-500'
            href="https://www.amazon.com/stores/Alienware/page/C03AA9B5-1830-423F-BF8B-2BECF7FD2FEE?ref_=ast_bln"
          >
            Visit the Alienware Store
          </a>
        </span>
        <Separator color="black" className="mt-1" />
      </div>
      <div className="mt-3">
        <Badge variant="destructive" color="black">Limited time deal</Badge>
        <div className="flex gap-1 text-[29px]">
          <span className="font-thin text-red-500">-23%</span>
          <span className="price">1,649</span>
        </div>
        <div className="flex gap-1 text-[12px] text-gray-500 font-bold mt-2">
          <span>List Price:</span>
          <span className="line-through">$2,149.97</span>
          <HoverCard>
            <HoverCardTrigger>
              <span>
                <ExternalLinkIcon />
              </span>
            </HoverCardTrigger>
            <HoverCardContent>
              The List Price is the suggested retail price of a new product as provided by a manufacturer, supplier, or seller. Except for books, Amazon will display a List Price if the product was purchased by customers on Amazon or offered by other retailers at or above the List Price in at least the past 90 days. List prices may not necessarily reflect the product's prevailing market price.<br />
              <CustomLink
                text="Learn More"
                link="https://www.amazon.com/stores/Alienware/page/C03AA9B5-1830-423F-BF8B-2BECF7FD2FEE?ref_=ast_bln"
              />
            </HoverCardContent>
          </HoverCard>
        </div>
        <span className="text-[15px]">Available at a lower price from&nbsp;
          <span>
            <CustomLink
              text="other sellers"
              link='https://www.amazon.com/stores/Alienware/page/C03AA9B5-1830-423F-BF8B-2BECF7FD2FEE?ref_=ast_bln'
            />
          </span>
          &nbsp;that may not offer free Prime shipping.</span>
      </div>
      {/* selection of characteristics */}
      <div className="mt-5 text-sm">
        <span>CPU: <strong>AMD Ryzen 9 6900HX</strong></span>
        <div className="flex gap-3 mt-3">
          <a href="" className="font-bold border border-orange-500 shadow-sm shadow-orange-300 p-2">AMD Ryzen 9 6900HX</a>
          <a href="" className="border border-dashed border-gray-400 text-gray-400 p-2">Ryzen 9-6900HX</a>
          <a href="" className="border border-dashed border-gray-400 text-gray-400 p-2">Ryzen 9-7845HX</a>
        </div>
        <p className="mt-3">RAM Size: <strong>32 GB</strong></p>
        <p className="mt-3">Capacity: <strong>15.6 QHD</strong></p>
        <div className="flex gap-3 mt-3">
          <a href="" className="font-bold border border-orange-500 shadow-sm shadow-orange-300 p-2">15.6 QHD</a>
          <a href="" className="border border-dashed border-gray-400 text-gray-400 p-2">17.3 FHD</a>
          <a href="" className="border border-dashed border-gray-400 text-gray-400 p-2">18.0 FHD+</a>
        </div>
        <p className="mt-3">Style: <strong>RTX3070Ti</strong></p>
        <div className="flex gap-3 mt-3">
          <a href="" className="font-bold border border-orange-500 shadow-sm shadow-orange-300 p-2">RTX3070Ti</a>
          <a href="" className="border border-dashed border-gray-400 text-gray-400 p-2">RTX 3080</a>
          <a href="" className="border border-dashed border-gray-400 text-gray-400 p-2">RTX 4080+</a>
        </div>
      </div>

      {/* Small descriprtion */}

      <div className="my-4 text-sm">
        <Table>
          <TableBody>
            <TableRow >
              <TableCell className="font-medium">Brand</TableCell>
              <TableCell>Alienware</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Model Name</TableCell>
              <TableCell>Alienware m15 R7 AMD Gaming Laptop</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Screen Size</TableCell>
              <TableCell>15.6 Inches</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Color</TableCell>
              <TableCell>Dark Side Of The Moon</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Hard Disk Size</TableCell>
              <TableCell>	1 TB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">CPU Model</TableCell>
              <TableCell>	Ryzen 9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Ram Memory Installed Size</TableCell>
              <TableCell>32 GB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Operating System</TableCell>
              <TableCell>Windows 11 Home</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Special Feature</TableCell>
              <TableCell>Alienware m15 R7 15.6" Gaming Laptop - QHD (2560x1440) 240Hz, AMD Ryzen 9 6900HX, 32GB DDR5, 1TB SSD, RTX 3070Ti, HDMI, Wifi, Webcam, Windows 11, 1-Year Premium + 6-Months Migrate Services - BlackAlienware m15 R7 15.6" Gaming Laptop - QHD (2560x1440) 240Hz, AMD Ryzen 9 6900HX, 32GB DDR5, 1TB SSD, RTX 3070Ti, HDMI, Wifi, Webcam, Windows 11, 1-Year Premium + 6-Months Migrate… See more</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Graphics Card Description</TableCell>
              <TableCell>Integrated</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Separator />
      <div className="my-4 font-semibold">
        <h4 className="text-sm font-bold">About this item</h4>
        <ul className="flex flex-col gap-1">
          <li>
            - ALIENWARE M15 R7 GAMING LAPTOP: Play with a cutting edge using up to 170W* of exceptional performance on our most powerful AMD-based 15" laptop..Voltage:240.0 volts_of_alternating_current.Camera : 720p at 30 fps HD camera, 720p at 30 fps HD RGB-IR camera.
          </li>
          <li>
            - ELITE COOLING: Updated Alienware Cyro-tech cooling dissipates heat to maintain system stability during the highest performance states.
          </li>
          <li>
            - VIVID VISUALS: Experience smooth, fast, and stunning graphics as the developers intended with more contrast and vivid colors
          </li>
          <li>
            - SURREAL SOUND: Get deeper into gaming through an added dimension of sound that places you at the center with Dolby Atmos
          </li>
          <li>
            - NEXT LEVEL TECH: To take mega-tasking abilities to the next level, gamers can upgrade their memory post-purchase, using the two available SO-DIMM slots
          </li>
          <li>
            - LEGENDARY DESIGN: The hexagonal-shaped vents boost intake efficiency and maximize air movement to maintain performance. Plus, you can customize the colors to match your style
          </li>
        </ul>
      </div>
    </div>
  )
}