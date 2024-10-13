import { TableDemo } from "@/components/ui/tabledemo"; // Import the TableDemo component
import { TrendingTable } from "@/components/ui/trending-table"; // Import the TrendingTable component

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      {/* TRENDING CREATORS TABLE */}
      <h2 className="text-lg font-bold mb-6">TRENDING CREATORS</h2>
      <TrendingTable />

      {/* YOUR PORTFOLIO TABLE */}
      <h2 className="text-lg font-bold mt-10 mb-6">YOUR PORTFOLIO</h2>
      <TableDemo />
    </div>
  );
}
