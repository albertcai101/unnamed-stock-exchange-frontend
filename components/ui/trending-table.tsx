import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Data for trending personalities and content creators
const trendingCreators = [
  {
    name: "Catriona Gray",
    handle: "@catriona_gray",
    imageUrl: "/stock.png", // Replace with stock image path
    faceUrl: "/catriona.png",   // Replace with face image path
    marketValue: "$1,300.00",
  },
  {
    name: "Pia Wurtzbach",
    handle: "@piawurtzbach",
    imageUrl: "/stock.png", // Replace with stock image path
    faceUrl: "/pia.png",   // Replace with face image path
    marketValue: "$1,400.00",
  },
  {
    name: "Lebron James",
    handle: "@kingjames",
    imageUrl: "/stock.png", // Replace with stock image path
    faceUrl: "/lebron.png",   // Replace with face image path
    marketValue: "$1,500.00",
  },
  {
    name: "Emma Chamberlain",
    handle: "@emmachamberlain",
    imageUrl: "/stock.png", // Replace with stock image path
    faceUrl: "/emma.png",   // Replace with face image path
    marketValue: "$900.00",
  },
  {
    name: "Zach King",
    handle: "@zachking",
    imageUrl: "/stock.png", // Replace with stock image path
    faceUrl: "/zach.png",   // Replace with face image path
    marketValue: "$850.00",
  },
];

export function TrendingTable() {
  return (
    <Table>
      <TableCaption>Trending Personalities and Content Creators</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Name</TableHead>
          <TableHead>Social Media Handle</TableHead>
          <TableHead>Stock Photo</TableHead>
          <TableHead>Face Picture</TableHead>
          <TableHead className="text-right">Market Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {trendingCreators.map((creator) => (
          <TableRow key={creator.handle}>
            <TableCell className="font-medium">{creator.name}</TableCell>
            <TableCell>{creator.handle}</TableCell>
            <TableCell>
              <Image
                src={creator.imageUrl}
                alt={`${creator.name} stock`}
                width={40}
                height={40}
              />
            </TableCell>
            <TableCell>
              <Image
                src={creator.faceUrl}
                alt={`${creator.name} face`}
                width={40}
                height={40}
              />
            </TableCell>
            <TableCell className="text-right">{creator.marketValue}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
