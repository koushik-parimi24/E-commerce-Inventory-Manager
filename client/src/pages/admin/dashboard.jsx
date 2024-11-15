import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Bar, BarChart, CartesianGrid,XAxis } from "recharts";
import { ChartContainer,ChartTooltip, ChartTooltipContent  } from "@/components/ui/chart";
import { chartConfig } from "@/config";




function AdminDashboard() {
    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ];

    return (
        <div className="flex flex-col">
            <div className="w-full mb-10"> 
                <Table >
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$2500.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV002</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$1100.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV003</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$2400.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV004</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$1250.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV005</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$14000.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV006</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$2500.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <div className="w-full">
            <ChartContainer config={chartConfig} className="h-fit w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>

            </div>
        </div>
  );
}

export default AdminDashboard;