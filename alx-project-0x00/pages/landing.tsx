import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      
      <div className="my-4">
        <h2 className="text-lg font-medium mb-2">Button Sizes</h2>
        <div className="flex gap-4 items-center">
          <Button title="Small" styles="px-2 py-1 text-sm rounded-sm" />
          <Button title="Medium" styles="px-4 py-2 text-base rounded-md" />
          <Button title="Large" styles="px-6 py-3 text-lg rounded-full" />
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-lg font-medium mb-2">Button Shapes</h2>
        <div className="flex gap-4 items-center">
          <Button title="Rounded SM" styles="px-4 py-2 rounded-sm" />
          <Button title="Rounded MD" styles="px-4 py-2 rounded-md" />
          <Button title="Rounded Full" styles="px-4 py-2 rounded-full" />
        </div>
      </div>

      <Card />
    </div>
  )
}
export default Landing
