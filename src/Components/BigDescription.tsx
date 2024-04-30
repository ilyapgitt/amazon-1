import { Separator } from "./ui/separator"

export const BigDescription = () => {
  return (
    <div className="mt-3">
      <h3 className="font-bold text-2xl">What`s in the box</h3>
      <ul className="my-3 text-sm">
        <li>- Notebook</li>
        <li>- Power Adapter</li>
        <li>- Power Cord</li>
        <li>- Documentation</li>
      </ul>
  
      <Separator />
    </div>
  )
}