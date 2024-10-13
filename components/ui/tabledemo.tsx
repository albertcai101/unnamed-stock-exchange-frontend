import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Updated stock data to reflect fashion designers and models
const personalities = [
  {
    name: "Virgil Abloh",
    imageUrl: "/stock.png", // Replace with the actual image path of Virgil Abloh
    marketValue: "$150.00",
    change: "+1.5%",
  },
  {
    name: "Naomi Campbell",
    imageUrl: "/stock.png", // Replace with Naomi Campbell's image
    marketValue: "$2800.00",
    change: "-0.5%",
  },
  {
    name: "Kendall Jenner",
    imageUrl: "/stock.png", // Replace with Kendall Jenner's image
    marketValue: "$3400.00",
    change: "+2.1%",
  },
  {
    name: "Rihanna",
    imageUrl: "/stock.png", // Replace with Rihanna's image
    marketValue: "$299.00",
    change: "+0.8%",
  },
  {
    name: "Gigi Hadid",
    imageUrl: "/stock.png", // Replace with Gigi Hadid's image
    marketValue: "$700.00",
    change: "-1.2%",
  },
];

export function TableDemo() {
  return (
    <Table>
      {/* <TableCaption>Current Portfolio</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Personality</TableHead>
          <TableHead>Photo</TableHead>
          <TableHead>Market Value</TableHead>
          <TableHead className="text-right">Change</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {personalities.map((personality) => (
          <TableRow key={personality.name}>
            <TableCell className="font-medium">{personality.name}</TableCell>
            <TableCell>
              <Image
                src={personality.imageUrl}
                alt={`${personality.name} photo`}
                width={40}
                height={40}
              />
            </TableCell>
            <TableCell>{personality.marketValue}</TableCell>
            <TableCell className="text-right">{personality.change}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
